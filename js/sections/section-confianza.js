(function () {
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, pct, freq, mkChart, CC } = Dashboard;

  class ConfianzaSection extends BaseSection {
    constructor() {
      super('confianza', 'Relaciones y Confianza');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        { "Codigo": "E-0001", "Confianza promedio en la mayoría de gente": 7, "Confianza promedio en la gente que conoce personalmente": 7, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 2, "Discriminación en la ciudad": 10 },
        { "Codigo": "E-0002", "Confianza promedio en la mayoría de gente": 7, "Confianza promedio en la gente que conoce personalmente": 6, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 6, "Discriminación en la ciudad": 10 },
        { "Codigo": "E-0003", "Confianza promedio en la mayoría de gente": 5, "Confianza promedio en la gente que conoce personalmente": 5, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 2, "Discriminación en la ciudad": 1 },
        { "Codigo": "E-0004", "Confianza promedio en la mayoría de gente": 0, "Confianza promedio en la gente que conoce personalmente": 0, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 0, "Discriminación en la ciudad": 0 },
        { "Codigo": "E-0005", "Confianza promedio en la mayoría de gente": 0, "Confianza promedio en la gente que conoce personalmente": 8, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "Sí", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "No", "Amigos en promedio": 10, "Discriminación en la ciudad": 6 },
        { "Codigo": "E-0006", "Confianza promedio en la mayoría de gente": 6, "Confianza promedio en la gente que conoce personalmente": 5, "Percepción confianza en la gente que lo rodea": "Mayormente confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "Sí", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "No", "Amigos en promedio": 10, "Discriminación en la ciudad": 5 },
        { "Codigo": "E-0007", "Confianza promedio en la mayoría de gente": 0, "Confianza promedio en la gente que conoce personalmente": 5, "Percepción confianza en la gente que lo rodea": "Mayormente desconfiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 7, "Discriminación en la ciudad": 8 },
        { "Codigo": "E-0008", "Confianza promedio en la mayoría de gente": 0, "Confianza promedio en la gente que conoce personalmente": 5, "Percepción confianza en la gente que lo rodea": "Algo desconfiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 0, "Discriminación en la ciudad": 5 },
        { "Codigo": "E-0009", "Confianza promedio en la mayoría de gente": 0, "Confianza promedio en la gente que conoce personalmente": 4, "Percepción confianza en la gente que lo rodea": "Algo desconfiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 0, "Discriminación en la ciudad": 0 },
        { "Codigo": "E-0010", "Confianza promedio en la mayoría de gente": 7, "Confianza promedio en la gente que conoce personalmente": 9, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "No", "Amigos en promedio": 0, "Discriminación en la ciudad": 6 },
        { "Codigo": "E-0011", "Confianza promedio en la mayoría de gente": 6, "Confianza promedio en la gente que conoce personalmente": 9, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 2, "Discriminación en la ciudad": 8 },
        { "Codigo": "E-0012", "Confianza promedio en la mayoría de gente": 8, "Confianza promedio en la gente que conoce personalmente": 9, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 8, "Discriminación en la ciudad": 8 },
        { "Codigo": "E-0013", "Confianza promedio en la mayoría de gente": 7, "Confianza promedio en la gente que conoce personalmente": 7, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "Sí", "NINGUNA CONF1": "No", "Amigos en promedio": 3, "Discriminación en la ciudad": 7 },
        { "Codigo": "E-0014", "Confianza promedio en la mayoría de gente": 5, "Confianza promedio en la gente que conoce personalmente": 7, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "Sí", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "No", "Amigos en promedio": 3, "Discriminación en la ciudad": "NA" },
        { "Codigo": "E-0015", "Confianza promedio en la mayoría de gente": 7, "Confianza promedio en la gente que conoce personalmente": 9, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 3, "Discriminación en la ciudad": 7 },
        { "Codigo": "E-0016", "Confianza promedio en la mayoría de gente": 3, "Confianza promedio en la gente que conoce personalmente": 7, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 1, "Discriminación en la ciudad": 5 },
        { "Codigo": "E-0017", "Confianza promedio en la mayoría de gente": 7, "Confianza promedio en la gente que conoce personalmente": 9, "Percepción confianza en la gente que lo rodea": "Mayormente confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 5, "Discriminación en la ciudad": 7 },
        { "Codigo": "E-0018", "Confianza promedio en la mayoría de gente": 0, "Confianza promedio en la gente que conoce personalmente": 3, "Percepción confianza en la gente que lo rodea": "Algo confiable", "ONG/FUNDACIÓN CONF1": "No", "IGLESIA CONF1": "No", "BARRIO/COMUNA CONF1": "No", "NINGUNA CONF1": "Sí", "Amigos en promedio": 4, "Discriminación en la ciudad": 8 }
      ];
    }

    getHtml(isActive) {
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-confianza">
  <div class="sech"><h2>🤝 Relaciones y Confianza</h2><p>Confianza interpersonal, participación y percepción de discriminación</p></div>
<div class="g2">
    <div class="kpi"><div class="v" id="co-total">18</div><div class="l">Total encuestados</div></div>
    <div class="kpi"><div class="v" id="co-conf-mayoria">—</div><div class="l">Confianza promedio en la mayoría de gente</div></div>
    <div class="kpi"><div class="v" id="co-conf-conocidos">—</div><div class="l">Confianza promedio en la gente que conoce personalmente</div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct">En términos generales, usted diría que la gente que lo rodea como conocidos o vecinos, etc, es:</div><div class="cw"><canvas id="c-confianza-percepcion"></canvas></div></div>
    <div class="card"><div class="ct">Ha participado como voluntariado en las siguientes causas:</div><div class="cw"><canvas id="c-voluntariado"></canvas></div></div>
  </div>
  <div class="card"><div class="ct">En su ciudad, ¿Qué tanto considera que las personas son discriminadas por su origen, género, edad, discapacidad o condición socioeconómica?</div><div class="cw"><canvas id="c-discriminacion"></canvas></div></div>
</div>`;
    }

    render(data, n) {
      set('co-total', n);

      // Función auxiliar para promedios
      const num = v => (v === null || v === undefined || v === 'NA' || v === 98 || v === 99) ? null : +v;
      const avgArr = arr => { const valid = arr.filter(x => x !== null && !isNaN(x)); return valid.length ? (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(1) : '—'; };

      const promMayoria = avgArr(data.map(r => num(r["Confianza promedio en la mayoría de gente"])));
      set('co-conf-mayoria', promMayoria);
      const promConocidos = avgArr(data.map(r => num(r["Confianza promedio en la gente que conoce personalmente"])));
      set('co-conf-conocidos', promConocidos);

      // Gráfico de percepción de confianza en la gente que lo rodea
      const percepcionFreq = freq(data, "Percepción confianza en la gente que lo rodea");
      const ordenCateg = ['Algo confiable', 'Mayormente confiable', 'Algo desconfiable', 'Mayormente desconfiable'];
      const categorias = ordenCateg.filter(c => percepcionFreq[c]);
      const valores = categorias.map(c => percepcionFreq[c]);
      mkChart('c-confianza-percepcion', 'bar', categorias, [{
        label: 'Personas',
        data: valores,
        backgroundColor: '#3b82f6',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Gráfico de voluntariado (4 causas: ONG, Iglesia, Barrio/Comuna, Ninguna) + Amigos en promedio
      const causas = ['ONG/FUNDACIÓN CONF1', 'IGLESIA CONF1', 'BARRIO/COMUNA CONF1', 'NINGUNA CONF1'];
      const causasLabels = ['ONG / Fundación', 'Iglesia', 'Barrio / Comuna', 'Ninguna', 'Amigos en promedio'];
      const voluntariadoData = [
        ...causas.map(col => data.filter(r => r[col] === 'Sí').length),
        Math.round(+avgArr(data.map(r => num(r["Amigos en promedio"]))) || 0)
      ];
      mkChart('c-voluntariado', 'bar', causasLabels, [{
        label: 'Personas / Promedio',
        data: voluntariadoData,
        backgroundColor: ['#8b5cf6', '#8b5cf6', '#8b5cf6', '#8b5cf6', '#8b5cf6'],
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' }, indexAxis: 'y' });

      // Gráfico de discriminación (escala numérica, supongo 0-10)
      const discriminacionValores = data.map(r => num(r["Discriminación en la ciudad"])).filter(v => v !== null);
      const freqDisc = {};
      discriminacionValores.forEach(v => { freqDisc[v] = (freqDisc[v] || 0) + 1; });
      const puntos = Array.from({ length: 11 }, (_, i) => i);
      const frecuencias = puntos.map(p => freqDisc[p] || 0);
      mkChart('c-discriminacion', 'bar', puntos.map(p => p.toString()), [{
        label: 'Personas',
        data: frecuencias,
        backgroundColor: '#ef4444',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });
    }
  }

  registerSection(new ConfianzaSection());
})();