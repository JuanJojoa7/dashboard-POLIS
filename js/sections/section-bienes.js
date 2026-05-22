(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, freq, mkChart, CC } = Dashboard;

  class BienesSection extends BaseSection {
    constructor(){
      super('bienes','Bienes');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"No","Vivienda":"No","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"Sí","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0002","TipoVivienda":"Propia pagando","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"No","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"No","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0003","TipoVivienda":"Familiar","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"Sí","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"No","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0004","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"Sí","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"No","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0005","TipoVivienda":"Propia pagando","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"Sí","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0006","TipoVivienda":"Propia pagando","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"Sí","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0007","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"No","Moto":"Sí","Vivienda":"No","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0008","TipoVivienda":"Propia pagada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"NA","Moto":"NA","Vivienda":"NA","Electrodomesticos":"NA","Computador":"NA","Tableta":"NA","CelularInteligente":"NA","TvInteligente":"NA","Consola":"NA","AsistenteVirtual":"NA","RelojInteligente":"NA","LectorLibros":"NA"},
        {"Codigo":"E-0009","TipoVivienda":"Propia pagada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"No","Moto":"No","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"No","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0010","TipoVivienda":"Propia pagada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"Sí","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0011","TipoVivienda":"Propia pagada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"No","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"Sí","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0012","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"No","Moto":"No","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0013","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"No","Vivienda":"NA","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0014","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"No","Moto":"No","Vivienda":"No","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"No","CelularInteligente":"Sí","TvInteligente":"No","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0015","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"No","Moto":"Sí","Vivienda":"No","Electrodomesticos":"No","Computador":"No","Tableta":"No","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"Sí","AsistenteVirtual":"Sí","RelojInteligente":"No","LectorLibros":"No"},
        {"Codigo":"E-0016","TipoVivienda":"Propia pagando","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"nan","Moto":"No","Vivienda":"No","Electrodomesticos":"No","Computador":"No","Tableta":"No","CelularInteligente":"No","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"Sí"},
        {"Codigo":"E-0017","TipoVivienda":"Familiar","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"Sí","Moto":"Sí","Vivienda":"Sí","Electrodomesticos":"Sí","Computador":"Sí","Tableta":"Sí","CelularInteligente":"Sí","TvInteligente":"Sí","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"Sí","LectorLibros":"No"},
        {"Codigo":"E-0018","TipoVivienda":"Arrendada","Agua":"Sí","Gas":"Sí","Electricidad":"Sí","Internet":"Sí","Carro":"No","Moto":"No","Vivienda":"No","Electrodomesticos":"No","Computador":"Sí","Tableta":"No","CelularInteligente":"Sí","TvInteligente":"No","Consola":"No","AsistenteVirtual":"No","RelojInteligente":"No","LectorLibros":"No"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-bienes">
  <div class="sech"><h2>📱 Bienes</h2><p>Activos del hogar y acceso a servicios públicos</p></div>
  <div class="g1"><div class="card"><div class="ct">Tipo de vivienda</div><div class="cw"><canvas id="c-vivienda"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Acceso a servicios públicos</div><div class="cw"><canvas id="c-servicios"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Acceso a los siguientes bienes/activos</div><div class="cw"><canvas id="c-bienes-activos"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      // Gráfico 1: Tipo de vivienda (doughnut)
      const viviendaFm = freq(data, "TipoVivienda", []);
      const viviendaK = Object.keys(viviendaFm).sort();
      mkChart('c-vivienda', 'doughnut', viviendaK, [{data: viviendaK.map(k=>viviendaFm[k]), backgroundColor: CC, borderWidth: 0}], {legend: true});

      // Gráfico 2: Servicios públicos (barras, contar "Sí")
      const agua = data.filter(r => r["Agua"] === "Sí").length;
      const gas = data.filter(r => r["Gas"] === "Sí").length;
      const electricidad = data.filter(r => r["Electricidad"] === "Sí").length;
      const internet = data.filter(r => r["Internet"] === "Sí").length;
      mkChart('c-servicios', 'bar', ['Agua','Gas','Electricidad','Internet'],
        [{label: 'Personas', data: [agua, gas, electricidad, internet], backgroundColor: ['#6366f1','#10b981','#f59e0b','#06b6d4'], borderRadius: 5, borderWidth: 0}],
        {ys: {max: 18}});

      // Gráfico 3: Bienes/activos (barras, contar "Sí")
      const carro = data.filter(r => r["Carro"] === "Sí").length;
      const moto = data.filter(r => r["Moto"] === "Sí").length;
      const viviendaDU2 = data.filter(r => r["Vivienda"] === "Sí").length;
      const electrodomesticos = data.filter(r => r["Electrodomesticos"] === "Sí").length;
      const computador = data.filter(r => r["Computador"] === "Sí").length;
      const tableta = data.filter(r => r["Tableta"] === "Sí").length;
      const celularInteligente = data.filter(r => r["CelularInteligente"] === "Sí").length;
      const tvInteligente = data.filter(r => r["TvInteligente"] === "Sí").length;
      const consola = data.filter(r => r["Consola"] === "Sí").length;
      const asistenteVirtual = data.filter(r => r["AsistenteVirtual"] === "Sí").length;
      const relojInteligente = data.filter(r => r["RelojInteligente"] === "Sí").length;
      const lectorLibros = data.filter(r => r["LectorLibros"] === "Sí").length;

      mkChart('c-bienes-activos', 'bar', ['Carro','Moto','Vivienda','Electrodomésticos','Computador','Tableta','Celular inteligente','Tv inteligente','Consola videojuegos','Asistente virtual','Reloj inteligente','Lectores electrónicos'],
        [{label: 'Personas', data: [carro, moto, viviendaDU2, electrodomesticos, computador, tableta, celularInteligente, tvInteligente, consola, asistenteVirtual, relojInteligente, lectorLibros], backgroundColor: CC, borderRadius: 5, borderWidth: 0}],
        {indexAxis: 'y'});
    }
  }

  registerSection(new BienesSection());
})();
