(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, freq, mkChart, CC } = Dashboard;

  class ProgresoSection extends BaseSection {
    constructor(){
      super('progreso','Progreso Social');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Está igual","FuturoProximo":"Mejor","Satisfaccion":8},
        {"Codigo":"E-0002","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Igual","Satisfaccion":5},
        {"Codigo":"E-0003","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":3},
        {"Codigo":"E-0004","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":10},
        {"Codigo":"E-0005","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":10},
        {"Codigo":"E-0006","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":8},
        {"Codigo":"E-0007","Pobre":"Sí","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":5},
        {"Codigo":"E-0008","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Está igual","FuturoProximo":"Mejor","Satisfaccion":6},
        {"Codigo":"E-0009","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Está igual","FuturoProximo":"Mejor","Satisfaccion":9},
        {"Codigo":"E-0010","Pobre":"No","HogarUltimoAno":"Igual","ComparacionPadres":"Ha mejorado","FuturoProximo":"Igual","Satisfaccion":10},
        {"Codigo":"E-0011","Pobre":"No","HogarUltimoAno":"Igual","ComparacionPadres":"Ha empeorado","FuturoProximo":"Mejor","Satisfaccion":10},
        {"Codigo":"E-0012","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Está igual","FuturoProximo":"Mejor","Satisfaccion":8},
        {"Codigo":"E-0013","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":6},
        {"Codigo":"E-0014","Pobre":"No","HogarUltimoAno":"Peor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":6},
        {"Codigo":"E-0015","Pobre":"Sí","HogarUltimoAno":"Igual","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":9},
        {"Codigo":"E-0016","Pobre":"No","HogarUltimoAno":"Igual","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":7},
        {"Codigo":"E-0017","Pobre":"No","HogarUltimoAno":"Mejor","ComparacionPadres":"Ha mejorado","FuturoProximo":"Mejor","Satisfaccion":8},
        {"Codigo":"E-0018","Pobre":"Sí","HogarUltimoAno":"No sabe / No responde","ComparacionPadres":"Ha empeorado","FuturoProximo":"Peor","Satisfaccion":4}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-progreso">
  <div class="sech"><h2>📈 Progreso Social</h2><p>Movilidad económica y expectativas de futuro</p></div>
  <div class="g2"><div class="kpi r"><div class="v" id="ps-pob">&mdash;</div><div class="l">% de personas que sí se consideran pobres en tarjeta</div></div><div class="kpi g"><div class="v" id="ps-sat">&mdash;</div><div class="l">Satisfacción promedio con su estándar de vida</div></div></div>
  <div class="g1"><div class="card"><div class="ct">¿Usted diría que en su hogar se encuentran mejor, igual o peor económicamente que lo que estaban hace un año?</div><div class="cw"><canvas id="c-hogar-ano"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Comparándose con sus padres a su misma edad, ¿usted ha mejorado o empeorado su condición socioeconómica?</div><div class="cw"><canvas id="c-padres"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Mirando hacia el futuro, ¿usted cree que dentro de un año su hogar va a estar mejor, peor o igual económicamente?</div><div class="cw"><canvas id="c-futuro"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      // KPI 1: % pobres
      const pobres = data.filter(r => r["Pobre"] === "Sí").length;
      const pct_pobres = ((pobres / 18) * 100).toFixed(1);
      set('ps-pob', pct_pobres + '%');

      // KPI 2: Satisfacción promedio
      const satisfaccionVals = data.map(r => r["Satisfaccion"]).filter(v => v !== null && v !== undefined && !isNaN(v)).map(Number);
      const satisfaccionProm = satisfaccionVals.length ? (satisfaccionVals.reduce((a,b)=>a+b,0)/satisfaccionVals.length).toFixed(1) : 0;
      set('ps-sat', satisfaccionProm);

      // Gráfico 1: Hogar hace un año (barras)
      const hogarFm = freq(data, "HogarUltimoAno", []);
      const hogarK = Object.keys(hogarFm).sort();
      mkChart('c-hogar-ano', 'bar', hogarK, [{label: 'Personas', data: hogarK.map(k=>hogarFm[k]), backgroundColor: ['#ef4444','#f59e0b','#10b981','#3b82f6'].slice(0, hogarK.length), borderRadius: 5, borderWidth: 0}]);

      // Gráfico 2: Comparación con padres (doughnut)
      const padresFm = freq(data, "ComparacionPadres", []);
      const padresK = Object.keys(padresFm).sort();
      mkChart('c-padres', 'doughnut', padresK, [{data: padresK.map(k=>padresFm[k]), backgroundColor: CC, borderWidth: 0}], {legend: true});

      // Gráfico 3: Futuro próximo (barras)
      const futuroFm = freq(data, "FuturoProximo", []);
      const futuroK = ['Mejor','Igual','Peor'].filter(k => k in futuroFm);
      mkChart('c-futuro', 'bar', futuroK, [{label: 'Personas', data: futuroK.map(k=>futuroFm[k]), backgroundColor: ['#10b981','#f59e0b','#ef4444'].slice(0, futuroK.length), borderRadius: 5, borderWidth: 0}]);
    }
  }

  registerSection(new ProgresoSection());
})();
