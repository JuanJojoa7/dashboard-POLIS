(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, nv, pct, freq, mkChart, CC } = Dashboard;

  class TransporteSection extends BaseSection {
    constructor(){
      super('transporte','Transporte');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-transporte">
  <div class="sech"><h2>&#x1F68C; Transporte</h2><p>Movilidad y desplazamiento en Cali</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="tr-ida">&mdash;</div><div class="l">Tiempo ida</div></div><div class="kpi c"><div class="v" id="tr-reg">&mdash;</div><div class="l">Tiempo regreso</div></div><div class="kpi y"><div class="v" id="tr-app">&mdash;</div><div class="l">Usa apps transporte</div></div><div class="kpi"><div class="v" id="tr-n">18</div><div class="l">Encuestados</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Medio de transporte principal (P32)</div><div class="cw"><canvas id="c-trans"></canvas></div></div><div class="card"><div class="ct">Uso de apps de navegaci&oacute;n (P36)</div><div class="cw"><canvas id="c-apps"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('tr-n',n);
      set('tr-ida',avg(nv(data,"35.1 En promedio, ¿cuánto tiempo toman sus desplazamientos diarios para desarrollar su actividad principal?: ida"))+' min');
      set('tr-reg',avg(nv(data,"35.2 En promedio, ¿cuánto tiempo toman sus desplazamientos diarios para desarrollar su actividad principal?: regreso"))+' min');
      const appN=data.filter(r=>r["36. En los últimos 30 días, ¿ha usado una aplicación como Google Maps, Mio App u otra, para planear rutas, estimar tiempos de viaje y/o verificar tráfico o congestión?"]===1).length;
      set('tr-app',pct(appN,n));
      const trFm=freq(data,"32. ¿Qué medio de transporte utiliza con más frecuencia para desplazarse en Cali? (ÚNICA RESPUESTA) (SI NO USA MIO/BUS, PASAR A p34)");
      const trK=Object.keys(trFm).sort();
      const trMap={'1':'A pie','2':'Bicicleta','3':'Motocicleta','4':'Carro','5':'MIO/Bus','6':'Metro','7':'Taxi','8':'App (Uber)','9':'Otro'};
      mkChart('c-trans','doughnut',trK.map(k=>trMap[k]||k),[{data:trK.map(k=>trFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});
      mkChart('c-apps','doughnut',['Usa apps','No usa'],[{data:[appN,n-appN],backgroundColor:['#10b981','#ef4444'],borderWidth:0}],{legend:true});
    }
  }

  registerSection(new TransporteSection());
})();
