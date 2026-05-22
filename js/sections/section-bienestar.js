(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, avg2, nv, mkChart } = Dashboard;

  class BienestarSection extends BaseSection {
    constructor(){
      super('bienestar','Bienestar');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-bienestar">
  <div class="sech"><h2>&#x1F60A; Bienestar Subjetivo</h2><p>Satisfacci&oacute;n con la vida, emociones y calidad de vida percibida</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="bw-s11">&mdash;</div><div class="l">Satisfacci&oacute;n vida (0-10)</div></div><div class="kpi c"><div class="v" id="bw-s13">&mdash;</div><div class="l">Mejor vida posible</div></div><div class="kpi y"><div class="v" id="bw-s14">&mdash;</div><div class="l">Vida vale la pena</div></div><div class="kpi r"><div class="v" id="bw-s25">&mdash;</div><div class="l">Frec. soledad (1-5)</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Emociones del d&iacute;a anterior &mdash; Promedio 0-10 (P15-P24)</div><div class="cw t"><canvas id="c-emoc"></canvas></div></div><div class="card"><div class="ct">Satisfacci&oacute;n por &aacute;reas de vida &mdash; Promedio 0-10 (P26)</div><div class="cw t"><canvas id="c-satis26"></canvas></div></div></div>
  <div class="card mt full"><div class="ct">Distribuci&oacute;n satisfacci&oacute;n general con la vida (P11)</div><div class="cw s"><canvas id="c-dist11"></canvas></div></div>
</div>`;
    }

    render(data){
      set('bw-s11',avg(nv(data,"11. En general, ¿qué tan satisfecho(a) está con todos los aspectos de su vida actualmente?")));
      set('bw-s13',avg(nv(data,"13. Actualmente, ¿En qué medida piensa que está viviendo la mejor vida posible?")));
      set('bw-s14',avg(nv(data,"14. Actualmente, ¿en qué medida piensa que lo que hace en su vida vale la pena?")));
      set('bw-s25',avg(nv(data,"25. ¿Con qué frecuencia se siente solo(a)? 1 =NUNCA y 5 = SIEMPRE.")));

      mkChart('c-emoc','bar',['Feliz','Rió','Aprendió','Disfrutó','Preocupado','Deprimido','Rabia','Estrés','Dolor','Solo/a'],
        [{label:'Promedio (0-10)',data:[
          avg2(nv(data,"15. ¿Cuánta parte del día de ayer se sintió feliz?")),avg2(nv(data,"16. ¿Cuánta parte del día de ayer se rió?")),avg2(nv(data,"17. ¿Cuánta parte del día de ayer sintió que aprendió cosas nuevas o interesantes?")),avg2(nv(data,"18. ¿Cuánta parte del día de ayer disfrutó de las actividades que realizó?")),
          avg2(nv(data,"19. ¿Cuánta parte del día de ayer se sintió preocupado?")),avg2(nv(data,"20. ¿Cuánta parte del día de ayer se sintió deprimido?")),avg2(nv(data,"21. ¿Cuánta parte del día de ayer sintió rabia?")),avg2(nv(data,"22. ¿Cuánta parte del día de ayer sintió estrés?")),
          avg2(nv(data,"23. ¿Cuánta parte del día de ayer experimentó dolor físico?")),avg2(nv(data,"24. ¿Cuánta parte del día de ayer se sintió solo(a) o sin apoyo?"))
        ],backgroundColor:['#10b981','#10b981','#10b981','#10b981','#ef4444','#ef4444','#ef4444','#ef4444','#ef4444','#ef4444'],borderRadius:5,borderWidth:0}]);

      mkChart('c-satis26','bar',['Familia','Trabajo','Sentimental','Salud','Econ.Hogar','Ingresos','Educación','Lugar vida','T. libre'],
        [{label:'Promedio',data:[
          avg2(nv(data,"26.1. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - VIDA FAMILIAR")),avg2(nv(data,"26.2. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - TRABAJO")),avg2(nv(data,"26.3. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - VIDA SENTIMENTAL")),avg2(nv(data,"26.4. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - SALUD")),
          avg2(nv(data,"26.5. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - SITUACIÓN ECONÓMICA HOGAR")),avg2(nv(data,"26.6. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - NIVEL DE INGRESOS")),avg2(nv(data,"26.7. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - EDUCACIÓN")),avg2(nv(data,"26.8. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - LUGAR EN EL QUE VIVE")),avg2(nv(data,"26.9. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - DISPONIBILIDAD DE TIEMPO LIBRE"))
        ].map(v=>v||0),backgroundColor:[avg2(nv(data,"26.1. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - VIDA FAMILIAR")),avg2(nv(data,"26.2. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - TRABAJO")),avg2(nv(data,"26.3. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - VIDA SENTIMENTAL")),avg2(nv(data,"26.4. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - SALUD")),avg2(nv(data,"26.5. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - SITUACIÓN ECONÓMICA HOGAR")),avg2(nv(data,"26.6. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - NIVEL DE INGRESOS")),avg2(nv(data,"26.7. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - EDUCACIÓN")),avg2(nv(data,"26.8. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - LUGAR EN EL QUE VIVE")),avg2(nv(data,"26.9. Por favor, dígame en una escala de 0 a 10, ¿qué tan satisfecho se siente con los siguientes aspectos de su vida?, siendo 0 la peor calificación, 5 ni buena ni mala, y 10 la mejor calificación - DISPONIBILIDAD DE TIEMPO LIBRE"))].map(v=>(v||0)>=7?'#10b981':(v||0)>=5?'#f59e0b':'#ef4444'),borderRadius:5,borderWidth:0}]);

      const d11=Array.from({length:11},(_,i)=>i);
      mkChart('c-dist11','bar',d11.map(String),[{label:'Personas',data:d11.map(i=>data.filter(r=>r["11. En general, ¿qué tan satisfecho(a) está con todos los aspectos de su vida actualmente?"]===i).length),backgroundColor:'#6366f1',borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new BienestarSection());
})();
