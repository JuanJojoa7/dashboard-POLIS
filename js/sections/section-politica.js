(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, pct, nv, mkChart } = Dashboard;

  class PoliticaSection extends BaseSection {
    constructor(){
      super('politica','Política');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-politica">
  <div class="sech"><h2>&#x1F5F3;&#xFE0F; Participaci&oacute;n Pol&iacute;tica</h2><p>Voto, inter&eacute;s pol&iacute;tico y formas de participaci&oacute;n</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="po-vot">&mdash;</div><div class="l">Vot&oacute; en elecciones</div></div><div class="kpi c"><div class="v" id="po-int">&mdash;</div><div class="l">Inter&eacute;s en pol&iacute;tica</div></div><div class="kpi y"><div class="v" id="po-man">&mdash;</div><div class="l">Ha manifestado</div></div><div class="kpi r"><div class="v" id="po-par">&mdash;</div><div class="l">Pertenece a partido</div></div></div>
  <div class="card"><div class="ct">Formas de participaci&oacute;n pol&iacute;tica &mdash; % S&iacute; (P126)</div><div class="cw"><canvas id="c-part"></canvas></div></div>
</div>`;
    }

    render(data,n){
      set('po-vot',pct(data.filter(r=>r["124. ¿Usted votó en las pasadas elecciones?"]===1).length,n));
      set('po-int',avg(nv(data,"125. En una escala de 0 a 10, donde 0 es poco interés y 10 mucho interés, ¿Qué tanto interés le generan los temas políticos?")));
      set('po-man',pct(data.filter(r=>r["126.1. Usted ha participado en alguna manifestación política"]===1).length,n));
      set('po-par',pct(data.filter(r=>r["126.2. Usted pertenece a algún partido político"]===1).length,n));
      mkChart('c-part','bar',['Manifestación','Partido político','Firma peticiones','Act. sindicales'],
        [{label:'% Sí',data:["126.1. Usted ha participado en alguna manifestación política","126.2. Usted pertenece a algún partido político","126.3. Usted ha firmado peticiones","126.4. Usted participa en actividades sindicales"].map(c=>n?Math.round(data.filter(r=>r[c]===1).length/n*100):0),backgroundColor:['#6366f1','#8b5cf6','#10b981','#f59e0b'],borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new PoliticaSection());
})();
