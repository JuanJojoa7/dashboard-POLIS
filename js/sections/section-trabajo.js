(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class TrabajoSection extends BaseSection {
    constructor(){
      super('trabajo','Trabajo');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","Actividad":"Trabajando (empleado/independiente)","Horas":80,"Años":11,"Participacion":"Actividades de voluntariado","Satisfaccion":8,"Util":10,"Felicidad":8,"Estres":9,"Salario":0,"Animo":10,"Valoracion":10,"Pertenencia":10,"Confianza":9,"Jefe":8,"Inclusivo":5,"Flexibilidad":10,"Motivado":8,"Logro":7,"Aprendizaje":10,"SalarioMasBajo":"Sí","Loteria":"Sí","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0002","Actividad":"Trabajando (empleado/independiente)","Horas":40,"Años":2,"Participacion":"Actividades de voluntariado","Satisfaccion":7,"Util":7,"Felicidad":7,"Estres":6,"Salario":3,"Animo":8,"Valoracion":9,"Pertenencia":10,"Confianza":5,"Jefe":10,"Inclusivo":7,"Flexibilidad":6,"Motivado":8,"Logro":7,"Aprendizaje":10,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"No","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0003","Actividad":"Trabajando (empleado/independiente)","Horas":48,"Años":1,"Participacion":"Actividades de voluntariado","Satisfaccion":2,"Util":2,"Felicidad":3,"Estres":5,"Salario":9,"Animo":8,"Valoracion":9,"Pertenencia":9,"Confianza":4,"Jefe":3,"Inclusivo":4,"Flexibilidad":5,"Motivado":4,"Logro":3,"Aprendizaje":3,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0004","Actividad":"Buscando trabajo (desempleado)","Horas":36,"Años":4,"Participacion":"Actividades de asociación comunitaria o barrial","Satisfaccion":10,"Util":10,"Felicidad":9,"Estres":1,"Salario":10,"Animo":10,"Valoracion":10,"Pertenencia":10,"Confianza":10,"Jefe":10,"Inclusivo":10,"Flexibilidad":10,"Motivado":10,"Logro":10,"Aprendizaje":10,"SalarioMasBajo":"Sí","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato verbal","ConformidadContrato":"NA","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0005","Actividad":"Trabajando (empleado/independiente)","Horas":42,"Años":0.91,"Participacion":"Deporte recreativo o competitivo","Satisfaccion":10,"Util":10,"Felicidad":10,"Estres":0,"Salario":10,"Animo":10,"Valoracion":10,"Pertenencia":10,"Confianza":7,"Jefe":9,"Inclusivo":10,"Flexibilidad":10,"Motivado":10,"Logro":8,"Aprendizaje":10,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0006","Actividad":"Trabajando (empleado/independiente)","Horas":40,"Años":14,"Participacion":"Actividades de voluntariado","Satisfaccion":9,"Util":9,"Felicidad":9,"Estres":4,"Salario":9,"Animo":9,"Valoracion":9,"Pertenencia":10,"Confianza":8,"Jefe":7,"Inclusivo":9,"Flexibilidad":8,"Motivado":8,"Logro":9,"Aprendizaje":9,"SalarioMasBajo":"No","Loteria":"Sí","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0007","Actividad":"Trabajando (empleado/independiente)","Horas":30,"Años":3,"Participacion":"Otra actividad fuera de la principal","Satisfaccion":5,"Util":5,"Felicidad":5,"Estres":3,"Salario":3,"Animo":8,"Valoracion":8,"Pertenencia":0,"Confianza":0,"Jefe":0,"Inclusivo":4,"Flexibilidad":10,"Motivado":0,"Logro":7,"Aprendizaje":0,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"No","TipoContrato":"Contrato escrito","ConformidadContrato":"No","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0008","Actividad":"Incapacitado permanentemente para trabajar","Horas":null,"Años":null,"Participacion":"","Satisfaccion":98,"Util":98,"Felicidad":98,"Estres":98,"Salario":98,"Animo":98,"Valoracion":98,"Pertenencia":98,"Confianza":98,"Jefe":98,"Inclusivo":98,"Flexibilidad":8,"Motivado":98,"Logro":98,"Aprendizaje":98,"SalarioMasBajo":"NA","Loteria":"NA","TrabajoAsegurado":"NA","TipoContrato":"NA","ConformidadContrato":"NA","SeguridadSocial":"Solo pensión"},
        {"Codigo":"E-0009","Actividad":"Trabajando (empleado/independiente)","Horas":56,"Años":25,"Participacion":"Actividades de voluntariado","Satisfaccion":".","Util":10,"Felicidad":10,"Estres":3,"Salario":5,"Animo":8,"Valoracion":9,"Pertenencia":8,"Confianza":1,"Jefe":0,"Inclusivo":3,"Flexibilidad":8,"Motivado":8,"Logro":8,"Aprendizaje":9,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0010","Actividad":"Buscando trabajo (desempleado)","Horas":30,"Años":46,"Participacion":"Actividades de voluntariado","Satisfaccion":10,"Util":10,"Felicidad":10,"Estres":4,"Salario":9,"Animo":10,"Valoracion":10,"Pertenencia":10,"Confianza":10,"Jefe":10,"Inclusivo":10,"Flexibilidad":10,"Motivado":10,"Logro":10,"Aprendizaje":10,"SalarioMasBajo":"No","Loteria":"Sí","TrabajoAsegurado":"Sí","TipoContrato":"Contrato verbal","ConformidadContrato":"NA","SeguridadSocial":"Pensionado/a"},
        {"Codigo":"E-0011","Actividad":"Trabajando (empleado/independiente)","Horas":40,"Años":0.08,"Participacion":"Actividades de voluntariado","Satisfaccion":10,"Util":10,"Felicidad":10,"Estres":0,"Salario":10,"Animo":10,"Valoracion":10,"Pertenencia":10,"Confianza":10,"Jefe":10,"Inclusivo":10,"Flexibilidad":10,"Motivado":10,"Logro":10,"Aprendizaje":10,"SalarioMasBajo":"Sí","Loteria":"Sí","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0012","Actividad":"Realizando oficios del hogar","Horas":null,"Años":null,"Participacion":"","Satisfaccion":98,"Util":98,"Felicidad":98,"Estres":98,"Salario":98,"Animo":98,"Valoracion":98,"Pertenencia":98,"Confianza":98,"Jefe":98,"Inclusivo":98,"Flexibilidad":98,"Motivado":98,"Logro":98,"Aprendizaje":98,"SalarioMasBajo":"NA","Loteria":"NA","TrabajoAsegurado":"NA","TipoContrato":"NA","ConformidadContrato":"NA","SeguridadSocial":"NA"},
        {"Codigo":"E-0013","Actividad":"Realizando oficios del hogar","Horas":null,"Años":null,"Participacion":"","Satisfaccion":98,"Util":98,"Felicidad":98,"Estres":98,"Salario":98,"Animo":98,"Valoracion":98,"Pertenencia":98,"Confianza":98,"Jefe":98,"Inclusivo":98,"Flexibilidad":98,"Motivado":98,"Logro":98,"Aprendizaje":98,"SalarioMasBajo":"NA","Loteria":"NA","TrabajoAsegurado":"NA","TipoContrato":"NA","ConformidadContrato":"NA","SeguridadSocial":"NA"},
        {"Codigo":"E-0014","Actividad":"Trabajando (empleado/independiente)","Horas":40,"Años":0.33,"Participacion":"Actividades de voluntariado","Satisfaccion":6,"Util":8,"Felicidad":7,"Estres":8,"Salario":9,"Animo":9,"Valoracion":8,"Pertenencia":10,"Confianza":8,"Jefe":8,"Inclusivo":9,"Flexibilidad":7,"Motivado":7,"Logro":8,"Aprendizaje":9,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"Sí","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0015","Actividad":"Buscando trabajo (desempleado)","Horas":25,"Años":0.08,"Participacion":"Actividades de voluntariado","Satisfaccion":10,"Util":10,"Felicidad":10,"Estres":5,"Salario":".","Animo":".","Valoracion":".","Pertenencia":".","Confianza":".","Jefe":".","Inclusivo":".","Flexibilidad":".","Motivado":".","Logro":".","Aprendizaje":".","SalarioMasBajo":"No","Loteria":"Sí","TrabajoAsegurado":"Sí","TipoContrato":"Contrato verbal","ConformidadContrato":"NA","SeguridadSocial":"NS/NR"},
        {"Codigo":"E-0016","Actividad":"Trabajando (empleado/independiente)","Horas":44,"Años":0.08,"Participacion":"Actividades de voluntariado","Satisfaccion":6,"Util":8,"Felicidad":7,"Estres":0,"Salario":6,"Animo":6,"Valoracion":6,"Pertenencia":8,"Confianza":5,"Jefe":2,"Inclusivo":8,"Flexibilidad":7,"Motivado":5,"Logro":7,"Aprendizaje":7,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"No","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0017","Actividad":"Trabajando (empleado/independiente)","Horas":45,"Años":10,"Participacion":"Actividades de voluntariado","Satisfaccion":7,"Util":8,"Felicidad":7,"Estres":4,"Salario":9,"Animo":10,"Valoracion":10,"Pertenencia":6,"Confianza":9,"Jefe":8,"Inclusivo":10,"Flexibilidad":10,"Motivado":7,"Logro":9,"Aprendizaje":10,"SalarioMasBajo":"No","Loteria":"No","TrabajoAsegurado":"Sí","TipoContrato":"Contrato escrito","ConformidadContrato":"No","SeguridadSocial":"Ambos (salud y pensión)"},
        {"Codigo":"E-0018","Actividad":"Realizando oficios del hogar","Horas":null,"Años":null,"Participacion":"","Satisfaccion":98,"Util":98,"Felicidad":98,"Estres":98,"Salario":98,"Animo":98,"Valoracion":98,"Pertenencia":98,"Confianza":98,"Jefe":98,"Inclusivo":98,"Flexibilidad":98,"Motivado":98,"Logro":98,"Aprendizaje":98,"SalarioMasBajo":"NA","Loteria":"NA","TrabajoAsegurado":"NA","TipoContrato":"NA","ConformidadContrato":"NA","SeguridadSocial":"NA"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-trabajo">
  <div class="sech"><h2>&#x1F4BC; Trabajo</h2><p>Caracterización laboral y percepción sobre las condiciones de trabajo</p></div>
  <div class="g3"><div class="kpi"><div class="v" id="tr-horas">&mdash;</div><div class="l">Horas de trabajo promedio</div></div><div class="kpi"><div class="v" id="tr-anos">&mdash;</div><div class="l">Años promedio dedicados a la actividad principal o empleo</div></div></div>
  <div class="g1"><div class="card"><div class="ct">¿En qué actividad ocupó la mayor parte del tiempo la semana pasada?</div><div class="cw"><canvas id="c-actividad"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Participación en actividade por fuera de la actividad principal</div><div class="cw"><canvas id="c-participacion"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Percepción sobre las condiciones laborales: Respuestas en promedio</div><div class="cw t"><canvas id="c-condiciones"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Distribución de frecuencia de las siguientes preguntas:</div><div class="cw"><canvas id="c-tr2"></canvas></div></div></div>
  <div class="g2"><div class="card"><div class="ct">Acceso a seguridad social</div><div class="cw"><canvas id="c-seguridad"></canvas></div></div><div class="card"><div class="ct">Tipo de contrato</div><div class="cw"><canvas id="c-contrato"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      const validHoras = data.map(r => r["Horas"]).filter(v => v !== null && v !== undefined && !isNaN(v));
      const horasProm = validHoras.length ? (validHoras.reduce((a,b)=>a+b,0)/validHoras.length).toFixed(1) : '—';
      set('tr-horas', horasProm);

      const validYears = data.map(r => r["Años"]).filter(v => v !== null && v !== undefined && v !== '.' && v !== 98 && !isNaN(v));
      const anosProm = validYears.length ? (validYears.reduce((a,b)=>a+b,0)/validYears.length).toFixed(1) : '—';
      set('tr-anos', anosProm);

      // Gráfico circular: Actividad principal
      const actFm = freq(data, "Actividad", ['']);
      const actK = Object.keys(actFm).sort();
      mkChart('c-actividad', 'doughnut', actK, [{data: actK.map(k=>actFm[k]), backgroundColor: CC, borderWidth: 0}], {legend: true});

      // Gráfico barras: Participación
      const partFm = freq(data, "Participacion", ['']);
      const partK = Object.keys(partFm).sort();
      mkChart('c-participacion', 'bar', partK, [{label: 'Personas', data: partK.map(k=>partFm[k]), backgroundColor: CC, borderRadius: 5, borderWidth: 0}]);

      // Gráfico barras: Condiciones laborales TR1 (15 variables)
      const condLabs = ['Satisfacción','Útil','Felicidad','Estrés','Salario','Ánimo','Valoración','Pertenencia','Confianza','Jefe','Inclusivo','Flexibilidad','Motivado','Logro','Aprendizaje'];
      const condKeys = ['Satisfaccion','Util','Felicidad','Estres','Salario','Animo','Valoracion','Pertenencia','Confianza','Jefe','Inclusivo','Flexibilidad','Motivado','Logro','Aprendizaje'];
      const condVals = condKeys.map(key => {
        const vals = data.map(r => r[key]).filter(v => v !== 98 && v !== '.' && v !== null && v !== undefined && !isNaN(v)).map(Number);
        return vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : 0;
      });
      mkChart('c-condiciones', 'bar', condLabs, [{label: 'Promedio (0-10)', data: condVals, backgroundColor: '#6366f1', borderRadius: 5, borderWidth: 0}]);

      // Gráfico barras: TR2 frecuencia de "Sí"
      const tr2Si = data.filter(r => r["SalarioMasBajo"] === "Sí").length;
      const loteriaSi = data.filter(r => r["Loteria"] === "Sí").length;
      const aseguradoSi = data.filter(r => r["TrabajoAsegurado"] === "Sí").length;
      const conformidadSi = data.filter(r => r["ConformidadContrato"] === "Sí").length;
      mkChart('c-tr2', 'bar',
        ['¿Salario más bajo?','¿Lotería seguir?','¿Trabajo asegurado 6m?','¿Conformidad contrato?'],
        [{label: 'Respuestas "Sí"', data: [tr2Si, loteriaSi, aseguradoSi, conformidadSi], backgroundColor: ['#10b981','#6366f1','#f59e0b','#ef4444'], borderRadius: 5, borderWidth: 0}]);

      // Gráfico barras: Acceso seguridad social
      const segFm = freq(data, "SeguridadSocial", []);
      const segK = Object.keys(segFm).sort();
      mkChart('c-seguridad', 'bar', segK, [{label: 'Personas', data: segK.map(k=>segFm[k]), backgroundColor: CC, borderRadius: 5, borderWidth: 0}]);

      // Gráfico barras: Tipo contrato
      const conFm = freq(data, "TipoContrato", ['NA']);
      const conK = Object.keys(conFm).sort();
      mkChart('c-contrato', 'bar', conK, [{label: 'Personas', data: conK.map(k=>conFm[k]), backgroundColor: CC, borderRadius: 5, borderWidth: 0}]);
    }
  }

  registerSection(new TrabajoSection());
})();
