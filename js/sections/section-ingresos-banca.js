(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, avg2, nv, pct, freq, mkChart, CC } = Dashboard;

  class IngresosBancaSection extends BaseSection {
    constructor(){
      super('ingresos-banca','Ingresos y Banca');
      this.filterSource=false;
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-ingresos-banca">
  <div class="sech"><h2>💰 Ingresos y Banca</h2><p>Situación financiera y acceso a servicios bancarios</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="ib-ing-alc">&mdash;</div><div class="l">Ingresos alcanzan</div></div><div class="kpi y"><div class="v" id="ib-estr">&mdash;</div><div class="l">Estrés financiero</div></div><div class="kpi c"><div class="v" id="ib-conf">&mdash;</div><div class="l">Confianza financiera</div></div><div class="kpi r"><div class="v" id="ib-deu">&mdash;</div><div class="l">Dificultad pagar deudas</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Ingresos reducidos en último año</div><div class="cw"><canvas id="c-ingresos-red"></canvas></div></div><div class="card"><div class="ct">Bancarización y pagos</div><div class="cw"><canvas id="c-banco-serv"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('ib-ing-alc','&mdash;');
      set('ib-estr','&mdash;');
      set('ib-conf','&mdash;');
      set('ib-deu','&mdash;');

      mkChart('c-ingresos-red','bar',['Ingresos reducidos'],
        [{label:'Personas',data:[0],backgroundColor:['#ef4444'],borderRadius:5,borderWidth:0}]);

      mkChart('c-banco-serv','bar',['Cuenta/Tarjeta','Pago virtual'],
        [{label:'Personas',data:[0,0],backgroundColor:['#6366f1','#8b5cf6'],borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new IngresosBancaSection());
})();
