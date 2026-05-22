(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, pct, avg2, nv, mkChart, CC } = Dashboard;

  class TicSection extends BaseSection {
    constructor(){
      super('tic','TIC / Digital');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-tic">
  <div class="sech"><h2>&#x1F4BB; TIC y Gobernanza Digital</h2><p>Acceso, uso y percepci&oacute;n de servicios digitales</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="ti-int">&mdash;</div><div class="l">Satisfacci&oacute;n internet</div></div><div class="kpi c"><div class="v" id="ti-tr">&mdash;</div><div class="l">Usa tr&aacute;mites digitales</div></div><div class="kpi y"><div class="v" id="ti-pla">&mdash;</div><div class="l">Confianza plataformas</div></div><div class="kpi"><div class="v" id="ti-dat">&mdash;</div><div class="l">Conoce datos abiertos</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Uso de internet por dispositivo (P117)</div><div class="cw t"><canvas id="c-disp"></canvas></div></div><div class="card"><div class="ct">Percepci&oacute;n gobernanza digital &mdash; Promedio 0-10</div><div class="cw t"><canvas id="c-gdig"></canvas></div></div><div class="card full"><div class="ct">Canales para informarse sobre servicios p&uacute;blicos &mdash; % Usa (P127)</div><div class="cw s"><canvas id="c-can"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('ti-int',avg(nv(data,"119. En una escala de 0 a 10, donde 0 es \"Nada Satisfecho\" y 10 \"Totalmente Satisfecho\", ¿Qué tan satisfecho se encuentra con la velocidad y conectibilidad de su conexión a internet?")));
      set('ti-tr',pct(data.filter(r=>r["120. En los últimos 12 meses, ¿ha utilizado canales digitales (Web/WhatsApp/apps) para realizar alguno de los siguientes tramites: PQRS, agendar citas médicas, solicitar documentos personales o certificados, solicitud de servicios públicos, liquidación de"]===1).length,n));
      set('ti-pla',avg(nv(data,"121.En una escala de 0 a 10, donde 0 significa \"Nada Confiable\" y 10 significa \"Totalmente Confiable\", ¿qué tan confiables le parecen las plataformas digitales de participación ciudadana de Cali para incidir en decisiones de la cuidad?")));
      set('ti-dat',pct(data.filter(r=>r["123. ¿Usted conoce las plataformas y sitios web de datos abiertos publicados por la administración local?"]===1).length,n));
      mkChart('c-disp','bar',['Computador','Celular','Tableta','Smart TV'],
        [{label:'Entretenimiento',data:["117.1.1. ¿Cuál es el principal uso que usted le da al COMPUTADOR cuando accede a internet? - Entretenimiento","117.2.1. ¿Cuál es el principal uso que le da al TELÉFONO CELULAR cuando accede a internet? - Entretenimiento","117.3.1. ¿Cuál es el principal uso que le da al TABLETA cuando accede a internet? - Entretenimiento","117.4.1. ¿Cuál es el principal uso que le da al SMART TV cuando accede a internet? - Entretenimiento"].map(c=>data.filter(r=>r[c]===1).length),backgroundColor:'#6366f1',borderRadius:4,borderWidth:0},
         {label:'Trabajo',data:["117.1.2. ¿Cuál es el principal uso que usted le da al COMPUTADOR cuando accede a internet? - Trabajo","117.2.2. ¿Cuál es el principal uso que le da al TELÉFONO CELULAR cuando accede a internet? - Trabajo","117.3.2. ¿Cuál es el principal uso que le da al TABLETA cuando accede a internet? - Trabajo","117.4.2. ¿Cuál es el principal uso que le da al SMART TV cuando accede a internet? - Trabajo"].map(c=>data.filter(r=>r[c]===1).length),backgroundColor:'#10b981',borderRadius:4,borderWidth:0},
         {label:'Educación',data:["1117.1.3. ¿Cuál es el principal uso que usted le da al COMPUTADOR cuando accede a internet? - Educación","117.2.3. ¿Cuál es el principal uso que le da al TELÉFONO CELULAR cuando accede a internet? - Educación","117.3.3. ¿Cuál es el principal uso que le da al TABLETA cuando accede a internet? - Educación","117.4.3. ¿Cuál es el principal uso que le da al SMART TV cuando accede a internet? - Educación"].map(c=>data.filter(r=>r[c]===1).length),backgroundColor:'#f59e0b',borderRadius:4,borderWidth:0}],{legend:true});
      const gdLabs=['Alfabetiz. digital','Tecnología urbana','Satisfac. internet','Confianza plataformas','Accesibilidad servicios'];
      const gdCols=["107. ¿En qué medida considera que la ciudad promueve la alfabetización digital (capacitaciones, cursos y accesos guiados)?","108. ¿En qué medida percibe que se usan tecnologías como sensores, cámaras de seguridad, semáforos inteligentes, aplicaciones móviles, entre otros, para mejorar la gestión urbana y el orden de la ciudad?","119. En una escala de 0 a 10, donde 0 es \"Nada Satisfecho\" y 10 \"Totalmente Satisfecho\", ¿Qué tan satisfecho se encuentra con la velocidad y conectibilidad de su conexión a internet?","121.En una escala de 0 a 10, donde 0 significa \"Nada Confiable\" y 10 significa \"Totalmente Confiable\", ¿qué tan confiables le parecen las plataformas digitales de participación ciudadana de Cali para incidir en decisiones de la cuidad?","122. En una escala de 0 a 10, donde 0 significa \"Nada fácil ni accesible\" y 10 \"Totalmente fácil y accesible\", ¿qué tan accesibles y fáciles de usar considera que son los servicios digitales del gobierno local (trámites, pagos, solicitudes)?"];
      mkChart('c-gdig','bar',gdLabs,[{label:'Promedio (0-10)',data:gdCols.map(c=>avg2(nv(data,c))),backgroundColor:'#06b6d4',borderRadius:5,borderWidth:0}],{indexAxis:'y'});
      const canLabs=['Apps','SMS/WhatsApp','Portales web','Redes sociales','Noticias','Info impresa'];
      const canCols=["127.1. ¿A través de qué canales de comunicación usted se informa sobre los cortes, mantenimientos y calidad de los servicios públicos en el área en la que vive? - APPS","127.2. ¿A través de qué canales de comunicación usted se informa sobre los cortes, mantenimientos y calidad de los servicios públicos en el área en la que vive? - SMS/WHATSAPP","127.3. ¿A través de qué canales de comunicación usted se informa sobre los cortes, mantenimientos y calidad de los servicios públicos en el área en la que vive? -PORTALES/SITIOSWEB","127.4. ¿A través de qué canales de comunicación usted se informa sobre los cortes, mantenimientos y calidad de los servicios públicos en el área en la que vive? - REDES SOCIALES","127.5. ¿A través de qué canales de comunicación usted se informa sobre los cortes, mantenimientos y calidad de los servicios públicos en el área en la que vive? - NOTICIAS","127.6. ¿A través de qué canales de comunicación usted se informa sobre los cortes, mantenimientos y calidad de los servicios públicos en el área en la que vive? - INFORMACIÓN IMPRESA"];
      mkChart('c-can','bar',canLabs,[{label:'% usa',data:canCols.map(c=>n?Math.round(data.filter(r=>r[c]===1).length/n*100):0),backgroundColor:CC,borderRadius:5,borderWidth:0}]);
    }
  }

  registerSection(new TicSection());
})();
