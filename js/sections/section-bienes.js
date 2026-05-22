(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, mkChart } = Dashboard;

  class BienesSection extends BaseSection {
    constructor(){
      super('bienes','Bienes Durables');
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-bienes">
  <div class="sech"><h2>&#x1F4F1; Bienes Durables</h2><p>Activos del hogar y dispositivos tecnol&oacute;gicos</p></div>
  <div class="card"><div class="ct">% de hogares con cada bien o activo (P72)</div><div class="cw xl"><canvas id="c-bienes"></canvas></div></div>
</div>`;
    }

    render(data,n){
      const bienLabs=['Carro','Moto','Vivienda propia','Electrodomésticos','Computador','Tableta','Celular inteligente','TV inteligente','Consola videojuegos','Asistente virtual','Reloj inteligente','Lector libros'];
      const bienCols=["72.1. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? CARRO","72.2. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? MOTO","72.3. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? VIVIENDA","72.4. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? ELECTRODOMÉSTICO","72.5. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? COMPUTADOR","72.6. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? TABLETA","72.7. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? CELULAR INTELIGENTE","72.8. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? TV INTELIGENTE","72.9. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? CONSOLA VIDEOJUEGOS","72.10. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? ASISTENTE VIRTUAL","72.11. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? RELOJ INTELIGENTE","72.12. ¿Cuáles de los siguientes activos/bienes tiene en su hogar? LECTORES DE LIBROS ELECTRÓNICOS"];
      const bienV=bienCols.map(c=>n?Math.round(data.filter(r=>r[c]===1).length/n*100):0);
      mkChart('c-bienes','bar',bienLabs,[{label:'% hogares',data:bienV,backgroundColor:bienV.map(v=>v>=70?'#10b981':v>=40?'#f59e0b':'#6366f1'),borderRadius:5,borderWidth:0}],{indexAxis:'y'});
    }
  }

  registerSection(new BienesSection());
})();
