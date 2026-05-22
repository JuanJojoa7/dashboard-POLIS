(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, freq, mkChart, CC } = Dashboard;

  class DemograficoSection extends BaseSection {
    constructor(){
      super('demografico','Demográfico');
      this.filterSource=true;
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-demografico">
  <div class="sech"><h2>&#x1F464; Datos Demogr&aacute;ficos</h2><p>Perfil sociodemogr&aacute;fico de los encuestados</p></div>
  <div class="g4"><div class="kpi"><div class="v" id="d-n">18</div><div class="l">Total encuestados</div></div><div class="kpi g"><div class="v" id="d-edad">&mdash;</div><div class="l">Edad promedio</div></div><div class="kpi y"><div class="v" id="d-muj">&mdash;</div><div class="l">% Mujeres</div></div><div class="kpi c"><div class="v" id="d-disc">&mdash;</div><div class="l">% Con discapacidad</div></div></div>
  <div class="g3"><div class="card"><div class="ct">Sexo (P4)</div><div class="cw"><canvas id="c-sexo"></canvas></div></div><div class="card"><div class="ct">Estrato Socioecon&oacute;mico (P5)</div><div class="cw"><canvas id="c-estrato"></canvas></div></div><div class="card"><div class="ct">Nivel Educativo (P7)</div><div class="cw"><canvas id="c-edu"></canvas></div></div><div class="card"><div class="ct">Etnia / Pueblo (P6)</div><div class="cw"><canvas id="c-etnia"></canvas></div></div><div class="card"><div class="ct">Estado Civil (P10)</div><div class="cw"><canvas id="c-civil"></canvas></div></div><div class="card"><div class="ct">Grupos de edad (P2)</div><div class="cw"><canvas id="c-edad"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('d-n',n);
      const anos=data.map(r=>r["2. Año de nacimiento"]).filter(v=>v&&v>1900&&v<2015);
      set('d-edad',anos.length?Math.round(2026-anos.reduce((a,b)=>a+b,0)/anos.length):'\u2014');
      const muj=data.filter(r=>r["4. ¿Cómo se identifica usted?"]===2).length;
      set('d-muj',pct(muj,n));
      const disc=data.filter(r=>r["9. En su hogar, ¿Usted o alguien cuenta con algún tipo de discapacidad física y/o mental?"]===1).length;
      set('d-disc',pct(disc,n));

      mkChart('c-sexo','doughnut',['Hombre','Mujer'],[{data:[data.filter(r=>r["4. ¿Cómo se identifica usted?"]===1).length,data.filter(r=>r["4. ¿Cómo se identifica usted?"]===2).length],backgroundColor:['#6366f1','#ec4899'],borderWidth:0}],{legend:true});

      const estFm=freq(data,"5. ¿Cuál es el estrato socio-económico de su vivienda?");
      const estK=Object.keys(estFm).sort((a,b)=>+a-+b);
      mkChart('c-estrato','bar',estK.map(k=>'Estrato '+k),[{label:'Personas',data:estK.map(k=>estFm[k]),backgroundColor:CC,borderRadius:5,borderWidth:0}]);

      const eduMap={'1':'Ninguno','2':'Primaria','3':'Secundaria','4':'Técnico','5':'Universitario','6':'Posgrado','7':'Maestría','8':'Doctorado','9':'Especializ.'};
      const eduFm=freq(data,"7.1.1 ¿Cuál es el nivel educativo más alto alcanzado por usted (así no haya terminado) y el último grado aprobado en este nivel? NIVEL");
      const eduK=Object.keys(eduFm).sort((a,b)=>+a-+b);
      mkChart('c-edu','bar',eduK.map(k=>eduMap[k]||k),[{label:'Personas',data:eduK.map(k=>eduFm[k]),backgroundColor:['#10b981'],borderRadius:5,borderWidth:0}]);

      const etnMap={'1':'Indígena','2':'Gitano','3':'Raizal','4':'Palenquero','5':'Afrocolomb.','6':'Ninguna'};
      const etnFm=freq(data,"6. De acuerdo a su cultura, pueblo o rasgos físicos usted se reconoce como:");
      const etnK=Object.keys(etnFm).sort();
      mkChart('c-etnia','doughnut',etnK.map(k=>etnMap[k]||k),[{data:etnK.map(k=>etnFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});

      const civMap={'1':'Casado/a','2':'Separado/a','3':'Soltero/a','4':'Unión libre','5':'Viudo/a'};
      const civFm=freq(data,"10. Usted actualmente:");
      const civK=Object.keys(civFm).sort();
      mkChart('c-civil','doughnut',civK.map(k=>civMap[k]||k),[{data:civK.map(k=>civFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});

      const edades=anos.map(a=>2026-a);
      const bins=['18-25','26-35','36-45','46-55','56-65','65+'];
      const bc=[0,0,0,0,0,0];
      edades.forEach(e=>{if(e<=25)bc[0]++;else if(e<=35)bc[1]++;else if(e<=45)bc[2]++;else if(e<=55)bc[3]++;else if(e<=65)bc[4]++;else bc[5]++;});
      mkChart('c-edad','bar',bins,[{label:'Personas',data:bc,backgroundColor:'#06b6d4',borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new DemograficoSection());
})();
