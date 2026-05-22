(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, pct, mkChart } = Dashboard;

  class SeguridadSection extends BaseSection {
    constructor(){
      super('seguridad','Seguridad');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-seguridad">
  <div class="sech"><h2>&#x1F6E1;&#xFE0F; Seguridad</h2><p>Percepci&oacute;n de seguridad y victimizaci&oacute;n</p></div>
  <div class="g4"><div class="kpi g"><div class="v" id="se-bar">&mdash;</div><div class="l">Seguro en barrio</div></div><div class="kpi r"><div class="v" id="se-ciu">&mdash;</div><div class="l">Seguro en ciudad</div></div><div class="kpi y"><div class="v" id="se-trp">&mdash;</div><div class="l">Seguro transporte</div></div><div class="kpi c"><div class="v" id="se-aco">&mdash;</div><div class="l">Acoso digital</div></div></div>
  <div class="g2"><div class="card"><div class="ct">Percepci&oacute;n de seguridad por contexto &mdash; % Se siente seguro (P94)</div><div class="cw"><canvas id="c-pseg"></canvas></div></div><div class="card"><div class="ct">Victimizaci&oacute;n por tipo de delito &mdash; % afectados (P95)</div><div class="cw"><canvas id="c-del"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      const seg94Cols=["94.1 En general, ¿se siente seguro en la ciudad?","94.2 En general, ¿se siente seguro en su barrio?","94.3 En general, ¿se siente seguro en el transporte público?","94.4 En general, ¿se siente seguro en el espacio público?"];
      const seg94P=seg94Cols.map(c=>n?Math.round(data.filter(r=>r[c]===1).length/n*100):0);
      set('se-ciu',seg94P[0]+'%');
      set('se-bar',seg94P[1]+'%');
      set('se-trp',seg94P[2]+'%');
      const acosoN=data.filter(r=>r["96. En los últimos 12 meses, ¿ha experimentado alguna forma de acoso (suplantación de identidad, extorsión, divulgación de noticias falsas) o violencia de género a través de medios digitales (redes sociales, aplicaciones de mensajería, correo electrónico"]===1).length;
      set('se-aco',pct(acosoN,n));
      mkChart('c-pseg','bar',['Ciudad','Barrio','Transp. público','Espacio público'],
        [{label:'% Se siente seguro',data:seg94P,backgroundColor:seg94P.map(v=>v>=60?'#10b981':v>=40?'#f59e0b':'#ef4444'),borderRadius:5,borderWidth:0}]);
      const delLabs=['Hurto residencia','Hurto personas','Agresión física','Extorsión','Fraude bancario','Amenazas','Agresión sexual','Hurto vehículos','Violencia intrafam.','Violencia económica','Desplazamiento','Conflicto armado'];
      const delCols=["95.1. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Hurto a residencia","95.2. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Hurto a personas","95.3. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Agresión Física o peleas","95.4. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Extorsión","95.5. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Fraude bancario","95.6. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Amenazas","97.7. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Agresión sexual","95.8. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Hurto a vehículos","95.9. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Violencia intrafamiliar","95.10. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Violencia económica","95.11. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Desplazamiento forzado","95.12. Durante el último año, ¿usted o algún miembro de su hogar -núcleo familiar- ha sido víctima de alguno de los siguientes delitos? Conflicto armado"];
      mkChart('c-del','bar',delLabs,[{label:'% afectados',data:delCols.map(c=>n?Math.round(data.filter(r=>r[c]===1).length/n*100):0),backgroundColor:'#ef4444',borderRadius:5,borderWidth:0}],{indexAxis:'y'});
    }
  }

  registerSection(new SeguridadSection());
})();
