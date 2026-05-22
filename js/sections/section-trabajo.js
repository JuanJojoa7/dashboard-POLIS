(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, avg2, nv, pct, freq, mkChart, CC } = Dashboard;

  class TrabajoSection extends BaseSection {
    constructor(){
      super('trabajo','Trabajo e Ingresos');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-trabajo">
  <div class="sech"><h2>&#x1F4BC; Trabajo, Ingresos y Bancarizaci&oacute;n</h2><p>Situaci&oacute;n laboral y financiera</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="tj-s49">&mdash;</div><div class="l">Satisfacci&oacute;n trabajo</div></div><div class="kpi c"><div class="v" id="tj-s50">&mdash;</div><div class="l">Trabajo &uacute;til</div></div><div class="kpi y"><div class="v" id="tj-red">&mdash;</div><div class="l">Ingresos reducidos</div></div><div class="kpi r"><div class="v" id="tj-deu">&mdash;</div><div class="l">Dificultad pagar deudas</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Condiciones laborales &mdash; Promedio 0-10 (P52)</div><div class="cw t"><canvas id="c-cond"></canvas></div></div><div class="card"><div class="ct">Situaci&oacute;n financiera &mdash; Promedio 0-10 (P66-P68)</div><div class="cw t"><canvas id="c-fin"></canvas></div></div><div class="card"><div class="ct">Actividad principal semana pasada (P44)</div><div class="cw s"><canvas id="c-act44"></canvas></div></div><div class="card"><div class="ct">Cotizaci&oacute;n y bancarizaci&oacute;n (P58, P63, P65)</div><div class="cw s"><canvas id="c-banco"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('tj-s49',avg(nv(data,"49. En una escala de 0 a 10, dónde 0 significa nada satisfecho y 10 significa totalmente satisfecho, ¿qué tan satisfecho se siente en general con su trabajo?")));
      set('tj-s50',avg(nv(data,"50. En general ¿En qué medida encuentra su trabajo útil y significativo?")));
      set('tj-red',pct(data.filter(r=>r["60. ¿Sus ingresos se han reducido en el último año?"]===1).length,n));
      set('tj-deu',pct(data.filter(r=>[1,2].includes(r["64. ¿Tiene dificultades para pagar sus deudas?"])).length,n));

      const condLabs=['Pago','Apoyo','Valoración','Pertenencia','Confianza','Liderazgo','Inclusividad','Flexibilidad','Motivación','Logro metas','Aprendizaje'];
      const condCols=["52.1. Me pagan apropiadamente por mi trabajo.","52.2 Hay personas en el trabajo que me brindan ánimo y apoyo.","52.3 Mis compañeros de trabajo me valoran como persona","52.4 Tengo sentido de pertenencia con la empresa donde trabajo.","52.5 Puedo confiar en la gente de mi empresa.","52.6 Mi jefe me ayuda a tener éxito.","52.7 Mi entorno de trabajo es inclusivo y respetuoso con todas las personas.","52.8 Mi trabajo tiene la flexibilidad de tiempo y lugar que necesito.","52.9 . En la mayoría de mis tareas laborales, me siento motivado.","52.10 Estoy logrando la mayoría de mis metas en el trabajo.","52.11 . A menudo aprendo algo en el trabajo."];
      const condV=condCols.map(c=>avg2(nv(data,c)));
      mkChart('c-cond','bar',condLabs,[{label:'Promedio (0-10)',data:condV,backgroundColor:condV.map(v=>(v||0)>=7?'#10b981':(v||0)>=5?'#f59e0b':'#ef4444'),borderRadius:5,borderWidth:0}],{indexAxis:'y'});

      mkChart('c-fin','bar',['Ingresos alcanzan','Estrés financiero','Confianza financiera'],
        [{label:'Promedio (0-10)',data:[avg2(nv(data,"66. En general, ¿qué tanto siente que sus ingresos le alcanzan para cubrir sus gastos y obligaciones financieras habituales?")),avg2(nv(data,"67. Pensando en su situación financiera actual, ¿qué tanto estrés o preocupación le genera?")),avg2(nv(data,"68. Pensando en los próximos 12 meses, ¿qué tan confiado(a) se siente de poder mantener el control de su situación financiera?"))],backgroundColor:['#10b981','#ef4444','#06b6d4'],borderRadius:5,borderWidth:0}]);

      const actMap={'1':'Trabajando','2':'Buscando empleo','3':'Estudiando','4':'Oficios hogar','5':'Incapacitado','6':'Otro'};
      const actFm=freq(data,"44. ¿En qué actividad ocupó la mayor parte del tiempo la semana pasada?");
      const actK=Object.keys(actFm).sort();
      mkChart('c-act44','doughnut',actK.map(k=>actMap[k]||k),[{data:actK.map(k=>actFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});
      mkChart('c-banco','bar',['Cotiza salud+pensión','Cuenta/Tarjeta','Pago virtual'],
        [{label:'Personas',data:[data.filter(r=>r["58. ¿Usted cotiza a salud y a pensión? Única respuesta"]===3).length,data.filter(r=>[1,2,3].includes(r["63. ¿Usted tiene una cuenta de ahorros y tarjeta de crédito activa con algún banco o institución financiera?"])).length,data.filter(r=>r["65. ¿Usted usa algún tipo de mecanismo de pago virtual?"]===1).length],backgroundColor:['#10b981','#6366f1','#8b5cf6'],borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new TrabajoSection());
})();
