(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, nv, mkChart, freq } = Dashboard;

  class ComunalSection extends BaseSection {
    constructor(){
      super('comunal','Comunidad');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-comunal">
  <div class="sech"><h2>&#x1F91D; Comunidad y Confianza Interpersonal</h2><p>Voluntariado, redes sociales y confianza</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="co-c99">&mdash;</div><div class="l">Confianza en gente (0-10)</div></div><div class="kpi c"><div class="v" id="co-c100">&mdash;</div><div class="l">Confianza conocidos</div></div><div class="kpi y"><div class="v" id="co-ami">&mdash;</div><div class="l">Amigos cercanos (prom.)</div></div><div class="kpi r"><div class="v" id="co-dis">&mdash;</div><div class="l">Discriminaci&oacute;n percibida</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Participaci&oacute;n como voluntario (P102)</div><div class="cw"><canvas id="c-vol"></canvas></div></div><div class="card"><div class="ct">Percepci&oacute;n de la gente del entorno (P101)</div><div class="cw"><canvas id="c-gente"></canvas></div></div></div>
</div>`;
    }

    render(data){
      set('co-c99',avg(nv(data,"99. En general, ¿qué tanto confía usted en la mayoría de la gente? (TRUST-A1)")));
      set('co-c100',avg(nv(data,"100. En general, ¿qué tanto confía en la mayoría de la gente que conoce personalmente? (TRUST-A2)")));
      set('co-ami',avg(nv(data,"103.¿Cuántos amigos(as) tiene que considera cercanos y que puede recurrir a ellos(as) en caso de necesidad?")));
      set('co-dis',avg(nv(data,"104. En su ciudad, ¿Qué tanto considera que las personas son discriminadas por su origen, género, edad, discapacidad o condición socioeconómica?")));
      mkChart('c-vol','doughnut',['ONG/Fundación','Iglesia','Barrio/Comuna','Ninguna'],
        [{data:["102.1. En el último año, ¿usted ha servido como voluntario en alguna de las siguientes causas? (SELECCIÓN MÚLTIPLE) - ONG/FUNDACIÓN","102.2. En el último año, ¿usted ha servido como voluntario en alguna de las siguientes causas? (SELECCIÓN MÚLTIPLE) - IGLESIA","102.3. En el último año, ¿usted ha servido como voluntario en alguna de las siguientes causas? (SELECCIÓN MÚLTIPLE) - BARRIO/COMUNA","102.4. En el último año, ¿usted ha servido como voluntario en alguna de las siguientes causas? (SELECCIÓN MÚLTIPLE) - NINGUNA"].map(c=>data.filter(r=>r[c]===1).length),backgroundColor:['#6366f1','#8b5cf6','#10b981','#ef4444'],borderWidth:0}],{legend:true});
      const genteFm=freq(data,"101. En terminos generales, usted diría que la gente que lo rodea como conocidos o vecinos, etc, es:");
      const genteK=Object.keys(genteFm).sort();
      mkChart('c-gente','doughnut',genteK.map(k=>k==='1'?'Mayormente confiable':'Mayormente desconfiable'),[{data:genteK.map(k=>genteFm[k]),backgroundColor:['#10b981','#ef4444'],borderWidth:0}],{legend:true});
    }
  }

  registerSection(new ComunalSection());
})();
