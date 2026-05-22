# 💾 EJEMPLOS DE CÓDIGO PARA COPIAR

## Ejemplo 1: Sección de BIENESTAR

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class BienestarSection extends BaseSection {
    constructor(){
      super('bienestar', 'Bienestar');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0002","salud":"Regular","deporte":"No","horarioDormir":"Inadecuado"},
        {"Codigo":"E-0003","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0004","salud":"Excelente","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0005","salud":"Regular","deporte":"No","horarioDormir":"Inadecuado"},
        {"Codigo":"E-0006","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0007","salud":"Excelente","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0008","salud":"Regular","deporte":"No","horarioDormir":"Inadecuado"},
        {"Codigo":"E-0009","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0010","salud":"Excelente","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0011","salud":"Regular","deporte":"No","horarioDormir":"Inadecuado"},
        {"Codigo":"E-0012","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0013","salud":"Regular","deporte":"No","horarioDormir":"Inadecuado"},
        {"Codigo":"E-0014","salud":"Excelente","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0015","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0016","salud":"Regular","deporte":"No","horarioDormir":"Inadecuado"},
        {"Codigo":"E-0017","salud":"Excelente","deporte":"Sí","horarioDormir":"Adecuado"},
        {"Codigo":"E-0018","salud":"Buena","deporte":"Sí","horarioDormir":"Adecuado"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-bienestar">
  <div class="sech"><h2>❤️ Bienestar</h2><p>Estado de salud y hábitos de los encuestados</p></div>
  <div class="g2">
    <div class="kpi"><div class="v" id="b-total">18</div><div class="l">Total encuestados</div></div>
    <div class="kpi"><div class="v" id="b-deporte">—</div><div class="l">% Práctica deporte</div></div>
  </div>
  <div class="g3">
    <div class="card"><div class="ct">Percepción de Salud</div><div class="cw"><canvas id="b-salud"></canvas></div></div>
    <div class="card"><div class="ct">Práctica de Deporte</div><div class="cw"><canvas id="b-deporte-chart"></canvas></div></div>
    <div class="card"><div class="ct">Horario de Dormir</div><div class="cw"><canvas id="b-dormir"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      set('b-total', n);
      
      // KPI: % que practica deporte
      const deporteSi = data.filter(r => r["deporte"] === "Sí").length;
      set('b-deporte', n > 0 ? Math.round(deporteSi/n*100)+'%' : '—');
      
      // Salud (doughnut)
      const saludFm = freq(data, "salud");
      const saludK = Object.keys(saludFm).sort();
      mkChart('b-salud', 'doughnut', saludK,
        [{data: saludK.map(k => saludFm[k]), backgroundColor: CC, borderWidth: 0}],
        {legend: true}
      );
      
      // Deporte (bar)
      const depFm = freq(data, "deporte");
      const depK = ['Sí', 'No'].filter(k => k in depFm);
      mkChart('b-deporte-chart', 'bar', depK,
        [{label: 'Personas', data: depK.map(k => depFm[k]), backgroundColor: '#10b981', borderRadius: 5}]
      );
      
      // Horario de dormir (doughnut)
      const horarioFm = freq(data, "horarioDormir");
      const horarioK = Object.keys(horarioFm);
      mkChart('b-dormir', 'doughnut', horarioK,
        [{data: horarioK.map(k => horarioFm[k]), backgroundColor: CC, borderWidth: 0}],
        {legend: true}
      );
    }
  }

  registerSection(new BienestarSection());
})();
```

---

## Ejemplo 2: Sección de SEGURIDAD (simplificada)

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class SeguridadSection extends BaseSection {
    constructor(){
      super('seguridad', 'Seguridad');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","sienteSeguro":"Sí","robo":"No","tipo":"Asalto"},
        {"Codigo":"E-0002","sienteSeguro":"No","robo":"Sí","tipo":"Hurto"},
        // ... completar E-0003 a E-0018
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-seguridad">
  <div class="sech"><h2>🔒 Seguridad</h2><p>Percepción y experiencias de seguridad</p></div>
  <div class="g2">
    <div class="kpi"><div class="v" id="s-total">18</div><div class="l">Encuestados</div></div>
    <div class="kpi"><div class="v" id="s-seguro">—</div><div class="l">% Se sienten seguros</div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct">Percepción de Seguridad</div><div class="cw"><canvas id="s-percepcion"></canvas></div></div>
    <div class="card"><div class="ct">Experiencia de Robo</div><div class="cw"><canvas id="s-robo"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      set('s-total', n);
      
      const seguroSi = data.filter(r => r["sienteSeguro"] === "Sí").length;
      set('s-seguro', n > 0 ? Math.round(seguroSi/n*100)+'%' : '—');
      
      const percFm = freq(data, "sienteSeguro");
      const percK = Object.keys(percFm);
      mkChart('s-percepcion', 'bar', percK,
        [{label: 'Personas', data: percK.map(k => percFm[k]), backgroundColor: '#ef4444', borderRadius: 5}]
      );
      
      const roboFm = freq(data, "robo");
      const roboK = Object.keys(roboFm);
      mkChart('s-robo', 'bar', roboK,
        [{label: 'Personas', data: roboK.map(k => roboFm[k]), backgroundColor: '#f59e0b', borderRadius: 5}]
      );
    }
  }

  registerSection(new SeguridadSection());
})();
```

---

## Ejemplo 3: Sección con NÚMEROS (ENCUESTA DE SATISFACCIÓN)

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class SatisfaccionSection extends BaseSection {
    constructor(){
      super('satisfaccion', 'Satisfacción');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","servicio":4,"transporte":3,"salud":5,"educacion":4},
        {"Codigo":"E-0002","servicio":2,"transporte":1,"salud":3,"educacion":2},
        {"Codigo":"E-0003","servicio":5,"transporte":5,"salud":5,"educacion":5},
        // ... E-0004 a E-0018
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-satisfaccion">
  <div class="sech"><h2>⭐ Satisfacción</h2><p>Índices de satisfacción con servicios públicos (1-5)</p></div>
  <div class="g4">
    <div class="kpi"><div class="v" id="sat-total">18</div><div class="l">Encuestados</div></div>
    <div class="kpi"><div class="v" id="sat-prom-serv">—</div><div class="l">Prom. Servicio</div></div>
    <div class="kpi"><div class="v" id="sat-prom-salud">—</div><div class="l">Prom. Salud</div></div>
    <div class="kpi"><div class="v" id="sat-prom-edu">—</div><div class="l">Prom. Educación</div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct">Promedio por Servicio</div><div class="cw"><canvas id="sat-promedios"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      set('sat-total', n);
      
      if (n > 0) {
        const promServ = data.map(r => r["servicio"]).filter(v => v).reduce((a,b) => a+b,0) / n;
        const promSalud = data.map(r => r["salud"]).filter(v => v).reduce((a,b) => a+b,0) / n;
        const promEdu = data.map(r => r["educacion"]).filter(v => v).reduce((a,b) => a+b,0) / n;
        
        set('sat-prom-serv', promServ.toFixed(1));
        set('sat-prom-salud', promSalud.toFixed(1));
        set('sat-prom-edu', promEdu.toFixed(1));
        
        // Gráfico de promedios
        mkChart('sat-promedios', 'bar', ['Servicio', 'Transporte', 'Salud', 'Educación'],
          [{label: 'Puntuación', data: [promServ, 
            data.map(r => r["transporte"]).reduce((a,b) => a+b,0)/n,
            promSalud,
            promEdu
          ], backgroundColor: CC, borderRadius: 5}]
        );
      }
    }
  }

  registerSection(new SatisfaccionSection());
})();
```

---

## Ejemplo 4: Sección con GRÁFICO DE LÍNEA (EVOLUCIÓN)

```javascript
// Para usar line chart:
mkChart('chart-id', 'line', ['Enero', 'Febrero', 'Marzo'],
  [{
    label: 'Métrica',
    data: [10, 15, 12],
    borderColor: '#6366f1',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    tension: 0.4,
    fill: true
  }]
);
```

---

## Colores disponibles (CC):

```javascript
CC = ['#6366f1','#10b981','#f59e0b','#06b6d4','#8b5cf6','#ef4444','#ec4899','#14b8a6','#f97316','#84cc16','#3b82f6','#a78bfa']

// Úsalos así:
backgroundColor: CC              // Asigna automáticamente
backgroundColor: '#6366f1'       // Uno específico
backgroundColor: ['#6366f1']     // Array manual
```

---

## Patrones comunes:

### Contar ocurrencias:
```javascript
const count = data.filter(r => r["campo"] === "valor").length;
```

### Calcular porcentaje:
```javascript
const percent = n > 0 ? Math.round(count/n*100) + '%' : '—';
```

### Promedio:
```javascript
const promedio = data.map(r => r["numero"]).reduce((a,b) => a+b,0) / n;
```

### Filtrar valores válidos:
```javascript
const valores = data.map(r => r["campo"]).filter(v => v && v !== 'NA');
```

---

**¡Copia y adapta estos ejemplos a tu sección!**
