(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, nv, pct, freq, mkChart, CC } = Dashboard;

  class HogarSection extends BaseSection {
    constructor(){
      super('hogar','Hogar');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-hogar">
  <div class="sech"><h2>&#x1F3E0; Caracter&iacute;sticas del Hogar</h2><p>Composici&oacute;n, vivienda y acceso a servicios p&uacute;blicos</p></div>
  <div class="g4"><div class="kpi"><div class="v" id="hg-per">&mdash;</div><div class="l">Personas por hogar</div></div><div class="kpi g"><div class="v" id="hg-emp">&mdash;</div><div class="l">Con empleo en hogar</div></div><div class="kpi y"><div class="v" id="hg-svp">&mdash;</div><div class="l">Acceso pleno servicios</div></div><div class="kpi c"><div class="v" id="hg-hijos">&mdash;</div><div class="l">Tienen hijos</div></div></div>
  <div class="g3"><div class="card"><div class="ct">Tipo de vivienda (P69)</div><div class="cw"><canvas id="c-viv"></canvas></div></div><div class="card"><div class="ct">Acceso a servicios p&uacute;blicos % (P71)</div><div class="cw"><canvas id="c-serv"></canvas></div></div><div class="card"><div class="ct">Mascotas en el hogar (P43)</div><div class="cw"><canvas id="c-masc"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      set('hg-per',avg(nv(data,"39. Incluyéndolo a usted, ¿cuántas personas viven en su hogar? (No puede tomar el valor de cero)")));
      set('hg-emp',avg(nv(data,"41. Incluyéndose, ¿en su hogar, cuántas personas tienen empleo?")));
      const svpN=data.filter(r=>["71.1 ¿A cuál de los siguientes servicios públicos tiene acceso?: Agua","71.2 ¿A cuál de los siguientes servicios públicos tiene acceso?: GAS","71.3 ¿A cuál de los siguientes servicios públicos tiene acceso?: ELECTRICIDAD/LUZ","71.4 ¿A cuál de los siguientes servicios públicos tiene acceso?: INTERNET"].every(c=>r[c]===1)).length;
      set('hg-svp',pct(svpN,n));
      set('hg-hijos',pct(data.filter(r=>r["38. ¿Usted tiene hijos?"]===1).length,n));
      const vivMap={'1':'Casa','2':'Apartamento','3':'Cuarto','4':'Otro'};
      const vivFm=freq(data,"69. Su tipo de vivienda es:");
      const vivK=Object.keys(vivFm).sort();
      mkChart('c-viv','doughnut',vivK.map(k=>vivMap[k]||k),[{data:vivK.map(k=>vivFm[k]),backgroundColor:CC,borderWidth:0}],{legend:true});
      mkChart('c-serv','bar',['Agua','Gas','Electricidad','Internet'],
        [{label:'% con acceso',data:["71.1 ¿A cuál de los siguientes servicios públicos tiene acceso?: Agua","71.2 ¿A cuál de los siguientes servicios públicos tiene acceso?: GAS","71.3 ¿A cuál de los siguientes servicios públicos tiene acceso?: ELECTRICIDAD/LUZ","71.4 ¿A cuál de los siguientes servicios públicos tiene acceso?: INTERNET"].map(c=>n?Math.round(data.filter(r=>r[c]===1).length/n*100):0),backgroundColor:['#06b6d4','#f59e0b','#10b981','#6366f1'],borderRadius:5,borderWidth:0}]);
      mkChart('c-masc','doughnut',['Perros','Gatos','Otro'],
        [{data:["43.1. En su hogar, ¿hay mascota (s)?: Perros","43.2. En su hogar, ¿hay mascota (s)?: Gatos","43.3. En su hogar, ¿hay mascota(s)?: Otro"].map(c=>data.filter(r=>r[c]===1).length),backgroundColor:['#f59e0b','#8b5cf6','#06b6d4'],borderWidth:0}],{legend:true});
    }
  }

  registerSection(new HogarSection());
})();
