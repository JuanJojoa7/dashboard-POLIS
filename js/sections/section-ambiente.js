(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, pct, nv, mkChart } = Dashboard;

  class AmbienteSection extends BaseSection {
    constructor(){
      super('ambiente','Medio Ambiente');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-ambiente">
  <div class="sech"><h2>&#x1F33F; Medio Ambiente</h2><p>Percepci&oacute;n clim&aacute;tica y preparaci&oacute;n de la ciudad</p></div>
  <div class="g4"><div class="kpi r"><div class="v" id="am-ev">&mdash;</div><div class="l">Not&oacute; eventos clim&aacute;ticos</div></div><div class="kpi y"><div class="v" id="am-pr">&mdash;</div><div class="l">Ciudad preparada (0-10)</div></div><div class="kpi c"><div class="v" id="am-co">&mdash;</div><div class="l">Conoce monitoreo aire</div></div><div class="kpi"><div class="v" id="am-cam">&mdash;</div><div class="l">C&aacute;maras mejoran seguridad</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Eventos clim&aacute;ticos (P130) y monitoreo aire (P128)</div><div class="cw"><canvas id="c-clim"></canvas></div></div><div class="card"><div class="ct">Preparaci&oacute;n ciudad para emergencias &mdash; Distribuci&oacute;n (P129)</div><div class="cw"><canvas id="c-prep"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      const evN=data.filter(r=>r["130. En el último año, ¿ha notado aumento de calor extremo, contaminación u otros eventos climáticos que afecten su vida diaria?"]===1).length;
      set('am-ev',pct(evN,n));
      set('am-pr',avg(nv(data,"129. En una escala de 0 a 10, donde 0 es \"Sin preparación\" y 10 \"Completamente Preparada\", ¿Qué tan preparada considera que está la ciudad para responder a emergencias climáticas (inundaciones, deslizamientos, incendios) y recibir alertas oportunas?")));
      const coN=data.filter(r=>r["128. ¿Usted sabe que existe información pública sobre el monitoreo de la calidad del aire y alertas de riesgos climáticos en la ciudad?"]===1).length;
      set('am-co',pct(coN,n));
      set('am-cam',avg(nv(data,"98. En una escala de 0 a 10, donde 0 significa \"Nada de acuerdo\" y 10 \"Totalmente de acuerdo\", ¿Qué tan de acuerdo está con la siguiente afirmación? : Las cámaras de seguridad, la iluminación inteligente y los bótones de pánico instalados en la ciudad con")));
      mkChart('c-clim','doughnut',['Notó eventos climáticos','No notó','Conoce monitoreo','No conoce'],
        [{data:[evN,n-evN,coN,n-coN],backgroundColor:['#ef4444','#10b981','#06b6d4','#f59e0b'],borderWidth:0}],{legend:true});
      const prepV=nv(data,"129. En una escala de 0 a 10, donde 0 es \"Sin preparación\" y 10 \"Completamente Preparada\", ¿Qué tan preparada considera que está la ciudad para responder a emergencias climáticas (inundaciones, deslizamientos, incendios) y recibir alertas oportunas?");
      mkChart('c-prep','bar',Array.from({length:11},(_,i)=>String(i)),
        [{label:'Personas',data:Array.from({length:11},(_,i)=>prepV.filter(v=>v===i).length),backgroundColor:Array.from({length:11},(_,v)=>v>=7?'#10b981':v>=5?'#f59e0b':'#ef4444'),borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new AmbienteSection());
})();
