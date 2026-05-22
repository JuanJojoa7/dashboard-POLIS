(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, freq, mkChart, CC } = Dashboard;

  class BienestarSection extends BaseSection {
    constructor(){
      super('bienestar','Bienestar');
      this.filterSource=true;
      this.data = [
        {"Codigo":"E-0001","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Doctorado","Satisfaccion":9,"QueFalta":"NA","VidaPosible":8,"VidaPena":10,"FelizBS1":9,"RioBS1":9,"AprendioBS1":10,"DisfrutBS1":9,"PreocupBS1":2,"DeprimidoBS1":0,"RabiaBS1":0,"EstresBS1":10,"DolorFisBS1":0,"SoledadBS1":9,"FrecSoledad":"Frecuentemente","VidaFamBS2":10,"TrabajoBS2":10,"VidaSentiBS2":10,"SaludBS2":8,"SituEconBS2":8,"NivelIngBS2":8,"EducacionBS2":10,"LugarViveBS2":5,"TiempoLibreBS2":9},
        {"Codigo":"E-0002","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Casado/a","NSE":5,"Educacion":"Maestría","Satisfaccion":5,"QueFalta":"Ingresos/dinero","VidaPosible":7,"VidaPena":9,"FelizBS1":6,"RioBS1":7,"AprendioBS1":9,"DisfrutBS1":7,"PreocupBS1":7,"DeprimidoBS1":4,"RabiaBS1":2,"EstresBS1":8,"DolorFisBS1":9,"SoledadBS1":4,"FrecSoledad":"Frecuentemente","VidaFamBS2":8,"TrabajoBS2":9,"VidaSentiBS2":9,"SaludBS2":5,"SituEconBS2":7,"NivelIngBS2":6,"EducacionBS2":6,"LugarViveBS2":8,"TiempoLibreBS2":4},
        {"Codigo":"E-0003","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":2,"Educacion":"Técnico/Tecnológico","Satisfaccion":6,"QueFalta":"Ingresos/dinero","VidaPosible":3,"VidaPena":4,"FelizBS1":5,"RioBS1":3,"AprendioBS1":2,"DisfrutBS1":5,"PreocupBS1":3,"DeprimidoBS1":0,"RabiaBS1":0,"EstresBS1":1,"DolorFisBS1":0,"SoledadBS1":0,"FrecSoledad":"Frecuentemente","VidaFamBS2":9,"TrabajoBS2":1,"VidaSentiBS2":0,"SaludBS2":6,"SituEconBS2":5,"NivelIngBS2":4,"EducacionBS2":2,"LugarViveBS2":8,"TiempoLibreBS2":9},
        {"Codigo":"E-0004","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":1,"Educacion":"Técnico/Tecnológico","Satisfaccion":10,"QueFalta":"NA","VidaPosible":10,"VidaPena":10,"FelizBS1":10,"RioBS1":5,"AprendioBS1":10,"DisfrutBS1":10,"PreocupBS1":0,"DeprimidoBS1":0,"RabiaBS1":1,"EstresBS1":3,"DolorFisBS1":0,"SoledadBS1":0,"FrecSoledad":"Nunca","VidaFamBS2":10,"TrabajoBS2":10,"VidaSentiBS2":10,"SaludBS2":10,"SituEconBS2":10,"NivelIngBS2":10,"EducacionBS2":10,"LugarViveBS2":10,"TiempoLibreBS2":8},
        {"Codigo":"E-0005","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Universitario","Satisfaccion":10,"QueFalta":"NA","VidaPosible":10,"VidaPena":10,"FelizBS1":10,"RioBS1":10,"AprendioBS1":8,"DisfrutBS1":8,"PreocupBS1":9,"DeprimidoBS1":0,"RabiaBS1":0,"EstresBS1":0,"DolorFisBS1":0,"SoledadBS1":0,"FrecSoledad":"Nunca","VidaFamBS2":10,"TrabajoBS2":10,"VidaSentiBS2":10,"SaludBS2":10,"SituEconBS2":10,"NivelIngBS2":9,"EducacionBS2":10,"LugarViveBS2":10,"TiempoLibreBS2":8},
        {"Codigo":"E-0006","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","Satisfaccion":10,"QueFalta":"NA","VidaPosible":8,"VidaPena":9,"FelizBS1":9,"RioBS1":8,"AprendioBS1":9,"DisfrutBS1":9,"PreocupBS1":5,"DeprimidoBS1":2,"RabiaBS1":2,"EstresBS1":2,"DolorFisBS1":1,"SoledadBS1":1,"FrecSoledad":"Nunca","VidaFamBS2":9,"TrabajoBS2":9,"VidaSentiBS2":10,"SaludBS2":8,"SituEconBS2":8,"NivelIngBS2":8,"EducacionBS2":7,"LugarViveBS2":8,"TiempoLibreBS2":8},
        {"Codigo":"E-0007","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Universitario","Satisfaccion":6,"QueFalta":"Educacion","VidaPosible":6,"VidaPena":10,"FelizBS1":0,"RioBS1":4,"AprendioBS1":10,"DisfrutBS1":0,"PreocupBS1":10,"DeprimidoBS1":3,"RabiaBS1":7,"EstresBS1":10,"DolorFisBS1":10,"SoledadBS1":6,"FrecSoledad":"Algunas veces","VidaFamBS2":6,"TrabajoBS2":2,"VidaSentiBS2":0,"SaludBS2":1,"SituEconBS2":5,"NivelIngBS2":5,"EducacionBS2":7,"LugarViveBS2":9,"TiempoLibreBS2":0},
        {"Codigo":"E-0008","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","Satisfaccion":5,"QueFalta":"Ingresos/dinero","VidaPosible":8,"VidaPena":8,"FelizBS1":10,"RioBS1":9,"AprendioBS1":7,"DisfrutBS1":10,"PreocupBS1":3,"DeprimidoBS1":0,"RabiaBS1":0,"EstresBS1":0,"DolorFisBS1":2,"SoledadBS1":0,"FrecSoledad":"Nunca","VidaFamBS2":6,"TrabajoBS2":98,"VidaSentiBS2":7,"SaludBS2":7,"SituEconBS2":5,"NivelIngBS2":5,"EducacionBS2":2,"LugarViveBS2":5,"TiempoLibreBS2":5},
        {"Codigo":"E-0009","Sexo":"Hombre","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":2,"Educacion":"Bachillerato/Secundaria","Satisfaccion":9,"QueFalta":"Trabajo/empleo estable","VidaPosible":10,"VidaPena":9,"FelizBS1":8,"RioBS1":8,"AprendioBS1":10,"DisfrutBS1":3,"PreocupBS1":2,"DeprimidoBS1":9,"RabiaBS1":null,"EstresBS1":2,"DolorFisBS1":10,"SoledadBS1":10,"FrecSoledad":"Nunca","VidaFamBS2":10,"TrabajoBS2":10,"VidaSentiBS2":10,"SaludBS2":5,"SituEconBS2":5,"NivelIngBS2":5,"EducacionBS2":5,"LugarViveBS2":7,"TiempoLibreBS2":5},
        {"Codigo":"E-0010","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":6,"Educacion":"Especialización","Satisfaccion":9,"QueFalta":"Ingresos/dinero","VidaPosible":10,"VidaPena":10,"FelizBS1":7,"RioBS1":7,"AprendioBS1":4,"DisfrutBS1":10,"PreocupBS1":5,"DeprimidoBS1":0,"RabiaBS1":2,"EstresBS1":2,"DolorFisBS1":1,"SoledadBS1":0,"FrecSoledad":"Frecuentemente","VidaFamBS2":5,"TrabajoBS2":9,"VidaSentiBS2":10,"SaludBS2":9,"SituEconBS2":9,"NivelIngBS2":5,"EducacionBS2":8,"LugarViveBS2":10,"TiempoLibreBS2":10},
        {"Codigo":"E-0011","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"NA","Satisfaccion":7,"QueFalta":"Ingresos/dinero","VidaPosible":7,"VidaPena":10,"FelizBS1":5,"RioBS1":5,"AprendioBS1":5,"DisfrutBS1":8,"PreocupBS1":5,"DeprimidoBS1":2,"RabiaBS1":0,"EstresBS1":5,"DolorFisBS1":0,"SoledadBS1":0,"FrecSoledad":"Nunca","VidaFamBS2":7,"TrabajoBS2":9,"VidaSentiBS2":10,"SaludBS2":null,"SituEconBS2":7,"NivelIngBS2":7,"EducacionBS2":9,"LugarViveBS2":8,"TiempoLibreBS2":3},
        {"Codigo":"E-0012","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","Satisfaccion":8,"QueFalta":"Ingresos/dinero","VidaPosible":7,"VidaPena":7,"FelizBS1":7,"RioBS1":8,"AprendioBS1":6,"DisfrutBS1":5,"PreocupBS1":4,"DeprimidoBS1":2,"RabiaBS1":1,"EstresBS1":6,"DolorFisBS1":0,"SoledadBS1":0,"FrecSoledad":"Raramente","VidaFamBS2":8,"TrabajoBS2":0,"VidaSentiBS2":8,"SaludBS2":6,"SituEconBS2":5,"NivelIngBS2":0,"EducacionBS2":9,"LugarViveBS2":8,"TiempoLibreBS2":8},
        {"Codigo":"E-0013","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Bachillerato/Secundaria","Satisfaccion":8,"QueFalta":"Nada / Está satisfecho","VidaPosible":8,"VidaPena":9,"FelizBS1":9,"RioBS1":8,"AprendioBS1":7,"DisfrutBS1":8,"PreocupBS1":3,"DeprimidoBS1":1,"RabiaBS1":4,"EstresBS1":5,"DolorFisBS1":3,"SoledadBS1":1,"FrecSoledad":"Raramente","VidaFamBS2":9,"TrabajoBS2":98,"VidaSentiBS2":7,"SaludBS2":7,"SituEconBS2":7,"NivelIngBS2":7,"EducacionBS2":9,"LugarViveBS2":9,"TiempoLibreBS2":6},
        {"Codigo":"E-0014","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","Satisfaccion":7,"QueFalta":"Tiempo libre","VidaPosible":8,"VidaPena":8,"FelizBS1":7,"RioBS1":4,"AprendioBS1":5,"DisfrutBS1":9,"PreocupBS1":10,"DeprimidoBS1":9,"RabiaBS1":8,"EstresBS1":9,"DolorFisBS1":2,"SoledadBS1":1,"FrecSoledad":"Algunas veces","VidaFamBS2":10,"TrabajoBS2":6,"VidaSentiBS2":8,"SaludBS2":7,"SituEconBS2":7,"NivelIngBS2":7,"EducacionBS2":5,"LugarViveBS2":2,"TiempoLibreBS2":1},
        {"Codigo":"E-0015","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":5,"Educacion":"NA","Satisfaccion":7,"QueFalta":"Trabajo/empleo estable","VidaPosible":6,"VidaPena":5,"FelizBS1":7,"RioBS1":4,"AprendioBS1":3,"DisfrutBS1":10,"PreocupBS1":6,"DeprimidoBS1":6,"RabiaBS1":1,"EstresBS1":4,"DolorFisBS1":0,"SoledadBS1":3,"FrecSoledad":"Algunas veces","VidaFamBS2":8,"TrabajoBS2":8,"VidaSentiBS2":9,"SaludBS2":8,"SituEconBS2":6,"NivelIngBS2":4,"EducacionBS2":5,"LugarViveBS2":7,"TiempoLibreBS2":8},
        {"Codigo":"E-0016","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","Satisfaccion":7,"QueFalta":"Ingresos/dinero","VidaPosible":8,"VidaPena":7,"FelizBS1":7,"RioBS1":8,"AprendioBS1":6,"DisfrutBS1":6,"PreocupBS1":3,"DeprimidoBS1":0,"RabiaBS1":4,"EstresBS1":1,"DolorFisBS1":4,"SoledadBS1":1,"FrecSoledad":"Raramente","VidaFamBS2":9,"TrabajoBS2":5,"VidaSentiBS2":9,"SaludBS2":8,"SituEconBS2":5,"NivelIngBS2":5,"EducacionBS2":6,"LugarViveBS2":6,"TiempoLibreBS2":7},
        {"Codigo":"E-0017","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","Satisfaccion":8,"QueFalta":"Ingresos/dinero","VidaPosible":9,"VidaPena":10,"FelizBS1":8,"RioBS1":4,"AprendioBS1":3,"DisfrutBS1":8,"PreocupBS1":2,"DeprimidoBS1":0,"RabiaBS1":2,"EstresBS1":5,"DolorFisBS1":2,"SoledadBS1":0,"FrecSoledad":"Raramente","VidaFamBS2":8,"TrabajoBS2":7,"VidaSentiBS2":9,"SaludBS2":8,"SituEconBS2":8,"NivelIngBS2":9,"EducacionBS2":10,"LugarViveBS2":9,"TiempoLibreBS2":2},
        {"Codigo":"E-0018","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":1,"Educacion":"Bachillerato/Secundaria","Satisfaccion":7,"QueFalta":"Ingresos/dinero","VidaPosible":6,"VidaPena":4,"FelizBS1":5,"RioBS1":4,"AprendioBS1":5,"DisfrutBS1":3,"PreocupBS1":7,"DeprimidoBS1":5,"RabiaBS1":4,"EstresBS1":8,"DolorFisBS1":9,"SoledadBS1":5,"FrecSoledad":"Frecuentemente","VidaFamBS2":7,"TrabajoBS2":7,"VidaSentiBS2":4,"SaludBS2":7,"SituEconBS2":7,"NivelIngBS2":5,"EducacionBS2":5,"LugarViveBS2":6,"TiempoLibreBS2":8}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-bienestar">
  <div class="sech"><h2>&#x1F60A; Bienestar</h2><p>Evaluación del bienestar general y emocional</p></div>
  <div class="g3"><div class="kpi"><div class="v" id="b-satis">&mdash;</div><div class="l">Satisfacción con todos los aspectos de la vida</div></div><div class="kpi"><div class="v" id="b-posib">&mdash;</div><div class="l">¿En qué medida piensa que está viviendo la mejor vida posible?</div></div><div class="kpi"><div class="v" id="b-pena">&mdash;</div><div class="l">¿en qué medida piensa que lo que hace en su vida vale la pena?</div></div></div>
  <div class="g2"><div class="card"><div class="ct">¿Qué le hace falta para que esté satisfecho con su vida?</div><div class="cw"><canvas id="c-qfalta"></canvas></div></div><div class="card"><div class="ct">Emociones del día anterior — Promedio 0-10</div><div class="cw"><canvas id="c-emociones"></canvas></div></div></div>
  <div class="g2"><div class="card"><div class="ct">¿Con qué frecuencia se siente solo(a)?</div><div class="cw"><canvas id="c-soledad"></canvas></div></div><div class="card"><div class="ct">Satisfacción por áreas de vida — Promedio 0-10</div><div class="cw"><canvas id="c-areas"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      const avg = (arr) => {
        const vals = arr.filter(v => v !== null && v !== "." && v !== 98 && !isNaN(v) && v >= 0 && v <= 10).map(Number);
        return vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : '—';
      };

      set('b-satis', avg(data.map(r=>r.Satisfaccion)));
      set('b-posib', avg(data.map(r=>r.VidaPosible)));
      set('b-pena', avg(data.map(r=>r.VidaPena)));

      const faltaFm = freq(data, "QueFalta");
      const faltaOrder = ['Ingresos/dinero','Educacion','Trabajo/empleo estable','Nada / Está satisfecho','Tiempo libre'];
      const faltaK = faltaOrder.filter(k => k in faltaFm);
      mkChart('c-qfalta','bar',faltaK,[{label:'Personas',data:faltaK.map(k=>faltaFm[k]),backgroundColor:CC,borderRadius:5,borderWidth:0}]);

      const emotionFields = ['FelizBS1','RioBS1','AprendioBS1','DisfrutBS1','PreocupBS1','DeprimidoBS1','RabiaBS1','EstresBS1','DolorFisBS1','SoledadBS1'];
      const emotionLabels = ['Feliz','Rió','Aprendió','Disfrutó','Preocupado','Deprimido','Rabia','Estrés','Dolor físico','Soledad'];
      const emotionProms = emotionFields.map(f => avg(data.map(r=>r[f])));
      const emotionColors = ['#10b981','#10b981','#10b981','#10b981','#ef4444','#ef4444','#ef4444','#ef4444','#ef4444','#ef4444'];
      mkChart('c-emociones','bar',emotionLabels,[{label:'Promedio 0-10',data:emotionProms.map(Number),backgroundColor:emotionColors,borderRadius:5,borderWidth:0}]);

      const soledadFm = freq(data, "FrecSoledad");
      const soledadOrder = ['Nunca','Raramente','Algunas veces','Frecuentemente'];
      const soledadK = soledadOrder.filter(k => k in soledadFm);
      mkChart('c-soledad','bar',soledadK,[{label:'Personas',data:soledadK.map(k=>soledadFm[k]),backgroundColor:CC,borderRadius:5,borderWidth:0}]);

      const areaFields = ['VidaFamBS2','TrabajoBS2','VidaSentiBS2','SaludBS2','SituEconBS2','NivelIngBS2','EducacionBS2','LugarViveBS2','TiempoLibreBS2'];
      const areaLabels = ['Vida familiar','Trabajo','Vida sentimental','Salud','Situación económica','Nivel ingresos','Educación','Lugar donde vive','Tiempo libre'];
      const areaProms = areaFields.map(f => avg(data.map(r=>r[f])));
      mkChart('c-areas','bar',areaLabels,[{label:'Promedio 0-10',data:areaProms.map(Number),backgroundColor:CC,borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new BienestarSection());
})();
