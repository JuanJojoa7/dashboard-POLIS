(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, freq, mkChart, CC } = Dashboard;

  class DemograficoSection extends BaseSection {
    constructor(){
      super('demografico','Demográfico');
      this.filterSource=true;
      this.data = [
        {"Codigo":"E-0001","Edad":38,"Rango":"36-45","Sexo":"Hombre","NSE":4,"Etnia":"Ninguna","Educacion":"Doctorado","Discapacidad":"Sí","EstadoCivil":"Viudo/a"},
        {"Codigo":"E-0002","Edad":41,"Rango":"36-45","Sexo":"Mujer","NSE":5,"Etnia":"Afrocolombiano","Educacion":"Maestría","Discapacidad":"No","EstadoCivil":"Casado/a"},
        {"Codigo":"E-0003","Edad":38,"Rango":"36-45","Sexo":"Mujer","NSE":2,"Etnia":"Ninguna","Educacion":"Técnico/Tecnológico","Discapacidad":"Sí","EstadoCivil":"Viudo/a"},
        {"Codigo":"E-0004","Edad":36,"Rango":"36-45","Sexo":"Mujer","NSE":1,"Etnia":"Ninguna","Educacion":"Técnico/Tecnológico","Discapacidad":"No","EstadoCivil":"Unión libre"},
        {"Codigo":"E-0005","Edad":37,"Rango":"36-45","Sexo":"Mujer","NSE":3,"Etnia":"Ninguna","Educacion":"Universitario","Discapacidad":"No","EstadoCivil":"Unión libre"},
        {"Codigo":"E-0006","Edad":35,"Rango":"26-35","Sexo":"Hombre","NSE":3,"Etnia":"Ninguna","Educacion":"Técnico/Tecnológico","Discapacidad":"No","EstadoCivil":"Unión libre"},
        {"Codigo":"E-0007","Edad":28,"Rango":"26-35","Sexo":"Hombre","NSE":4,"Etnia":"Ninguna","Educacion":"Universitario","Discapacidad":"No","EstadoCivil":"Viudo/a"},
        {"Codigo":"E-0008","Edad":58,"Rango":"55-65","Sexo":"Mujer","NSE":3,"Etnia":"Afrocolombiano","Educacion":"Técnico/Tecnológico","Discapacidad":"No","EstadoCivil":"Unión libre"},
        {"Codigo":"E-0009","Edad":61,"Rango":"55-65","Sexo":"Hombre","NSE":2,"Etnia":"Afrocolombiano","Educacion":"Bachillerato/Secundaria","Discapacidad":"No","EstadoCivil":"Unión libre"},
        {"Codigo":"E-0010","Edad":63,"Rango":"55-65","Sexo":"Mujer","NSE":6,"Etnia":"Ninguna","Educacion":"Especialización","Discapacidad":"No","EstadoCivil":"Unión libre"},
        {"Codigo":"E-0011","Edad":29,"Rango":"26-35","Sexo":"Mujer","NSE":4,"Etnia":"Ninguna","Educacion":"NA","Discapacidad":"No","EstadoCivil":"Casado/a"},
        {"Codigo":"E-0012","Edad":24,"Rango":"18-25","Sexo":"Hombre","NSE":4,"Etnia":"Ninguna","Educacion":"Maestría","Discapacidad":"No","EstadoCivil":"Casado/a"},
        {"Codigo":"E-0013","Edad":22,"Rango":"18-25","Sexo":"Mujer","NSE":4,"Etnia":"Ninguna","Educacion":"Bachillerato/Secundaria","Discapacidad":"No","EstadoCivil":"Viudo/a"},
        {"Codigo":"E-0014","Edad":32,"Rango":"26-35","Sexo":"Hombre","NSE":4,"Etnia":"Ninguna","Educacion":"Universitario","Discapacidad":"No","EstadoCivil":"Casado/a"},
        {"Codigo":"E-0015","Edad":31,"Rango":"26-35","Sexo":"Hombre","NSE":5,"Etnia":"Ninguna","Educacion":"NA","Discapacidad":"No","EstadoCivil":"Viudo/a"},
        {"Codigo":"E-0016","Edad":33,"Rango":"26-35","Sexo":"Mujer","NSE":4,"Etnia":"Ninguna","Educacion":"Universitario","Discapacidad":"No","EstadoCivil":"Casado/a"},
        {"Codigo":"E-0017","Edad":34,"Rango":"26-35","Sexo":"Mujer","NSE":4,"Etnia":"Ninguna","Educacion":"Maestría","Discapacidad":"No","EstadoCivil":"Casado/a"},
        {"Codigo":"E-0018","Edad":22,"Rango":"18-25","Sexo":"Hombre","NSE":1,"Etnia":"Ninguna","Educacion":"Bachillerato/Secundaria","Discapacidad":"No","EstadoCivil":"Viudo/a"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-demografico">
  <div class="sech"><h2>&#x1F464; Datos Demogr&aacute;ficos</h2><p>Perfil sociodemogr&aacute;fico de los encuestados</p></div>
  <div class="g2"><div class="kpi"><div class="v" id="d-n">18</div><div class="l">Total encuestados</div></div><div class="kpi g"><div class="v" id="d-edad">&mdash;</div><div class="l">Edad promedio</div></div></div>
  <div class="g3"><div class="card"><div class="ct">Sexo</div><div class="cw"><canvas id="c-sexo"></canvas></div></div><div class="card"><div class="ct">NSE</div><div class="cw"><canvas id="c-nse"></canvas></div></div><div class="card"><div class="ct">Pertenencia &eacute;tnica</div><div class="cw"><canvas id="c-etnia"></canvas></div></div><div class="card"><div class="ct">Nivel educativo</div><div class="cw"><canvas id="c-edu"></canvas></div></div><div class="card"><div class="ct">Discapacidad</div><div class="cw"><canvas id="c-disc"></canvas></div></div><div class="card"><div class="ct">Estado civil</div><div class="cw"><canvas id="c-civil"></canvas></div></div><div class="card"><div class="ct">Grupos de edad</div><div class="cw"><canvas id="c-rango"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('d-n',n);
      
      // Edad promedio
      const edades=data.map(r=>r["Edad"]).filter(v=>v&&v>0&&v<150);
      set('d-edad',edades.length?Math.round(edades.reduce((a,b)=>a+b,0)/edades.length):'\u2014');

      // Sexo - Doughnut
      const sexoFm=freq(data,"Sexo");
      const sexoK=Object.keys(sexoFm).sort();
      mkChart('c-sexo','doughnut',sexoK,[{data:sexoK.map(k=>sexoFm[k]),backgroundColor:['#6366f1','#ec4899'],borderWidth:0}],{legend:true});

      // NSE - Bar
      const nseFm=freq(data,"NSE");
      const nseK=Object.keys(nseFm).sort((a,b)=>+a-+b);
      mkChart('c-nse','bar',nseK.map(k=>'Estrato '+k),[{label:'Personas',data:nseK.map(k=>nseFm[k]),backgroundColor:CC,borderRadius:5,borderWidth:0}]);

      // Pertenencia étnica - Doughnut
      const etniaFm=freq(data,"Etnia");
      const etniaK=Object.keys(etniaFm).sort();
      mkChart('c-etnia','doughnut',etniaK,[{data:etniaK.map(k=>etniaFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});

      // Nivel educativo - Bar
      const eduFm=freq(data,"Educacion");
      const eduK=Object.keys(eduFm).filter(k=>k!=='NA');
      mkChart('c-edu','bar',eduK,[{label:'Personas',data:eduK.map(k=>eduFm[k]),backgroundColor:['#10b981'],borderRadius:5,borderWidth:0}]);

      // Discapacidad - Bar
      const discFm=freq(data,"Discapacidad");
      const discK=['No','Sí'].filter(k=>k in discFm);
      mkChart('c-disc','bar',discK,[{label:'Personas',data:discK.map(k=>discFm[k]),backgroundColor:['#06b6d4'],borderRadius:5,borderWidth:0}]);

      // Estado civil - Doughnut
      const civilFm=freq(data,"EstadoCivil");
      const civilK=Object.keys(civilFm).sort();
      mkChart('c-civil','doughnut',civilK,[{data:civilK.map(k=>civilFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});

      // Grupos de edad (Rango) - Bar
      const rangoFm=freq(data,"Rango");
      const rangoOrder=['18-25','26-35','36-45','46-55','55-65'];
      const rangoK=rangoOrder.filter(k=>k in rangoFm);
      mkChart('c-rango','bar',rangoK,[{label:'Personas',data:rangoK.map(k=>rangoFm[k]),backgroundColor:'#06b6d4',borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new DemograficoSection());
})();
