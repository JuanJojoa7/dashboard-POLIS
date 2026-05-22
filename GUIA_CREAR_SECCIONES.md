# 📋 GUÍA PARA CREAR NUEVAS SECCIONES DEL TABLERO

Esta guía explica el proceso exacto para crear una nueva sección que funcione con el sistema de filtros global.

---

## 🎯 RESUMEN RÁPIDO

Una sección es un módulo independiente con:
- **Datos quemados** (hardcodeados en la sección)
- **Un identificador único** (`Codigo`) que liga con demografico
- **Visualizaciones** (gráficos y tarjetas)
- **Compatibilidad con filtros** (sin duplicación de datos)

---

## 📁 PASO 1: ESTRUCTURA BASE DEL ARCHIVO

Crea tu archivo en `js/sections/section-NOMBRE.js`:

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, freq, mkChart, CC } = Dashboard;

  class TuSeccionSection extends BaseSection {
    constructor(){
      super('id-unico','Nombre que aparece en la pestaña');
      this.filterSource=false;  // ⚠️ SIEMPRE false para secciones nuevas
      this.filterKey='Codigo';   // ⚠️ SIEMPRE 'Codigo' para conectar con demografico
      this.data = [
        // Tus 18 registros aquí
      ];
    }

    getHtml(isActive){ return ``; }
    render(data,n){ }
  }

  registerSection(new TuSeccionSection());
})();
```

---

## 🔑 PASO 2: ESTRUCTURA DE DATOS (CRÍTICO)

### 2.1 Cada registro DEBE tener:

```javascript
{
  "Codigo": "E-0001",  // ✅ OBLIGATORIO - Liga con demografico
  "columna1": "valor",
  "columna2": 123,
  // ... más columnas específicas de tu sección
}
```

### 2.2 El campo `Codigo` es la llave maestra:

- Debe ser **exactamente igual** al de demografico (`E-0001` a `E-0018`)
- Sin el Codigo correcto, los filtros **NO funcionan**
- Cada encuestado aparece una sola vez en cada sección

### 2.3 Ejemplo completo (18 registros):

```javascript
this.data = [
  {"Codigo":"E-0001","Pregunta1":"respuesta","Pregunta2":5},
  {"Codigo":"E-0002","Pregunta1":"respuesta","Pregunta2":3},
  // ... E-0003 a E-0018
];
```

**VALIDACIÓN**: 
```
✅ Cuenta 18 registros
✅ Cada uno tiene "Codigo" único (E-0001 a E-0018)
✅ Ninguno repite Codigo
```

---

## 🎨 PASO 3: CREAR EL HTML (getHtml)

La función `getHtml(isActive)` devuelve la estructura visual:

### 3.1 Estructura base:

```javascript
getHtml(isActive){
  return `
<div class="sec${isActive ? ' active' : ''}" id="s-TUNOMBRE">
  <div class="sech"><h2>🎯 Mi Sección</h2><p>Descripción breve</p></div>
  
  <!-- Tarjetas KPI (opcional) -->
  <div class="g2">
    <div class="kpi"><div class="v" id="kpi1">—</div><div class="l">Métrica 1</div></div>
    <div class="kpi"><div class="v" id="kpi2">—</div><div class="l">Métrica 2</div></div>
  </div>
  
  <!-- Grid de gráficos -->
  <div class="g3">
    <div class="card"><div class="ct">Gráfico 1</div><div class="cw"><canvas id="chart1"></canvas></div></div>
    <div class="card"><div class="ct">Gráfico 2</div><div class="cw"><canvas id="chart2"></canvas></div></div>
    <div class="card"><div class="ct">Gráfico 3</div><div class="cw"><canvas id="chart3"></canvas></div></div>
  </div>
</div>`;
}
```

### 3.2 Notas importantes:

| Elemento | Propósito |
|----------|-----------|
| `id="s-TUNOMBRE"` | ID único para la sección |
| `class="sec"` | Clase base para secciones |
| `id="chart1"` | ID del canvas para gráficos |
| `class="g2"` / `class="g3"` | Grid: 2 o 3 columnas |
| `class="kpi"` | Tarjeta métrica |
| `id="kpi1"` | ID para actualizar valor con `set()` |

---

## 📊 PASO 4: FUNCIÓN RENDER (CORAZÓN DE LA SECCIÓN)

La función `render(data, n)` recibe datos **ya filtrados** y dibuja gráficos:

### 4.1 Parámetros:

- `data`: Array de registros **filtrados por el usuario** (si filtran por "Hombre", aquí llegan solo hombres)
- `n`: Conteo de registros filtrados

### 4.2 Estructura típica:

```javascript
render(data, n){
  // 1. Actualizar tarjetas KPI
  set('kpi1', n);  // Total
  set('kpi2', data.length > 0 ? 'valor' : '—');

  // 2. Crear gráficos
  
  // Ejemplo: Gráfico circular de Sexo
  const sexoFm = freq(data, "Sexo");
  const sexoK = Object.keys(sexoFm).sort();
  mkChart('chart1', 'doughnut', sexoK, 
    [{data: sexoK.map(k => sexoFm[k]), backgroundColor: CC, borderWidth: 0}],
    {legend: true}
  );
  
  // Ejemplo: Gráfico de barras
  const edadFm = freq(data, "Edad");
  const edadK = Object.keys(edadFm).sort((a,b) => +a-+b);
  mkChart('chart2', 'bar', edadK,
    [{label: 'Personas', data: edadK.map(k => edadFm[k]), 
      backgroundColor: '#06b6d4', borderRadius: 5, borderWidth: 0}]
  );
}
```

### 4.3 Funciones auxiliares disponibles:

```javascript
// Contar frecuencias
freq(data, "nombreColumna")  → {valor1: 5, valor2: 3}

// Promedio
Dashboard.avg2(array)        → 42.5

// Porcentaje
pct(parte, total)            → "56%"

// Establecer texto en HTML
set('idElemento', 'valor')   → document.getElementById('idElemento').textContent = 'valor'

// Crear gráficos
mkChart(canvasId, tipo, labels, datasets, opciones)
// Tipos: 'bar', 'doughnut', 'pie', 'line'
// Colores: CC = array de 12 colores predefinidos
```

---

## ✅ PASO 5: VALIDACIONES CRÍTICAS

Antes de enviar tu sección, VERIFICA:

### 5.1 Datos:
- [ ] 18 registros exactos (E-0001 a E-0018)
- [ ] Todos tienen `"Codigo"` con valor correcto
- [ ] Sin duplicados de Codigo
- [ ] Sin espacios en blanco en valores de filtro

### 5.2 Código:
- [ ] `filterSource=false` (NUNCA true)
- [ ] `filterKey='Codigo'` (SIEMPRE así)
- [ ] Todos los IDs de canvas en HTML tienen `id="chart*"` único
- [ ] Todos los IDs de KPI tienen `id="kpi*"` único
- [ ] Funciones `getHtml()` y `render()` implementadas

### 5.3 Filtros:
- [ ] Al cambiar un filtro en demografico, los gráficos de tu sección cambian
- [ ] Si filtras "Hombre", tu sección muestra solo hombres
- [ ] El contador "n = X" cambia según filtros

### 5.4 Visualización:
- [ ] No hay errores en consola (F12 → Console)
- [ ] Los gráficos se dibujan (no están en blanco)
- [ ] Las tarjetas KPI tienen valores actualizados

---

## 🔄 PASO 6: REGISTRO DE LA SECCIÓN

### 6.1 Agregar archivo a `manifest.js`:

Abre `js/sections/manifest.js` y añade tu archivo a la lista:

```javascript
window.DashboardSectionFiles = [
  'js/sections/section-demografico.js',
  'js/sections/section-bienestar.js',
  'js/sections/section-TU-SECCION.js',  // ← Aquí
  // ... resto de secciones
];
```

**IMPORTANTE**: El orden importa solo para la visualización en pestañas.

### 6.2 Verificar en el navegador:

1. Abre `index.html` en el navegador
2. Busca tu pestaña nueva
3. Haz clic en ella
4. Prueba los filtros

---

## 🐛 PROBLEMAS COMUNES

| Problema | Causa | Solución |
|----------|-------|----------|
| "Sección no aparece" | No está en `manifest.js` | Agrégala a la lista |
| "Gráficos en blanco" | ID canvas no coincide | Verifica `id="chart1"` en HTML y `mkChart('chart1', ...)` |
| "Filtros no funcionan" | Falta `Codigo` en datos | Agrega `"Codigo":"E-0001"` a cada registro |
| "Filtros filtran pero gráfico no cambia" | `render()` no recibe datos filtrados | Verifica que `filterKey='Codigo'` esté correcto |
| "Error: freq is not defined" | No destructuraste en constructor | Verifica: `const { ..., freq, ... } = Dashboard;` |
| "Muestra los mismos datos siempre" | `filterSource=true` (debe ser `false`) | Cambia a `filterSource=false` |

---

## 📝 PLANTILLA LISTA PARA COPIAR

```javascript
(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class TuNombreSection extends BaseSection {
    constructor(){
      super('nombre-unico', 'Nombre Visible');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","col1":"val1","col2":10},
        {"Codigo":"E-0002","col1":"val2","col2":20},
        // ... E-0003 a E-0018
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-nombre-unico">
  <div class="sech"><h2>🎯 Mi Sección</h2><p>Descripción</p></div>
  <div class="g2">
    <div class="kpi"><div class="v" id="kpi-total">18</div><div class="l">Total</div></div>
  </div>
  <div class="g3">
    <div class="card"><div class="ct">Gráfico 1</div><div class="cw"><canvas id="chart1"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      set('kpi-total', n);
      
      const freq1 = freq(data, "col1");
      const keys1 = Object.keys(freq1);
      mkChart('chart1', 'bar', keys1,
        [{label: 'Personas', data: keys1.map(k => freq1[k]), 
          backgroundColor: CC, borderRadius: 5, borderWidth: 0}]
      );
    }
  }

  registerSection(new TuNombreSection());
})();
```

---

## 🚀 CHECKLIST FINAL

Antes de mergear tu sección:

```
DATOS
☐ 18 registros con Codigo E-0001 a E-0018
☐ Sin espacios en blanco en valores
☐ Tipos de dato correctos (string vs number)

CÓDIGO
☐ filterSource = false
☐ filterKey = 'Codigo'
☐ Todos los imports en destructuring
☐ getHtml() devuelve HTML válido
☐ render() actualiza todos los gráficos

FILTROS
☐ Cambio filtro → datos se actualizan
☐ Reset limpia todos los filtros
☐ Contador "n" es correcto

VISUALIZACIÓN
☐ Sin errores en consola
☐ Gráficos se dibujan correctamente
☐ Pestaña aparece en el tablero
☐ Responsive en móvil (opcional)

INTEGRACIÓN
☐ Agregada a manifest.js
☐ Código revisado por al menos un compañero
```

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Puedo agregar más de 18 registros?**
R: No. Son 18 encuestados fijos. Una sección por encuestado.

**P: ¿Puedo cambiar los nombres de columna?**
R: Sí, pero NUNCA toques `"Codigo"`. Es la llave.

**P: ¿Qué pasa si olvido un registro?**
R: Faltan datos. Cuando filtren, habrá inconsistencias.

**P: ¿Puedo tener `filterSource=true`?**
R: NO. Solo demografico es source. Las otras son dependientes.

**P: ¿Cómo agrego más gráficos?**
R: Copia el patrón de `mkChart()` en render(). Crea canvas nuevos en HTML.

---

## 📞 SOPORTE

Si algo no funciona:
1. Abre la consola (F12)
2. Ve a "Console" y busca errores rojos
3. Verifica que Codigo sea exacto en tu data
4. Compara tu estructura con section-demografico.js

¡Éxito creando tu sección! 🎉
