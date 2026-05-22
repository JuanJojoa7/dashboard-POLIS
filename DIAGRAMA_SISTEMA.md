# 🎯 CHECKLIST Y DIAGRAMAS DEL SISTEMA

## 📊 DIAGRAMA: Cómo funcionan los FILTROS

```
┌─────────────────────────────────────────────────────────┐
│         USUARIO CAMBIA UN FILTRO EN EL HEADER           │
│  (Ej: Selecciona "Mujer" en el select de Sexo)         │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     handleFilterChange() en app.js                       │
│  • Lee los valores de los 5 select del HTML             │
│  • Actualiza Dashboard.state.filters                    │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     renderAll() en app.js                               │
│  • Obtiene la sección "filterSource"                    │
│    (siempre demografico.js)                             │
│  • Llama applyFilters(demografico.data)                 │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     applyFilters() en core.js                           │
│  • Filtra demografico por los 5 criterios              │
│  • Devuelve solo los E-0001 a E-0018 que cumplen       │
│    (Ej: solo los que son "Mujer")                       │
│  Resultado: [E-0001, E-0003, E-0008, ...]             │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     buildFilterIndex() en core.js                       │
│  • Extrae los Codigos válidos del resultado anterior    │
│  • Los guarda en un Set para búsqueda rápida           │
│  Resultado: Set{'E-0001', 'E-0003', 'E-0008', ...}     │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     Dashboard.sections.forEach(section)                 │
│  • Para cada sección (bienestar, seguridad, etc)       │
│  • Ejecuta filterByIndex(sectionData, filterIndex)     │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     filterByIndex() en core.js                          │
│  • Filtra sectionData para que solo contenga            │
│    los Codigos que están en el filterIndex             │
│  • Por eso es CRÍTICO que cada registro tenga Codigo   │
│  Resultado: datos de TU SECCIÓN filtrados              │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│     section.render(filteredData, count)                 │
│  • Se llama con los datos YA FILTRADOS                 │
│  • Dibuja los gráficos con esos datos filtrados        │
│  ¡Los gráficos muestran solo "Mujeres"!              │
└─────────────────────────────────────────────────────────┘
```

---

## 🔗 CONEXIÓN CON DEMOGRAFICO

```
┌──────────────────────────────────┐
│      DEMOGRAFICO.JS              │
│  filterSource = true             │
│  ├─ E-0001 (Mujer)               │
│  ├─ E-0002 (Mujer)               │
│  ├─ E-0003 (Hombre)              │
│  └─ ... 18 total                 │
└──────────────────────────────────┘
         ▲         │
         │         │ buildFilterIndex()
         │         │ Extrae Codigos
         │         ▼
         │    ┌─────────────┐
         │    │ filterIndex │
         │    │ {E-0001,    │
         │    │  E-0002,    │
         │    │  ...}       │
         │    └──────┬──────┘
         │           │ filterByIndex()
         │           │ filtra por Codigo
         │           ▼
    ┌────┴────────────────────┐
    │                         │
    ▼                         ▼
┌─────────────────┐   ┌──────────────────┐
│  BIENESTAR.JS   │   │  SEGURIDAD.JS    │
│  ├─ E-0001 ✓    │   │  ├─ E-0001 ✓     │
│  ├─ E-0002 ✓    │   │  ├─ E-0002 ✓     │
│  ├─ E-0003 ✗    │   │  ├─ E-0003 ✗     │
│  └─ ...         │   │  └─ ...          │
│                 │   │                  │
│ render() dibuja │   │ render() dibuja  │
│ con datos       │   │ con datos        │
│ filtrados       │   │ filtrados        │
└─────────────────┘   └──────────────────┘
```

**LA LLAVE MAESTRA: El campo "Codigo" es lo que vincula todo**

---

## ✅ CHECKLIST PASO A PASO

### ANTES de escribir código:

- [ ] Tengo 18 registros de datos (lista completa)
- [ ] Cada registro tiene un Codigo único (E-0001 a E-0018)
- [ ] Los nombres de columna NO usan caracteres especiales (sin ñ, sin acentos problematicos)
- [ ] Decidí qué gráficos mostrar (bar, doughnut, pie, line)
- [ ] Decidí qué tarjetas KPI mostrar

### Escribiendo la sección:

- [ ] Copié la plantilla base
- [ ] Completé constructor() con datos
  - [ ] 18 registros exactos
  - [ ] Cada uno tiene "Codigo": "E-XXXX"
  - [ ] Tipos de datos correctos (string vs número)
- [ ] Implementé getHtml(isActive)
  - [ ] ID único: id="s-nombre-unico"
  - [ ] IDs únicos para cada canvas: id="chart1", id="chart2"
  - [ ] IDs únicos para cada KPI: id="kpi1", id="kpi2"
- [ ] Implementé render(data, n)
  - [ ] set() actualiza cada KPI
  - [ ] mkChart() dibuja cada gráfico
  - [ ] Cada mkChart() apunta al canvas correcto

### Antes de probar:

- [ ] Agregué archivo a js/sections/manifest.js
- [ ] Verificar sintaxis JavaScript (sin comas faltantes)
- [ ] Verificar que freq() solo recibe nombre de columna real
- [ ] Verificar que mkChart() use IDs que existen en HTML

### Probando en navegador:

- [ ] [ ] Abre index.html
- [ ] Busca tu sección en las pestañas
- [ ] Haz clic en tu sección → ¿Aparece contenido?
- [ ] ¿Se dibujan los gráficos? (no están en blanco)
- [ ] ¿Se muestran los números en las tarjetas?
- [ ] Cambia un filtro de demografico
  - [ ] ¿Cambia el contador "n" en tu sección?
  - [ ] ¿Cambian los gráficos?
  - [ ] ¿Cambian los valores de las tarjetas?
- [ ] Abre consola (F12 → Console)
  - [ ] ¿Hay errores rojos? ← Importante encontrarlos
  - [ ] Busca tu sección en el error

### Problemas y soluciones rápidas:

| Síntoma | Culpable | Solución |
|---------|----------|----------|
| Sección no aparece | Falta en manifest.js | Agregar a lista |
| Gráfico en blanco | mkChart ID incorrecto | Verificar que 'chart1' exista en HTML |
| Filtros no funcionan | Falta Codigo en data | Agregar a cada registro |
| "undefined is not a function" | freq() o mkChart() no existe | Verificar destructuring en constructor |
| Valores duplicados | Codigo duplicado | Verificar E-0001 a E-0018 sin repetir |

---

## 📝 TEMPLATE DE SECCIÓN MÍNIMA

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class MiNombreSection extends BaseSection {
    constructor(){
      super('id-unico', 'Nombre Visible');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [ /* 18 registros aquí */ ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-id-unico">
  <div class="sech"><h2>🎯 Nombre Visible</h2><p>Descripción corta</p></div>
  <div class="g2">
    <div class="kpi"><div class="v" id="kpi1">18</div><div class="l">Total</div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct">Gráfico 1</div><div class="cw"><canvas id="chart1"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      set('kpi1', n);
      
      const fm = freq(data, "columna");
      const keys = Object.keys(fm);
      mkChart('chart1', 'bar', keys,
        [{label: 'Personas', data: keys.map(k => fm[k]), backgroundColor: CC}]
      );
    }
  }

  registerSection(new MiNombreSection());
})();
```

---

## 🚨 ERRORES COMUNES Y CÓMO EVITARLOS

### Error 1: "Cannot read property 'Codigo' of undefined"
```
❌ MALO: this.data = [{"Codigo":"E-0001"}];  // Solo 1 registro
✅ BIEN: this.data = [18 registros con Codigo E-0001 a E-0018];
```

### Error 2: "freq is not defined"
```
❌ MALO: const { set, mkChart } = Dashboard;  // Falta freq
✅ BIEN: const { set, freq, mkChart, CC } = Dashboard;
```

### Error 3: "Gráfico no cambia al filtrar"
```
❌ MALO: this.filterSource = true;  // Suena como fuente, pero rompe el sistema
        this.filterKey = 'IdEncuestado';  // Debe ser 'Codigo'
✅ BIEN: this.filterSource = false;
        this.filterKey = 'Codigo';
```

### Error 4: IDs duplicados
```
❌ MALO: 
// seccion1.js
<canvas id="chart"></canvas>

// seccion2.js  
<canvas id="chart"></canvas>  // ← MISMO ID

✅ BIEN:
// seccion1.js
<canvas id="bienestar-chart"></canvas>

// seccion2.js
<canvas id="seguridad-chart"></canvas>
```

### Error 5: Nombres de columna incorrectos
```
❌ MALO: freq(data, "Educación con ñ");  // ñ causa problemas
         freq(data, "Sexo ");  // Espacio extra
✅ BIEN: freq(data, "Educacion");  // Sin ñ
         freq(data, "Sexo");  // Sin espacios
```

---

## 📞 DEBUGGING RÁPIDO

1. **Abre consola**: F12 → Console
2. **Pega esto**:
```javascript
// Ver qué secciones se cargaron
console.log(Dashboard.sections.map(s => s.id));

// Ver datos de tu sección
const sec = Dashboard.sections.find(s => s.id === 'mi-seccion');
console.log(sec.data);

// Ver si hay 18 registros
console.log(sec.data.length);

// Ver si todos tienen Codigo
console.log(sec.data.every(r => r.Codigo));
```

3. **¿Qué ves?**
   - Error rojo → Lee el mensaje
   - undefined → La sección no está en Dashboard.sections
   - 18 → ✓ Correcto
   - false en Codigo → Falta Codigo en algún registro

---

**¡Listo para crear tu sección!** 🚀
