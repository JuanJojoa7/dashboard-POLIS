(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg2, pct, nv, freq, mkChart } = Dashboard;

  class SaludSection extends BaseSection {
    constructor(){
      super('salud','Salud');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-salud">
  <div class="sech"><h2>&#x1F3E5; Salud</h2><p>Salud f&iacute;sica, mental y bienestar psicol&oacute;gico</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="sa-gen">&mdash;</div><div class="l">Salud general (moda)</div></div><div class="kpi c"><div class="v" id="sa-fum">&mdash;</div><div class="l">% Fuma</div></div><div class="kpi y"><div class="v" id="sa-eje">&mdash;</div><div class="l">% Hace ejercicio</div></div><div class="kpi r"><div class="v" id="sa-men">&mdash;</div><div class="l">% Prob. salud mental</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Estr&eacute;s percibido PSS-10 (P85)</div><div class="cw t"><canvas id="c-pss"></canvas></div></div><div class="card"><div class="ct">Ansiedad GAD-7 (P86) y Depresi&oacute;n PHQ-9 (P87)</div><div class="cw t"><canvas id="c-gadphq"></canvas></div></div><div class="card"><div class="ct">Estado de salud general (P81)</div><div class="cw s"><canvas id="c-sg"></canvas></div></div><div class="card"><div class="ct">D&iacute;as sin buena salud &mdash; &uacute;ltimos 30 d&iacute;as (P82-P84)</div><div class="cw s"><canvas id="c-dsal"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      const salMap={'1':'Muy buena','2':'Buena','3':'Regular','4':'Mala','5':'Muy mala'};
      const salFm=freq(data,"81. Usted diría que, en general, su salud es");
      const salMod=Object.keys(salFm).reduce((a,b)=>salFm[a]>salFm[b]?a:b,'');
      set('sa-gen',salMap[salMod]||salMod||'\u2014');
      set('sa-fum',pct(data.filter(r=>r["89. ¿Usted fuma?"]===1).length,n));
      set('sa-eje',pct(data.filter(r=>r["90. ¿Realiza alguna actividad física como trotar, caminar, practicar algún deporte o ir al gimnasio? Si responde NO, pase a la p82"]===1).length,n));
      set('sa-men',pct(data.filter(r=>r["88. ¿Usted cree que alguna vez ha tenido problemas con su salud mental?"]===1).length,n));

      const pssLabs=['Afectado inesperad.','Incapaz controlar','Nervioso/estresado','Seguro de sí mismo','Cosas van bien','No podía afrontar','Control dificultades','Todo bajo control','Enojado-sin control','Dificultades acumulan'];
      const pssCols=["85.1. ¿Con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?","85.2. ¿Con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?","85.3. ¿Con qué frecuencia se ha sentido nervioso o estresado?","85.4. ¿Con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?","85.5. ¿Con qué frecuencia ha sentido que las cosas le van bien?","85.6. ¿Con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenia que hacer?","85.7. ¿Con qué frecuencia ha podido controlar las dificultades de su vida?","85.8. ¿Con qué frecuencia ha sentido que tenía todo bajo control?","85.9. ¿Con qué frecuencia ha estado enojado porque las cosas que le han ocurrido estaban fuera de su control?","85.10. ¿Con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?"];
      mkChart('c-pss','bar',pssLabs,[{label:'Promedio',data:pssCols.map(c=>avg2(nv(data,c))),backgroundColor:'#f59e0b',borderRadius:5,borderWidth:0}],{indexAxis:'y'});

      const gadLabs=['Nervioso','Sin ctrl preoc.','Preocupación exc.','Difícil relajarse','Inquieto/a','Irritable','Miedo terrible'];
      const gadCols=["86.1 Durante las últimas dos (2) semanas, usted: Se ha sentido nervioso(a), ansioso(a) o con los nervios de punta","86.2 Durante las últimas dos (2) semanas, usted: No ha sido capaz de parar o controlar su preocupación","86.3 Durante las últimas dos (2) semanas, usted: Se ha preocupado demasiado por motivos diferentes","86.4 Durante las últimas dos (2) semanas, usted: Ha tenido dificultad para relajarse","86.5 Durante las últimas dos (2) semanas, usted: Se ha sentido tan inquieto(a) que no ha podido quedarse quieto(a)","86.6 Durante las últimas dos (2) semanas, usted: Se ha molestado o irritado fácilmente","86.7 Durante las últimas dos (2) semanas, usted: Ha tenido miedo de que algo terrible fuera a pasar"];
      const phqLabs=['Sin interés','Decaído/depr.','Sueño alterado','Cansancio','Apetito alt.','Sentirse fracaso','Concentración','Movimiento alt.','Pensamientos daño'];
      const phqCols=["87.1 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Poco interés o placer en hacer cosas","87.2 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Se ha sentido decaído(a), deprimido(a) o sin esperanzas","87.3 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado","87.4 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Se ha sentido cansado(a) o con poca energía","87.5 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Sin apetito o ha comido en exceso","87.6 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Se ha sentido mal con usted mismo(a) – o que es unfracaso o que ha quedado mal con usted mismo(a) o consu familia","87.7 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión","87.8 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? ¿Se ha movido o hablado tan lento que otras personaspodrían haberlo notado? o lo contrario – muy inquieto(a)o agitado(a) que ha estado moviéndose mucho más delo normal","87.9 ¿qué tan seguido ha tenido molestias debido a los siguientes problemas? Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera"];
      mkChart('c-gadphq','bar',[...gadLabs,...phqLabs],
        [{label:'GAD-7',data:[...gadCols.map(c=>avg2(nv(data,c))),...Array(9).fill(null)],backgroundColor:'#8b5cf6',borderRadius:4,borderWidth:0},
         {label:'PHQ-9',data:[...Array(7).fill(null),...phqCols.map(c=>avg2(nv(data,c)))],backgroundColor:'#ef4444',borderRadius:4,borderWidth:0}],{indexAxis:'y',legend:true});

      const salK=Object.keys(salFm).sort();
      mkChart('c-sg','bar',salK.map(k=>salMap[k]||k),[{label:'Personas',data:salK.map(k=>salFm[k]),backgroundColor:'#10b981',borderRadius:5,borderWidth:0}]);
      mkChart('c-dsal','bar',['Días mala salud física','Días salud mental','Días sin actividad'],
        [{label:'Promedio',data:[avg2(nv(data,"82. Ahora piense acerca de su salud física, la cual incluye enfermedades físicas y accidentes, ¿durante cuántos de los pasados treinta días no gozó de buena salud física? - (CDC 5)",[99])),avg2(nv(data,"83. Pensando en los últimos 30 días, ¿en qué medida su salud menstal se ha visto afectada por tensión, depresión u otros problemas emocionales? - (CDC 5)",[99])),avg2(nv(data,"84. ¿Durante cuántos de los pasados treinta días, el mal estado de salud mental o física le impidieron realizar sus actividades, tales como: cuidado personal, trabajo o recreación? 99=NS/NR Si en la 82 y 83 puso cero días, poner 98",[98,99]))],backgroundColor:['#ef4444','#8b5cf6','#f59e0b'],borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new SaludSection());
})();
