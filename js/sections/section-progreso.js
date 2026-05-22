(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, freq, mkChart, CC } = Dashboard;

  class ProgresoSection extends BaseSection {
    constructor(){
      super('progreso','Progreso Social');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-progreso">
  <div class="sech"><h2>&#x1F4C8; Progreso Social</h2><p>Movilidad econ&oacute;mica y expectativas</p></div>
  <div class="g4"><div class="kpi r"><div class="v" id="ps-pob">&mdash;</div><div class="l">Se considera pobre</div></div><div class="kpi g"><div class="v" id="ps-mej">&mdash;</div><div class="l">Mejor que hace 1 a&ntilde;o</div></div><div class="kpi c"><div class="v" id="ps-pad">&mdash;</div><div class="l">Mejor&oacute; vs padres</div></div><div class="kpi y"><div class="v" id="ps-fut">&mdash;</div><div class="l">Optimismo pr&oacute;ximo a&ntilde;o</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Comparaciones econ&oacute;micas (P75, P76, P77)</div><div class="cw t"><canvas id="c-prog"></canvas></div></div><div class="card"><div class="ct">Nivel de ingresos mensuales (P59)</div><div class="cw t"><canvas id="c-ing"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('ps-pob',pct(data.filter(r=>r["74. ¿Podría decirme si usted se considera pobre?"]===1).length,n));
      set('ps-mej',pct(data.filter(r=>r["75. ¿Usted diría que en su hogar se encuentran mejor, igual o peor económicamente que lo que estaban hace un año?"]===1).length,n));
      set('ps-pad',pct(data.filter(r=>r["76. Comparándose con sus padres a su misma edad, ¿usted ha mejorado o empeorado su condición socioeconómica?"]===1).length,n));
      set('ps-fut',pct(data.filter(r=>r["77. Mirando hacia el futuro, ¿usted cree que dentro de un año su hogar va a estar mejor, peor o igual económicamente?"]===1).length,n));
      mkChart('c-prog','bar',['vs. Hace 1 año','vs. Padres','Próximo año'],
        [{label:'Mejor',data:["75. ¿Usted diría que en su hogar se encuentran mejor, igual o peor económicamente que lo que estaban hace un año?","76. Comparándose con sus padres a su misma edad, ¿usted ha mejorado o empeorado su condición socioeconómica?","77. Mirando hacia el futuro, ¿usted cree que dentro de un año su hogar va a estar mejor, peor o igual económicamente?"].map(c=>data.filter(r=>r[c]===1).length),backgroundColor:'#10b981',borderRadius:4,borderWidth:0},
         {label:'Igual',data:["75. ¿Usted diría que en su hogar se encuentran mejor, igual o peor económicamente que lo que estaban hace un año?","76. Comparándose con sus padres a su misma edad, ¿usted ha mejorado o empeorado su condición socioeconómica?","77. Mirando hacia el futuro, ¿usted cree que dentro de un año su hogar va a estar mejor, peor o igual económicamente?"].map(c=>data.filter(r=>r[c]===2).length),backgroundColor:'#f59e0b',borderRadius:4,borderWidth:0},
         {label:'Peor',data:["75. ¿Usted diría que en su hogar se encuentran mejor, igual o peor económicamente que lo que estaban hace un año?","76. Comparándose con sus padres a su misma edad, ¿usted ha mejorado o empeorado su condición socioeconómica?","77. Mirando hacia el futuro, ¿usted cree que dentro de un año su hogar va a estar mejor, peor o igual económicamente?"].map(c=>data.filter(r=>r[c]===3).length),backgroundColor:'#ef4444',borderRadius:4,borderWidth:0}],{legend:true});
      const ingMap={'1':'<1 SM','2':'1 SM','3':'1-2 SM','4':'2-3 SM','5':'3-5 SM','6':'>5 SM','7':'Sin ingresos'};
      const ingFm=freq(data,"59. Actualmente, ¿a cuánto asciende sus ingresos mensuales?");
      const ingK=Object.keys(ingFm).sort((a,b)=>+a-+b);
      mkChart('c-ing','doughnut',ingK.map(k=>ingMap[k]||k),[{data:ingK.map(k=>ingFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});
    }
  }

  registerSection(new ProgresoSection());
})();
