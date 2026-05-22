(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class TransporteSection extends BaseSection {
    constructor(){
      super('transporte','Transporte');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Doctorado","MedioTransporte":"A pie","Transbordos":"","TiempoIda":15,"TiempoRegreso":15,"UsoApps":"Sí"},
        {"Codigo":"E-0002","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Casado/a","NSE":5,"Educacion":"Maestría","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":30,"TiempoRegreso":60,"UsoApps":"Sí"},
        {"Codigo":"E-0003","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":2,"Educacion":"Técnico/Tecnológico","MedioTransporte":"Bicicleta","Transbordos":2,"TiempoIda":120,"TiempoRegreso":120,"UsoApps":"Sí"},
        {"Codigo":"E-0004","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":1,"Educacion":"Técnico/Tecnológico","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":60,"TiempoRegreso":60,"UsoApps":"No"},
        {"Codigo":"E-0005","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Universitario","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":"","TiempoRegreso":"","UsoApps":"Sí"},
        {"Codigo":"E-0006","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":"","TiempoRegreso":"","UsoApps":"Sí"},
        {"Codigo":"E-0007","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Universitario","MedioTransporte":"Metro (Cable)","Transbordos":"","TiempoIda":20,"TiempoRegreso":20,"UsoApps":"Sí"},
        {"Codigo":"E-0008","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","MedioTransporte":"Bicicleta","Transbordos":0,"TiempoIda":"","TiempoRegreso":"","UsoApps":"No"},
        {"Codigo":"E-0009","Sexo":"Hombre","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":2,"Educacion":"Bachillerato/Secundaria","MedioTransporte":"Bicicleta","Transbordos":1,"TiempoIda":10,"TiempoRegreso":10,"UsoApps":"No"},
        {"Codigo":"E-0010","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":6,"Educacion":"Especialización","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":90,"TiempoRegreso":90,"UsoApps":"Sí"},
        {"Codigo":"E-0011","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"NA","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":15,"TiempoRegreso":30,"UsoApps":"Sí"},
        {"Codigo":"E-0012","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","MedioTransporte":"Carro particular","Transbordos":"","TiempoIda":"","TiempoRegreso":"","UsoApps":"Sí"},
        {"Codigo":"E-0013","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Bachillerato/Secundaria","MedioTransporte":"Carro particular","Transbordos":"","TiempoIda":20,"TiempoRegreso":20,"UsoApps":"Sí"},
        {"Codigo":"E-0014","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","MedioTransporte":"Bicicleta","Transbordos":1,"TiempoIda":60,"TiempoRegreso":30,"UsoApps":"Sí"},
        {"Codigo":"E-0015","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":5,"Educacion":"NA","MedioTransporte":"Metro (Cable)","Transbordos":"","TiempoIda":"","TiempoRegreso":"","UsoApps":"Sí"},
        {"Codigo":"E-0016","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":20,"TiempoRegreso":30,"UsoApps":"Sí"},
        {"Codigo":"E-0017","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","MedioTransporte":"MIO / Bus SITP","Transbordos":"","TiempoIda":20,"TiempoRegreso":35,"UsoApps":"Sí"},
        {"Codigo":"E-0018","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":1,"Educacion":"Bachillerato/Secundaria","MedioTransporte":"Bicicleta","Transbordos":2,"TiempoIda":60,"TiempoRegreso":50,"UsoApps":"Sí"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-transporte">
  <div class="sech"><h2>&#x1F68C; Transporte</h2><p>Caracterización de movilidad y medios de transporte utilizados</p></div>
  <div class="g3"><div class="kpi"><div class="v" id="t-transbordos">&mdash;</div><div class="l">Transbordos promedio</div></div><div class="kpi"><div class="v" id="t-tiempo-ida">&mdash;</div><div class="l">Tiempo promedio de ida (minutos)</div></div><div class="kpi"><div class="v" id="t-tiempo-regreso">&mdash;</div><div class="l">Tiempo promedio de regreso (minutos)</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Medio de transporte principal</div><div class="cw"><canvas id="c-medio"></canvas></div></div><div class="card"><div class="ct">Uso de aplicaciones móviles para gestión de transporte y movilidad</div><div class="cw"><canvas id="c-apps"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      // Transbordos promedio: excluir vacíos, solo valores válidos
      const transbordosVals = data
        .map(r => r["Transbordos"])
        .filter(v => v !== '' && v !== null && v !== undefined && !isNaN(v))
        .map(Number);
      const transbordosProm = transbordosVals.length
        ? (transbordosVals.reduce((a,b)=>a+b,0)/transbordosVals.length).toFixed(1)
        : '—';
      set('t-transbordos', transbordosProm);

      // Tiempo promedio de ida
      const tiempoIdaVals = data
        .map(r => r["TiempoIda"])
        .filter(v => v !== '' && v !== null && v !== undefined && !isNaN(v))
        .map(Number);
      const tiempoIdaProm = tiempoIdaVals.length
        ? (tiempoIdaVals.reduce((a,b)=>a+b,0)/tiempoIdaVals.length).toFixed(1)
        : '—';
      set('t-tiempo-ida', tiempoIdaProm);

      // Tiempo promedio de regreso
      const tiempoRegresoVals = data
        .map(r => r["TiempoRegreso"])
        .filter(v => v !== '' && v !== null && v !== undefined && !isNaN(v))
        .map(Number);
      const tiempoRegresoProm = tiempoRegresoVals.length
        ? (tiempoRegresoVals.reduce((a,b)=>a+b,0)/tiempoRegresoVals.length).toFixed(1)
        : '—';
      set('t-tiempo-regreso', tiempoRegresoProm);

      // Gráfico circular: Medio de transporte principal
      const medioFm = freq(data, "MedioTransporte", ['']);
      const medioK = Object.keys(medioFm).sort();
      mkChart('c-medio', 'doughnut', medioK, [{data: medioK.map(k=>medioFm[k]), backgroundColor: CC, borderWidth: 0}], {legend: true});

      // Gráfico de barras: Uso de aplicaciones
      const appsFm = freq(data, "UsoApps", ['']);
      const appsK = ['Sí', 'No'].filter(k => k in appsFm);
      mkChart('c-apps', 'bar', appsK, [{label: 'Personas', data: appsK.map(k=>appsFm[k]), backgroundColor: '#3b82f6', borderRadius: 5, borderWidth: 0}]);
    }
  }

  registerSection(new TransporteSection());
})();
