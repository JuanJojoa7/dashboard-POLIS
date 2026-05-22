(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, freq, mkChart, CC } = Dashboard;

  class CiudadSection extends BaseSection {
    constructor(){
      super('ciudad', 'Ciudad');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","Seguridad CIUD1":5,"Servicios de salud CIUD1":7,"Transporte público CIUD1":3,"Generación de empleo CIUD1":2,"Parques y espacios públicos CIUD1":5,"Educación CIUD1":8,"Servicios públicos CIUD1":9,"Tráfico CIUD1":8,"Gestión en su barrio CIUD1":5,"Promoción del cuidado de la salud física y mental CIUD1":3,"Oferta cultural, de ocio y deporte CIUD1":6,"Información turística CIUD1":6,"Wi-Fi público gratuito CIUD1":99,"Servicios en línea para iniciar un nuevo negocio CIUD1":99,"Servicios en línea para encontrar empleo CIUD1":8,"Empleo CIUD2":"No","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":99,"Tecnologías urbanas":7,"Canales digitales y emergencias":"Sí"},
        {"Codigo":"E-0002","Seguridad CIUD1":2,"Servicios de salud CIUD1":3,"Transporte público CIUD1":2,"Generación de empleo CIUD1":2,"Parques y espacios públicos CIUD1":2,"Educación CIUD1":4,"Servicios públicos CIUD1":2,"Tráfico CIUD1":1,"Gestión en su barrio CIUD1":0,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":6,"Información turística CIUD1":5,"Wi-Fi público gratuito CIUD1":1,"Servicios en línea para iniciar un nuevo negocio CIUD1":1,"Servicios en línea para encontrar empleo CIUD1":2,"Empleo CIUD2":"Sí","Transporte CIUD2":"Sí","Vivienda CIUD2":"Sí","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"Sí","Alfabetización digital":99,"Tecnologías urbanas":99,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0003","Seguridad CIUD1":2,"Servicios de salud CIUD1":2,"Transporte público CIUD1":5,"Generación de empleo CIUD1":1,"Parques y espacios públicos CIUD1":3,"Educación CIUD1":1,"Servicios públicos CIUD1":8,"Tráfico CIUD1":8,"Gestión en su barrio CIUD1":1,"Promoción del cuidado de la salud física y mental CIUD1":1,"Oferta cultural, de ocio y deporte CIUD1":2,"Información turística CIUD1":2,"Wi-Fi público gratuito CIUD1":2,"Servicios en línea para iniciar un nuevo negocio CIUD1":3,"Servicios en línea para encontrar empleo CIUD1":3,"Empleo CIUD2":"Sí","Transporte CIUD2":"Sí","Vivienda CIUD2":"Sí","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"Sí","Educación CIUD2":"Sí","Alfabetización digital":2,"Tecnologías urbanas":2,"Canales digitales y emergencias":"Sí"},
        {"Codigo":"E-0004","Seguridad CIUD1":8,"Servicios de salud CIUD1":0,"Transporte público CIUD1":0,"Generación de empleo CIUD1":0,"Parques y espacios públicos CIUD1":5,"Educación CIUD1":0,"Servicios públicos CIUD1":9,"Tráfico CIUD1":5,"Gestión en su barrio CIUD1":10,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":1,"Información turística CIUD1":5,"Wi-Fi público gratuito CIUD1":5,"Servicios en línea para iniciar un nuevo negocio CIUD1":5,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"No","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"Sí","Alfabetización digital":5,"Tecnologías urbanas":1,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0005","Seguridad CIUD1":0,"Servicios de salud CIUD1":5,"Transporte público CIUD1":2,"Generación de empleo CIUD1":2,"Parques y espacios públicos CIUD1":0,"Educación CIUD1":2,"Servicios públicos CIUD1":3,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":0,"Promoción del cuidado de la salud física y mental CIUD1":1,"Oferta cultural, de ocio y deporte CIUD1":1,"Información turística CIUD1":1,"Wi-Fi público gratuito CIUD1":1,"Servicios en línea para iniciar un nuevo negocio CIUD1":1,"Servicios en línea para encontrar empleo CIUD1":1,"Empleo CIUD2":"Sí","Transporte CIUD2":"Sí","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":0,"Tecnologías urbanas":2,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0006","Seguridad CIUD1":4,"Servicios de salud CIUD1":7,"Transporte público CIUD1":8,"Generación de empleo CIUD1":5,"Parques y espacios públicos CIUD1":9,"Educación CIUD1":7,"Servicios públicos CIUD1":7,"Tráfico CIUD1":6,"Gestión en su barrio CIUD1":5,"Promoción del cuidado de la salud física y mental CIUD1":8,"Oferta cultural, de ocio y deporte CIUD1":9,"Información turística CIUD1":8,"Wi-Fi público gratuito CIUD1":6,"Servicios en línea para iniciar un nuevo negocio CIUD1":5,"Servicios en línea para encontrar empleo CIUD1":5,"Empleo CIUD2":"Sí","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"No","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":6,"Tecnologías urbanas":5,"Canales digitales y emergencias":"NS/NR"},
        {"Codigo":"E-0007","Seguridad CIUD1":0,"Servicios de salud CIUD1":0,"Transporte público CIUD1":0,"Generación de empleo CIUD1":0,"Parques y espacios públicos CIUD1":1,"Educación CIUD1":0,"Servicios públicos CIUD1":2,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":2,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":0,"Información turística CIUD1":0,"Wi-Fi público gratuito CIUD1":0,"Servicios en línea para iniciar un nuevo negocio CIUD1":0,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"Sí","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":0,"Tecnologías urbanas":0,"Canales digitales y emergencias":"NS/NR"},
        {"Codigo":"E-0008","Seguridad CIUD1":8,"Servicios de salud CIUD1":8,"Transporte público CIUD1":8,"Generación de empleo CIUD1":8,"Parques y espacios públicos CIUD1":8,"Educación CIUD1":10,"Servicios públicos CIUD1":5,"Tráfico CIUD1":5,"Gestión en su barrio CIUD1":0,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":0,"Información turística CIUD1":0,"Wi-Fi público gratuito CIUD1":0,"Servicios en línea para iniciar un nuevo negocio CIUD1":0,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"Sí","Transporte CIUD2":"No","Vivienda CIUD2":"Sí","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"Sí","Alfabetización digital":0,"Tecnologías urbanas":2,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0009","Seguridad CIUD1":5,"Servicios de salud CIUD1":5,"Transporte público CIUD1":5,"Generación de empleo CIUD1":5,"Parques y espacios públicos CIUD1":5,"Educación CIUD1":5,"Servicios públicos CIUD1":5,"Tráfico CIUD1":5,"Gestión en su barrio CIUD1":0,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":0,"Información turística CIUD1":0,"Wi-Fi público gratuito CIUD1":0,"Servicios en línea para iniciar un nuevo negocio CIUD1":0,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"Sí","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"Sí","Alfabetización digital":0,"Tecnologías urbanas":5,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0010","Seguridad CIUD1":3,"Servicios de salud CIUD1":5,"Transporte público CIUD1":7,"Generación de empleo CIUD1":5,"Parques y espacios públicos CIUD1":5,"Educación CIUD1":5,"Servicios públicos CIUD1":8,"Tráfico CIUD1":3,"Gestión en su barrio CIUD1":8,"Promoción del cuidado de la salud física y mental CIUD1":5,"Oferta cultural, de ocio y deporte CIUD1":4,"Información turística CIUD1":4,"Wi-Fi público gratuito CIUD1":0,"Servicios en línea para iniciar un nuevo negocio CIUD1":0,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"No","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":0,"Tecnologías urbanas":5,"Canales digitales y emergencias":"Sí"},
        {"Codigo":"E-0011","Seguridad CIUD1":4,"Servicios de salud CIUD1":2,"Transporte público CIUD1":"NA","Generación de empleo CIUD1":5,"Parques y espacios públicos CIUD1":9,"Educación CIUD1":4,"Servicios públicos CIUD1":4,"Tráfico CIUD1":3,"Gestión en su barrio CIUD1":6,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":2,"Información turística CIUD1":0,"Wi-Fi público gratuito CIUD1":2,"Servicios en línea para iniciar un nuevo negocio CIUD1":2,"Servicios en línea para encontrar empleo CIUD1":2,"Empleo CIUD2":"No","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":0,"Tecnologías urbanas":0,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0012","Seguridad CIUD1":1,"Servicios de salud CIUD1":2,"Transporte público CIUD1":2,"Generación de empleo CIUD1":1,"Parques y espacios públicos CIUD1":2,"Educación CIUD1":2,"Servicios públicos CIUD1":1,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":3,"Promoción del cuidado de la salud física y mental CIUD1":3,"Oferta cultural, de ocio y deporte CIUD1":2,"Información turística CIUD1":0,"Wi-Fi público gratuito CIUD1":0,"Servicios en línea para iniciar un nuevo negocio CIUD1":0,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"Sí","Transporte CIUD2":"No","Vivienda CIUD2":"Sí","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"Sí","Educación CIUD2":"Sí","Alfabetización digital":2,"Tecnologías urbanas":2,"Canales digitales y emergencias":"No"},
        {"Codigo":"E-0013","Seguridad CIUD1":6,"Servicios de salud CIUD1":6,"Transporte público CIUD1":4,"Generación de empleo CIUD1":6,"Parques y espacios públicos CIUD1":5,"Educación CIUD1":6,"Servicios públicos CIUD1":6,"Tráfico CIUD1":3,"Gestión en su barrio CIUD1":5,"Promoción del cuidado de la salud física y mental CIUD1":6,"Oferta cultural, de ocio y deporte CIUD1":6,"Información turística CIUD1":6,"Wi-Fi público gratuito CIUD1":3,"Servicios en línea para iniciar un nuevo negocio CIUD1":3,"Servicios en línea para encontrar empleo CIUD1":2,"Empleo CIUD2":"Sí","Transporte CIUD2":"Sí","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"NA","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"Sí","Educación CIUD2":"Sí","Alfabetización digital":3,"Tecnologías urbanas":5,"Canales digitales y emergencias":"Sí"},
        {"Codigo":"E-0014","Seguridad CIUD1":5,"Servicios de salud CIUD1":5,"Transporte público CIUD1":0,"Generación de empleo CIUD1":7,"Parques y espacios públicos CIUD1":2,"Educación CIUD1":7,"Servicios públicos CIUD1":8,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":2,"Promoción del cuidado de la salud física y mental CIUD1":6,"Oferta cultural, de ocio y deporte CIUD1":8,"Información turística CIUD1":4,"Wi-Fi público gratuito CIUD1":3,"Servicios en línea para iniciar un nuevo negocio CIUD1":3,"Servicios en línea para encontrar empleo CIUD1":7,"Empleo CIUD2":"Sí","Transporte CIUD2":"Sí","Vivienda CIUD2":"Sí","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":5,"Tecnologías urbanas":5,"Canales digitales y emergencias":"NS/NR"},
        {"Codigo":"E-0015","Seguridad CIUD1":6,"Servicios de salud CIUD1":6,"Transporte público CIUD1":6,"Generación de empleo CIUD1":6,"Parques y espacios públicos CIUD1":6,"Educación CIUD1":6,"Servicios públicos CIUD1":6,"Tráfico CIUD1":6,"Gestión en su barrio CIUD1":1,"Promoción del cuidado de la salud física y mental CIUD1":1,"Oferta cultural, de ocio y deporte CIUD1":1,"Información turística CIUD1":1,"Wi-Fi público gratuito CIUD1":1,"Servicios en línea para iniciar un nuevo negocio CIUD1":1,"Servicios en línea para encontrar empleo CIUD1":1,"Empleo CIUD2":"No","Transporte CIUD2":"No","Vivienda CIUD2":"Sí","Seguridad CIUD2":"No","Trafico Vehícular CIUD2":"No","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":0,"Tecnologías urbanas":2,"Canales digitales y emergencias":"NS/NR"},
        {"Codigo":"E-0016","Seguridad CIUD1":0,"Servicios de salud CIUD1":5,"Transporte público CIUD1":0,"Generación de empleo CIUD1":5,"Parques y espacios públicos CIUD1":6,"Educación CIUD1":5,"Servicios públicos CIUD1":0,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":0,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":7,"Información turística CIUD1":7,"Wi-Fi público gratuito CIUD1":3,"Servicios en línea para iniciar un nuevo negocio CIUD1":0,"Servicios en línea para encontrar empleo CIUD1":0,"Empleo CIUD2":"No","Transporte CIUD2":"Sí","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"No","Educación CIUD2":"No","Alfabetización digital":4,"Tecnologías urbanas":5,"Canales digitales y emergencias":"Sí"},
        {"Codigo":"E-0017","Seguridad CIUD1":3,"Servicios de salud CIUD1":5,"Transporte público CIUD1":4,"Generación de empleo CIUD1":6,"Parques y espacios públicos CIUD1":7,"Educación CIUD1":4,"Servicios públicos CIUD1":5,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":7,"Promoción del cuidado de la salud física y mental CIUD1":7,"Oferta cultural, de ocio y deporte CIUD1":5,"Información turística CIUD1":5,"Wi-Fi público gratuito CIUD1":2,"Servicios en línea para iniciar un nuevo negocio CIUD1":5,"Servicios en línea para encontrar empleo CIUD1":2,"Empleo CIUD2":"No","Transporte CIUD2":"No","Vivienda CIUD2":"No","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"No","Subsidios CIUD2":"No","Educación CIUD2":"Sí","Alfabetización digital":5,"Tecnologías urbanas":3,"Canales digitales y emergencias":"Sí"},
        {"Codigo":"E-0018","Seguridad CIUD1":0,"Servicios de salud CIUD1":0,"Transporte público CIUD1":0,"Generación de empleo CIUD1":0,"Parques y espacios públicos CIUD1":0,"Educación CIUD1":0,"Servicios públicos CIUD1":0,"Tráfico CIUD1":0,"Gestión en su barrio CIUD1":0,"Promoción del cuidado de la salud física y mental CIUD1":0,"Oferta cultural, de ocio y deporte CIUD1":6,"Información turística CIUD1":5,"Wi-Fi público gratuito CIUD1":3,"Servicios en línea para iniciar un nuevo negocio CIUD1":4,"Servicios en línea para encontrar empleo CIUD1":5,"Empleo CIUD2":"Sí","Transporte CIUD2":"Sí","Vivienda CIUD2":"Sí","Seguridad CIUD2":"Sí","Trafico Vehícular CIUD2":"Sí","Mejora Espacios Públicos CIUD2":"Sí","Subsidios CIUD2":"Sí","Educación CIUD2":"Sí","Alfabetización digital":0,"Tecnologías urbanas":2,"Canales digitales y emergencias":"Sí"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-ciudad">
  <div class="sech"><h2>🏙️ Ciudad y Gestión Urbana</h2><p>Satisfacción con servicios, prioridades de inversión y percepción tecnológica</p></div>
  <div class="card"><div class="ct">Satisfacción promedio con la gestión de la alcaldía (escala 0-10)</div><div class="cw t"><canvas id="c-satisfaccion"></canvas></div></div>
  <div class="card"><div class="ct">Áreas en que debe intervenir el gobierno para aumentar la calidad de vida</div><div class="cw t"><canvas id="c-intervencion"></canvas></div></div>
  <div class="g2">
    <div class="card"><div class="ct">¿En qué medida considera que la ciudad promueve la alfabetización digital?</div><div class="cw"><canvas id="c-alfabetizacion"></canvas></div></div>
    <div class="card"><div class="ct">¿En qué medida percibe el uso de tecnologías para mejorar la gestión urbana?</div><div class="cw"><canvas id="c-tecnologias"></canvas></div></div>
  </div>
  <div class="card"><div class="ct">¿Existen y conoce canales digitales y líneas de emergencia para reportar situaciones de convivencia?</div><div class="cw"><canvas id="c-canales"></canvas></div></div>
</div>`;
    }

    render(data, n){
      // Función auxiliar para limpiar números (99, NA, null, undefined)
      const num = v => {
        if (v === null || v === undefined || v === 'NA' || v === 'NaN' || v === 99 || v === '') return null;
        const parsed = +v;
        return isNaN(parsed) ? null : parsed;
      };
      const avgArr = arr => { const valid = arr.filter(x => x !== null && !isNaN(x)); return valid.length ? (valid.reduce((a,b) => a+b, 0) / valid.length).toFixed(1) : '—'; };

      // CIUD1: promedios para 15 temas
      const temas = [
        "Seguridad CIUD1", "Servicios de salud CIUD1", "Transporte público CIUD1", "Generación de empleo CIUD1",
        "Parques y espacios públicos CIUD1", "Educación CIUD1", "Servicios públicos CIUD1", "Tráfico CIUD1",
        "Gestión en su barrio CIUD1", "Promoción del cuidado de la salud física y mental CIUD1",
        "Oferta cultural, de ocio y deporte CIUD1", "Información turística CIUD1", "Wi-Fi público gratuito CIUD1",
        "Servicios en línea para iniciar un nuevo negocio CIUD1", "Servicios en línea para encontrar empleo CIUD1"
      ];
      const etiquetas = [
        "Seguridad", "Salud", "Transporte", "Empleo", "Parques", "Educación", "Serv. públicos", "Tráfico",
        "Gestión barrio", "Promoción salud", "Oferta cultural", "Info turística", "Wi-Fi público",
        "Serv. negocio online", "Serv. empleo online"
      ];
      const promedios = temas.map(t => avgArr(data.map(r => num(r[t]))));
      mkChart('c-satisfaccion', 'bar', etiquetas, [{
        label: 'Promedio (0-10)',
        data: promedios,
        backgroundColor: '#0ea5e9',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y', legend: { display: true, position: 'top' } });

      // CIUD2: frecuencia de "Sí" para 8 áreas de intervención
      const areas = [
        "Empleo CIUD2", "Transporte CIUD2", "Vivienda CIUD2", "Seguridad CIUD2",
        "Trafico Vehícular CIUD2", "Mejora Espacios Públicos CIUD2", "Subsidios CIUD2", "Educación CIUD2"
      ];
      const areasLabels = ["Empleo", "Transporte", "Vivienda", "Seguridad", "Tráfico vehicular", "Mejora espacios públicos", "Subsidios", "Educación"];
      const conteos = areas.map(a => data.filter(r => r[a] === 'Sí').length);
      mkChart('c-intervencion', 'bar', areasLabels, [{
        label: 'Personas que lo señalan como prioritario',
        data: conteos,
        backgroundColor: '#f97316',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y', legend: { display: true, position: 'top' } });

      // Alfabetización digital (escala 0-10)
      const alfVal = data.map(r => num(r["Alfabetización digital"])).filter(v => v !== null);
      const alfFreq = {};
      alfVal.forEach(v => { alfFreq[v] = (alfFreq[v] || 0) + 1; });
      const alfPuntos = Array.from({length: 11}, (_, i) => i);
      const alfFrecuencias = alfPuntos.map(p => alfFreq[p] || 0);
      mkChart('c-alfabetizacion', 'bar', alfPuntos.map(p => p.toString()), [{
        label: 'Personas',
        data: alfFrecuencias,
        backgroundColor: '#10b981',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Tecnologías urbanas (escala 0-10)
      const tecVal = data.map(r => num(r["Tecnologías urbanas"])).filter(v => v !== null);
      const tecFreq = {};
      tecVal.forEach(v => { tecFreq[v] = (tecFreq[v] || 0) + 1; });
      const tecPuntos = Array.from({length: 11}, (_, i) => i);
      const tecFrecuencias = tecPuntos.map(p => tecFreq[p] || 0);
      mkChart('c-tecnologias', 'bar', tecPuntos.map(p => p.toString()), [{
        label: 'Personas',
        data: tecFrecuencias,
        backgroundColor: '#8b5cf6',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Canales digitales y emergencias (categorías Sí, No, NS/NR)
      const canalesFreq = freq(data, "Canales digitales y emergencias");
      const canalesKeys = Object.keys(canalesFreq);
      mkChart('c-canales', 'doughnut', canalesKeys, [{
        data: canalesKeys.map(k => canalesFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });
    }
  }

  registerSection(new CiudadSection());
})();