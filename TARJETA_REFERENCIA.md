# 📌 TARJETA DE REFERENCIA RÁPIDA

Imprime esto y tenlo a tu lado mientras codificas.

---

## 🎯 LA REGLA DE ORO

```
├─ filterSource = false        ← NUNCA cambies esto
├─ filterKey = 'Codigo'        ← NUNCA cambies esto  
├─ data = [18 registros]       ← SIEMPRE exactamente 18
└─ Cada registro con Codigo E-0001 a E-0018  ← OBLIGATORIO
```

---

## 📋 ESTRUCTURA OBLIGATORIA

```javascript
class MiSeccionSection extends BaseSection {
  constructor(){
    super('id', 'Nombre');
    this.filterSource = false;
    this.filterKey = 'Codigo';
    this.data = [ /* 18 */ ];
  }

  getHtml(isActive){ return `html aquí`; }
  render(data, n){ /* gráficos aquí */ }
}

registerSection(new MiSeccionSection());
```

---

## 🎨 TIPOS DE GRÁFICOS

```javascript
mkChart(id, 'bar',     labels, datasets);  // Barras
mkChart(id, 'doughnut', labels, datasets);  // Circular
mkChart(id, 'pie',     labels, datasets);  // Pie
mkChart(id, 'line',    labels, datasets);  // Línea
```

---

## 🛠️ FUNCIONES ÚTILES

```javascript
freq(data, "columna")          // Contar frecuencias
set('id', valor)               // Actualizar texto en HTML
mkChart(...)                   // Dibujar gráfico
Dashboard.avg2(array)          // Promedio
data.filter(r => r["col"] === "val")  // Filtrar datos
```

---

## 🆔 IDS EN HTML (Deben ser únicos)

```html
<div id="s-miSeccion">           <!-- Sección -->
  <div id="kpi1">18</div>        <!-- KPI -->
  <canvas id="chart1"></canvas>  <!-- Gráfico -->
</div>
```

## 🆔 IDS EN RENDER (Deben coincidir)

```javascript
set('kpi1', 18);           // ← Actualiza id="kpi1"
mkChart('chart1', ...);    // ← Dibuja en id="chart1"
```

---

## 📊 EJEMPLO COMPLETO MÍNIMO

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class TestSection extends BaseSection {
    constructor(){
      super('test', 'Test');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","estado":"Activo"},
        {"Codigo":"E-0002","estado":"Inactivo"},
        {"Codigo":"E-0003","estado":"Activo"},
        {"Codigo":"E-0004","estado":"Activo"},
        {"Codigo":"E-0005","estado":"Inactivo"},
        {"Codigo":"E-0006","estado":"Activo"},
        {"Codigo":"E-0007","estado":"Activo"},
        {"Codigo":"E-0008","estado":"Inactivo"},
        {"Codigo":"E-0009","estado":"Activo"},
        {"Codigo":"E-0010","estado":"Activo"},
        {"Codigo":"E-0011","estado":"Inactivo"},
        {"Codigo":"E-0012","estado":"Activo"},
        {"Codigo":"E-0013","estado":"Inactivo"},
        {"Codigo":"E-0014","estado":"Activo"},
        {"Codigo":"E-0015","estado":"Activo"},
        {"Codigo":"E-0016","estado":"Inactivo"},
        {"Codigo":"E-0017","estado":"Activo"},
        {"Codigo":"E-0018","estado":"Activo"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-test">
  <div class="sech"><h2>Test</h2><p>Prueba</p></div>
  <div class="g2"><div class="kpi"><div class="v" id="total">18</div><div class="l">Total</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Estado</div><div class="cw"><canvas id="chart1"></canvas></div></div></div>
</div>`;
    }

    render(data, n){
      set('total', n);
      const fm = freq(data, "estado");
      const keys = Object.keys(fm);
      mkChart('chart1', 'bar', keys,
        [{label: 'Personas', data: keys.map(k => fm[k]), backgroundColor: '#6366f1', borderRadius: 5}]
      );
    }
  }

  registerSection(new TestSection());
})();
```

---

## ✅ CHECKLIST RÁPIDO

```
DATOS
□ 18 registros (E-0001 a E-0018)
□ Cada uno tiene "Codigo"
□ Sin duplicados de Codigo

CÓDIGO
□ filterSource = false
□ filterKey = 'Codigo'
□ getHtml() retorna HTML
□ render() dibuja gráficos

HTML
□ id="s-nombreUnico" en div principal
□ id="chart*" en cada canvas
□ id="kpi*" en cada tarjeta

INTEGRACIÓN
□ Agregado a manifest.js
□ Sin errores en consola
□ Filtros funcionan
```

---

## 🔴 NO HAGAS ESTO

```
❌ Cambiar filterSource a true
❌ Cambiar filterKey a otra cosa
❌ Menos de 18 registros
❌ Duplicar Codigo
❌ IDs duplicados en gráficos
❌ Olvidar agregar a manifest.js
❌ freq() con columna que no existe
```

---

## 🟢 SÍ HACES ESTO

```
✅ filterSource = false
✅ filterKey = 'Codigo'
✅ Exactamente 18 registros
✅ E-0001 a E-0018 (todos)
✅ IDs únicos y coincidentes
✅ Agregado a manifest.js
✅ Validar en consola
```

---

## 🐛 SI ALGO FALLA

```
1. Abre consola (F12)
2. Busca error rojo
3. Lee qué línea causa el error
4. Compara con este template

ERRORES COMUNES:
- "undefined": falta destructuring
- "Cannot read property": Codigo faltante
- Gráfico en blanco: ID canvas incorrecto
- No aparece sección: Falta en manifest.js
```

---

## 📞 AYUDA RÁPIDA

```javascript
// Ver si está cargada
Dashboard.sections.length;  // ¿> 0?

// Ver tu sección
Dashboard.sections.find(s => s.id === 'miId');

// Ver datos
Dashboard.sections[0].data.length;  // ¿18?

// Ver Codigos
Dashboard.sections[0].data.map(r => r.Codigo);

// Probar filtro
Dashboard.state.filters.sx = 'Hombre';
Dashboard.sections[0].render(Dashboard.sections[0].getFilterData(), 5);
```

---

**Guardá esta tarjeta 📌 La vas a usar mucho** ⚡
