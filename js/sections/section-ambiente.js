(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, freq, mkChart, CC } = Dashboard;

  class AmbienteSection extends BaseSection {
    constructor(){
      super('ambiente', 'Ambiente');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"Sí","Preparación emergencias climáticas":5,"Nota aumento eventos climáticos":"No"},
        {"Codigo":"E-0002","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"Sí","Conoce información calidad del aire":"No","Preparación emergencias climáticas":2,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0003","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":1,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0004","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":0,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0005","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"Sí","Conoce información calidad del aire":"Sí","Preparación emergencias climáticas":0,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0006","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":3,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0007","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":0,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0008","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":4,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0009","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":3,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0010","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"Sí","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":2,"Nota aumento eventos climáticos":"No"},
        {"Codigo":"E-0011","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":0,"Nota aumento eventos climáticos":"No"},
        {"Codigo":"E-0012","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":2,"Nota aumento eventos climáticos":"No"},
        {"Codigo":"E-0013","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"Sí","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"Sí","Preparación emergencias climáticas":6,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0014","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":null,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0015","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"No","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":5,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0016","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"No","Preparación emergencias climáticas":0,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0017","APPS AMB1":"No","SMS/WHATSAPP AMB1":"No","PORTALES/SITIOSWEB AMB1":"No","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"Sí","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"Sí","Preparación emergencias climáticas":0,"Nota aumento eventos climáticos":"Sí"},
        {"Codigo":"E-0018","APPS AMB1":"No","SMS/WHATSAPP AMB1":"Sí","PORTALES/SITIOSWEB AMB1":"Sí","REDES SOCIALES AMB1":"Sí","NOTICIAS AMB1":"No","INFORMACIÓN IMPRESA AMB1":"No","Conoce información calidad del aire":"Sí","Preparación emergencias climáticas":4,"Nota aumento eventos climáticos":"Sí"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-ambiente">
  <div class="sech"><h2>🌳 Ambiente y Servicios Públicos</h2><p>Canales de información, preparación ante emergencias y percepción de cambios climáticos</p></div>
  <div class="card"><div class="ct">A través de qué canales se informa sobre cortes, mantenimientos y calidad de servicios públicos</div><div class="cw t"><canvas id="c-canales-amb"></canvas></div></div>
  <div class="g2">
    <div class="card"><div class="ct">¿Usted sabe que existe información pública sobre el monitoreo de la calidad del aire y alertas de riesgos climáticos?</div><div class="cw"><canvas id="c-conoce-aire"></canvas></div></div>
    <div class="card"><div class="ct">¿Ha notado aumento de calor extremo, contaminación u otros eventos climáticos que afecten su vida diaria?</div><div class="cw"><canvas id="c-nota-cambio"></canvas></div></div>
  </div>
  <div class="card"><div class="ct">¿Qué tan preparada considera que está la ciudad para responder a emergencias climáticas? (escala 0-10)</div><div class="cw"><canvas id="c-preparacion"></canvas></div></div>
</div>`;
    }

    render(data, n){
      // Preparar datos del gráfico de canales
      const canales = [
        "APPS AMB1", "SMS/WHATSAPP AMB1", "PORTALES/SITIOSWEB AMB1",
        "REDES SOCIALES AMB1", "NOTICIAS AMB1", "INFORMACIÓN IMPRESA AMB1"
      ];
      const canalesLabels = [
        "Apps", "SMS/WhatsApp", "Portales/Sitios web",
        "Redes sociales", "Noticias", "Información impresa"
      ];
      const canalesData = canales.map(c => data.filter(r => r[c] === 'Sí').length);

      mkChart('c-canales-amb', 'bar', canalesLabels, [{
        label: 'Personas que usan ese canal',
        data: canalesData,
        backgroundColor: '#0ea5e9',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y', legend: { display: true, position: 'top' } });

      const conoceFreq = freq(data, "Conoce información calidad del aire");
      const conoceKeys = Object.keys(conoceFreq);
      mkChart('c-conoce-aire', 'doughnut', conoceKeys, [{
        data: conoceKeys.map(k => conoceFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      const notaFreq = freq(data, "Nota aumento eventos climáticos");
      const notaKeys = Object.keys(notaFreq);
      mkChart('c-nota-cambio', 'doughnut', notaKeys, [{
        data: notaKeys.map(k => notaFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      const num = v => (v === null || v === undefined || v === 'NA' || v === '') ? null : +v;
      const prepVal = data.map(r => num(r["Preparación emergencias climáticas"])).filter(v => v !== null);
      const prepFreq = {};
      prepVal.forEach(v => { prepFreq[v] = (prepFreq[v] || 0) + 1; });
      const puntos = Array.from({length: 11}, (_, i) => i);
      const frecuencias = puntos.map(p => prepFreq[p] || 0);
      mkChart('c-preparacion', 'bar', puntos.map(p => p.toString()), [{
        label: 'Personas',
        data: frecuencias,
        backgroundColor: '#10b981',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });
    }
  }

  registerSection(new AmbienteSection());
})();