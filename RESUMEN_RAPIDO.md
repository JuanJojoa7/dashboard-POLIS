# ⚡ RESUMEN EJECUTIVO: CREAR UNA SECCIÓN EN 5 MINUTOS

## El flujo de una sección:

```
Usuario cambia filtro en demografico
        ↓
applyFilters() en core.js filtra demografico
        ↓
buildFilterIndex() extrae Codigos válidos de demografico
        ↓
filterByIndex() aplica esos Codigos a TU SECCIÓN
        ↓
render(dataFiltrada) dibuja gráficos con datos filtrados
```

## Lo que necesitas hacer:

### 1️⃣ Copiar y completar la plantilla:

```javascript
// js/sections/section-miSeccion.js
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class MiSeccionSection extends BaseSection {
    constructor(){
      super('mi-seccion', 'Mi Sección');
      this.filterSource = false;  // ← NUNCA cambiar
      this.filterKey = 'Codigo';  // ← NUNCA cambiar
      this.data = [
        {"Codigo":"E-0001", "pregunta":"respuesta", "valor":10},
        // ... E-0002 a E-0018 (18 TOTAL)
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-mi-seccion">
  <div class="sech"><h2>📊 Mi Sección</h2><p>Descripción</p></div>
  <div class="g2">
    <div class="kpi"><div class="v" id="total">18</div><div class="l">Total</div></div>
  </div>
  <div class="g3">
    <div class="card"><div class="ct">Gráfico</div><div class="cw"><canvas id="chart1"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      set('total', n);
      
      const freq1 = freq(data, "pregunta");
      const keys1 = Object.keys(freq1);
      mkChart('chart1', 'bar', keys1,
        [{label: 'Personas', data: keys1.map(k => freq1[k]), backgroundColor: CC}]
      );
    }
  }

  registerSection(new MiSeccionSection());
})();
```

### 2️⃣ Agregar a manifest.js:

```javascript
// js/sections/manifest.js
window.DashboardSectionFiles = [
  'js/sections/section-demografico.js',
  'js/sections/section-miSeccion.js',  // ← Nueva
  // ...
];
```

### 3️⃣ Verificar:

| Checklist | ✓ |
|-----------|---|
| 18 registros con Codigo E-0001 a E-0018 | |
| Cada registro es un objeto con `"Codigo"` | |
| `filterSource=false` | |
| `filterKey='Codigo'` | |
| HTML tiene `id="s-..."` único | |
| Canvas tienen `id="chart..."` únicos | |
| render() llama a mkChart() | |
| Agregada a manifest.js | |

## ⚠️ ERRORES FATALES (NO HACER):

❌ Cambiar `filterSource` a true  
❌ Cambiar `filterKey` a otra cosa  
❌ Duplicar registros de Codigo  
❌ Olvidar el campo `Codigo`  
❌ IDs duplicados en gráficos  
❌ No registrar sección en manifest.js  

## ✅ VALIDACIÓN RÁPIDA:

1. Abre `index.html` en navegador
2. ¿Aparece la pestaña? → ✓
3. ¿Se ve el contenido? → ✓
4. Cambia un filtro en demografico → ¿Cambian tus gráficos? → ✓
5. Abre console (F12) → ¿Sin errores rojos? → ✓

**Si todo ✓, ¡listo!**

---

📖 **Lee GUIA_CREAR_SECCIONES.md para detalles completos**
