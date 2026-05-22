(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, avg2, nv, mkChart, CC } = Dashboard;

  class TiempoSection extends BaseSection {
    constructor(){
      super('tiempo','Uso del Tiempo');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-tiempo">
  <div class="sech"><h2>&#x23F0; Uso del Tiempo</h2><p>Horas promedio por actividad y percepci&oacute;n del tiempo disponible</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="t-p28">&mdash;</div><div class="l">Alcanza obligaciones</div></div><div class="kpi c"><div class="v" id="t-p29">&mdash;</div><div class="l">Alcanza lo importante</div></div><div class="kpi y"><div class="v" id="t-p30">&mdash;</div><div class="l">Control del tiempo</div></div><div class="kpi"><div class="v" id="t-p31">&mdash;</div><div class="l">Tiempo para descansar</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Horas promedio por actividad (P27)</div><div class="cw t"><canvas id="c-tact"></canvas></div></div><div class="card"><div class="ct">Percepci&oacute;n del tiempo disponible (P28-P31)</div><div class="cw t"><canvas id="c-tperc"></canvas></div></div></div>
</div>`;
    }

    render(data){
      set('t-p28',avg(nv(data,"28. En un día promedio, ¿siente que el tiempo le alcanza para cumplir con sus obligaciones diarias?")));
      set('t-p29',avg(nv(data,"29. En un día promedio, ¿siente que el tiempo le alcanza para hacer lo que es importante para usted en su vida?")));
      set('t-p30',avg(nv(data,"30. ¿Qué tanto control siente que tiene sobre cómo usa el tiempo?")));
      set('t-p31',avg(nv(data,"31. ¿Qué tanto siente que tiene tiempo para usted, para descansar o disfrutar?")));

      const actLabs=['Trabajar','Estudiar','Asearse','Comer','Limpiar','Cuidar otros','Cocinar','Act. Sociales','Ocio','Redes sociales','Ejercicio','Dormir'];
      const actValCols=["27.1. Uso del tiempo - Trabajar","27.2. Uso del tiempo - Estudiar","27.3. Uso del tiempo - Asearse, vestirse y arreglarse","27.4. Uso del tiempo - Comer","27.5. Uso del tiempo - Limpiar la vivienda","27.6. uso del tiempo - Cuidar a otros o acompañar a diligencias","27.7. Uso del tiempo - Cocinar","27.9. Uso del tiempo - Actividades sociales","27.10. Uso del tiempo - Actividades de ocio","27.11. Uso del tiempo - Ver redes sociales","27.14. Actividades físicas o deportivas","27.15. Uso del tiempo - Dormir"];
      const actUnitCols=["27.1.1. Horas = 1 Minutos = 2","27.2.1. Horas = 1 Minutos = 2","27.3.1. Horas = 1 Minutos = 2","27.4.1. Horas = 1 Minutos = 2","27.5.1. Horas = 1 Minutos = 2","27.6.1. Horas = 1 Minutos = 2","27.7.1. Horas = 1 Minutos = 2","27.9.1. Horas = 1 Minutos = 2","27.10.1. Horas = 1 Minutos = 2","27.11.1. Horas = 1 Minutos = 2","27.14.1. Horas = 1 Minutos = 2","27.15.1. Horas = 1 Minutos = 2"];
      const actV=actValCols.map((vc,i)=>{
        const uc=actUnitCols[i];
        const vs=data.map(r=>{const v=r[vc],u=r[uc];if(!v||[98,99].includes(v))return null;return u===2?v/60:v;}).filter(v=>v!==null&&v<=24);
        return vs.length?+(vs.reduce((a,b)=>a+b,0)/vs.length).toFixed(2):0;
      });
      mkChart('c-tact','bar',actLabs,[{label:'Horas',data:actV,backgroundColor:CC,borderRadius:5,borderWidth:0}],{indexAxis:'y'});
      mkChart('c-tperc','bar',['Obligaciones','Lo importante','Control tiempo','Descanso'],
        [{label:'Promedio (0-10)',data:[avg2(nv(data,"28. En un día promedio, ¿siente que el tiempo le alcanza para cumplir con sus obligaciones diarias?")),avg2(nv(data,"29. En un día promedio, ¿siente que el tiempo le alcanza para hacer lo que es importante para usted en su vida?")),avg2(nv(data,"30. ¿Qué tanto control siente que tiene sobre cómo usa el tiempo?")),avg2(nv(data,"31. ¿Qué tanto siente que tiene tiempo para usted, para descansar o disfrutar?"))],backgroundColor:'#06b6d4',borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new TiempoSection());
})();
