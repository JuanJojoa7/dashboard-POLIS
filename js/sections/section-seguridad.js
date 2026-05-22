(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, freq, mkChart, CC } = Dashboard;

  class SeguridadSection extends BaseSection {
    constructor(){
      super('seguridad','Seguridad');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","Ciudad SEG1":"No","Barrio SEG1":"No","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"Sí","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":10},
        {"Codigo":"E-0002","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":10},
        {"Codigo":"E-0003","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"Sí","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"Sí","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"No","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":7},
        {"Codigo":"E-0004","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"NA","Espacio público SEG1":"Sí","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":10},
        {"Codigo":"E-0005","Ciudad SEG1":"Sí","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":0},
        {"Codigo":"E-0006","Ciudad SEG1":"No","Barrio SEG1":"No","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"No","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":7},
        {"Codigo":"E-0007","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"Sí","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"Sí","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":6},
        {"Codigo":"E-0008","Ciudad SEG1":"No","Barrio SEG1":"No","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"Sí","Hurto a personas SEG2":"Sí","Agresión Física o peleas SEG2":"Sí","Extorsión SEG2":"No","Fraude bancario SEG2":"Sí","Amenazas SEG2":"No","Agresión sexual SEG2":"Sí","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"No","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":"NA"},
        {"Codigo":"E-0009","Ciudad SEG1":"No","Barrio SEG1":"No","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"Sí","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"Sí","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":0},
        {"Codigo":"E-0010","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":10},
        {"Codigo":"E-0011","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"Sí","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":"NA"},
        {"Codigo":"E-0012","Ciudad SEG1":"Sí","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"Sí","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":6},
        {"Codigo":"E-0013","Ciudad SEG1":"NA","Barrio SEG1":"NA","Transporte público SEG1":"NA","Espacio público SEG1":"NA","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"Sí","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":5},
        {"Codigo":"E-0014","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"Sí","Espacio público SEG1":"No","Hurto a residencia SEG2":"Sí","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Sí","REDES SOCIALES SEG3":"Sí","APPS DE MENSAJERÍA SEG3":"Sí","PLATAFORMAS DE TRANSPORTE SEG3":"No","PLATAFORMAS DE COMERCIO SEG3":"No","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"No","OTROS CANALES DIGITALES SEG3":"No","PREFIERE NO RESPONDER SEG3":"No","Acuerdo camaras seguridad":7},
        {"Codigo":"E-0015","Ciudad SEG1":"Sí","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":5},
        {"Codigo":"E-0016","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"No","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"No","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":2},
        {"Codigo":"E-0017","Ciudad SEG1":"No","Barrio SEG1":"Sí","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"Sí","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"No","Fraude bancario SEG2":"Sí","Amenazas SEG2":"No","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"Sí","Violencia intrafamiliar SEG2":"No","Violencia económica SEG2":"No","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Prefiere no responder","REDES SOCIALES SEG3":"NA","APPS DE MENSAJERÍA SEG3":"NA","PLATAFORMAS DE TRANSPORTE SEG3":"NA","PLATAFORMAS DE COMERCIO SEG3":"NA","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"NA","OTROS CANALES DIGITALES SEG3":"NA","PREFIERE NO RESPONDER SEG3":"NA","Acuerdo camaras seguridad":8},
        {"Codigo":"E-0018","Ciudad SEG1":"No","Barrio SEG1":"No","Transporte público SEG1":"No","Espacio público SEG1":"No","Hurto a residencia SEG2":"No","Hurto a personas SEG2":"Sí","Agresión Física o peleas SEG2":"No","Extorsión SEG2":"Sí","Fraude bancario SEG2":"No","Amenazas SEG2":"Sí","Agresión sexual SEG2":"No","Hurto a vehículos SEG2":"No","Violencia intrafamiliar SEG2":"Sí","Violencia económica SEG2":"Sí","Desplazamiento forzado SEG2":"No","Conflicto armado SEG2":"No","Acoso digital":"Sí","REDES SOCIALES SEG3":"No","APPS DE MENSAJERÍA SEG3":"Sí","PLATAFORMAS DE TRANSPORTE SEG3":"No","PLATAFORMAS DE COMERCIO SEG3":"No","CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3":"No","OTROS CANALES DIGITALES SEG3":"No","PREFIERE NO RESPONDER SEG3":"No","Acuerdo camaras seguridad":"NA"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-seguridad">
  <div class="sech"><h2>🛡️ Seguridad</h2><p>Percepción de seguridad, victimización y acoso digital</p></div>
  <div class="g4">
    <div class="kpi"><div class="v" id="se-total">—</div><div class="l">Total encuestados</div></div>
    <div class="kpi"><div class="v" id="se-seguro-ciudad">—</div><div class="l">% Seguro en ciudad</div></div>
    <div class="kpi"><div class="v" id="se-seguro-barrio">—</div><div class="l">% Seguro en barrio</div></div>
    <div class="kpi"><div class="v" id="se-acuerdo-camaras">—</div><div class="l">Acuerdo cámaras (prom)</div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct">Percepción de seguridad en:</div><div class="cw"><canvas id="c-percepcion-seguridad"></canvas></div></div>
    <div class="card"><div class="ct">¿Ha sido víctima de los siguientes delitos?</div><div class="cw"><canvas id="c-delitos"></canvas></div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct"> En los últimos 12 meses, ¿ha experimentado alguna forma de acoso (suplantación de identidad, extorsión, divulgación de noticias falsas) o violencia de género a través de medios digitales (redes sociales, aplicaciones de mensajería, correo electrónico?</div><div class="cw"><canvas id="c-acoso-digital"></canvas></div></div>
    <div class="card"><div class="ct">¿En cuál de los espacios digitales sucedió?</div><div class="cw"><canvas id="c-espacios-digitales"></canvas></div></div>
  </div>
  <div class="card"><div class="ct">¿Qué tan de acuerdo está con que las cámaras inteligentes, la iluminación inteligente y los botones de pánico mejoran la seguridad en la ciudad? (escala 0-10)</div><div class="cw"><canvas id="c-acuerdo-camaras"></canvas></div></div>
</div>`;
    }

    render(data, n){
      set('se-total', n);

      // Porcentajes de seguridad en ciudad y barrio (SEG1)
      const pctSi = (col) => n > 0 ? Math.round(data.filter(r => r[col] === 'Sí').length / n * 100) : 0;
      set('se-seguro-ciudad', pctSi('Ciudad SEG1') + '%');
      set('se-seguro-barrio', pctSi('Barrio SEG1') + '%');

      // Gráfico de percepción de seguridad - 4 contextos
      const contextos = ['Ciudad SEG1', 'Barrio SEG1', 'Transporte público SEG1', 'Espacio público SEG1'];
      const labelsContexto = ['Ciudad', 'Barrio', 'Transporte público', 'Espacio público'];
      const siData = contextos.map(col => data.filter(r => r[col] === 'Sí').length);
      const noData = contextos.map(col => data.filter(r => r[col] === 'No').length);
      mkChart('c-percepcion-seguridad', 'bar', labelsContexto, [
  { label: 'Sí se siente seguro', data: siData, backgroundColor: '#10b981', borderRadius: 5, borderWidth: 0 },
  { label: 'No se siente seguro', data: noData, backgroundColor: '#ef4444', borderRadius: 5, borderWidth: 0 }
], { legend: { display: true, position: 'top' } });

      // Gráfico de victimización: 12 delitos (incluye desplazamiento y conflicto)
      const delitos = [
        'Hurto a residencia SEG2', 'Hurto a personas SEG2', 'Agresión Física o peleas SEG2',
        'Extorsión SEG2', 'Fraude bancario SEG2', 'Amenazas SEG2', 'Agresión sexual SEG2',
        'Hurto a vehículos SEG2', 'Violencia intrafamiliar SEG2', 'Violencia económica SEG2',
        'Desplazamiento forzado SEG2', 'Conflicto armado SEG2'
      ];
      const delLabels = [
        'Hurto residencia', 'Hurto personas', 'Agresión física', 'Extorsión',
        'Fraude bancario', 'Amenazas', 'Agresión sexual', 'Hurto vehículos',
        'Violencia intrafamiliar', 'Violencia económica', 'Desplazamiento forzado', 'Conflicto armado'
      ];
      const victimasData = delitos.map(d => data.filter(r => r[d] === 'Sí').length);
      mkChart('c-delitos', 'bar', delLabels, [{
        label: 'Número de víctimas',
        data: victimasData,
        backgroundColor: '#f59e0b',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y' });

      // Acoso digital (pregunta general)
      const acosoFreq = freq(data, 'Acoso digital');
      const acosoKeys = Object.keys(acosoFreq).filter(k => k !== 'NA');
      mkChart('c-acoso-digital', 'doughnut', acosoKeys, [{
        data: acosoKeys.map(k => acosoFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: true });

      // Espacios digitales (SEG3): solo para quienes respondieron "Sí" en acoso digital
      const victimasAcoso = data.filter(r => r['Acoso digital'] === 'Sí');
      const espacios = [
        'REDES SOCIALES SEG3', 'APPS DE MENSAJERÍA SEG3', 'PLATAFORMAS DE TRANSPORTE SEG3',
        'PLATAFORMAS DE COMERCIO SEG3', 'CANALES DIGITALES DE SERVICIOS PÚBLICOS SEG3',
        'OTROS CANALES DIGITALES SEG3', 'PREFIERE NO RESPONDER SEG3'
      ];
      const espLabels = [
        'Redes sociales', 'Apps mensajería', 'Plataf. transporte',
        'Plataf. comercio', 'Servicios públicos digitales', 'Otros canales', 'Prefiere no responder'
      ];
      const espData = espacios.map(esp => victimasAcoso.filter(r => r[esp] === 'Sí').length);
      mkChart('c-espacios-digitales', 'bar', espLabels, [{
        label: 'Personas (sobre víctimas de acoso digital)',
        data: espData,
        backgroundColor: '#8b5cf6',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y' });

      // Escala 0-10: acuerdo con medidas de seguridad
      const num = v => (v === null || v === undefined || v === 'NA' || v === 98 || v === 99) ? null : +v;
      const valores = data.map(r => num(r['Acuerdo camaras seguridad'])).filter(v => v !== null && !isNaN(v));
      const avgAcuerdo = valores.length ? (valores.reduce((a,b) => a+b, 0) / valores.length).toFixed(1) : '—';
      set('se-acuerdo-camaras', avgAcuerdo !== '—' ? avgAcuerdo + '/10' : '—');
      // Gráfico de frecuencias de la escala
      const freqAcuerdo = {};
      valores.forEach(v => { freqAcuerdo[v] = (freqAcuerdo[v] || 0) + 1; });
      const puntos = Array.from({length: 11}, (_, i) => i);
      const frecuencias = puntos.map(p => freqAcuerdo[p] || 0);
      mkChart('c-acuerdo-camaras', 'bar', puntos.map(p => p.toString()), [{
        label: 'Personas',
        data: frecuencias,
        backgroundColor: '#14b8a6',
        borderRadius: 5,
        borderWidth: 0
      }]);
    }
  }

  registerSection(new SeguridadSection());
})();