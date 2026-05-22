(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, avg2, nv, mkChart } = Dashboard;

  class ConfianzaSection extends BaseSection {
    constructor(){
      super('confianza','Confianza Inst.');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-confianza">
  <div class="sech"><h2>&#x1F3DB;&#xFE0F; Confianza Institucional</h2><p>Confianza en instituciones y transparencia percibida</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="ci-pol">&mdash;</div><div class="l">Confianza Polic&iacute;a</div></div><div class="kpi c"><div class="v" id="ci-loc">&mdash;</div><div class="l">Confianza Gob. Local</div></div><div class="kpi y"><div class="v" id="ci-nac">&mdash;</div><div class="l">Confianza Gob. Nacional</div></div><div class="kpi r"><div class="v" id="ci-jud">&mdash;</div><div class="l">Confianza Rama Judicial</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Confianza institucional comparada &mdash; Promedio 0-10 (P110-P115)</div><div class="cw t"><canvas id="c-inst"></canvas></div></div><div class="card"><div class="ct">Transparencia percibida &mdash; Promedio 0-10 (P116)</div><div class="cw t"><canvas id="c-trans2"></canvas></div></div></div>
</div>`;
    }

    render(data){
      set('ci-pol',avg(nv(data,"111. ¿Qué tanto confía en la policia?")));
      set('ci-loc',avg(nv(data,"114. ¿Qué tanto confía en el gobierno local?")));
      set('ci-nac',avg(nv(data,"113. ¿Qué tanto confía en el gobierno nacional?")));
      set('ci-jud',avg(nv(data,"115. ¿Qué tanto confía en la Rama Judicial (Jueces)?")));
      const instLabs=['Concejo Municipal','Policía','Func. Públicos','Gob. Nacional','Gob. Local','Rama Judicial'];
      const instCols=["110. ¿Qué tanto confía en El Concejo Municipal?","111. ¿Qué tanto confía en la policia?","112. ¿Qué tanto confía en los funcionarios públicos?","113. ¿Qué tanto confía en el gobierno nacional?","114. ¿Qué tanto confía en el gobierno local?","115. ¿Qué tanto confía en la Rama Judicial (Jueces)?"];
      const instV=instCols.map(c=>avg2(nv(data,c)));
      mkChart('c-inst','bar',instLabs,[{label:'Promedio (0-10)',data:instV,backgroundColor:instV.map(v=>(v||0)>=7?'#10b981':(v||0)>=5?'#f59e0b':'#ef4444'),borderRadius:5,borderWidth:0}],{indexAxis:'y'});
      mkChart('c-trans2','bar',['Gob. Nacional','Gob. Local'],
        [{label:'Promedio (0-10)',data:[avg2(nv(data,"116.1 Cómo califica la transparencia de: Gobierno nacional")),avg2(nv(data,"116.2 Cómo califica la transparencia de: Gobierno local"))],backgroundColor:['#6366f1','#8b5cf6'],borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new ConfianzaSection());
})();
