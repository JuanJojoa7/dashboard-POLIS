(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, freq, mkChart, CC } = Dashboard;

  class ConfianzaInstSection extends BaseSection {
    constructor(){
      super('confi-inst', 'Confianza en Instituciones');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","Concejo Municipal INS1":7,"Policía INS1":7,"Funcionarios públicos INS1":7,"Gobierno Nacional INS1":0,"Gobierno local INS1":8,"Rama judicial INS1":2,"Gobierno nacional INS2":0,"Gobierno local INS2":7},
        {"Codigo":"E-0002","Concejo Municipal INS1":2,"Policía INS1":2,"Funcionarios públicos INS1":2,"Gobierno Nacional INS1":4,"Gobierno local INS1":3,"Rama judicial INS1":5,"Gobierno nacional INS2":2,"Gobierno local INS2":2},
        {"Codigo":"E-0003","Concejo Municipal INS1":1,"Policía INS1":7,"Funcionarios públicos INS1":1,"Gobierno Nacional INS1":7,"Gobierno local INS1":1,"Rama judicial INS1":5,"Gobierno nacional INS2":7,"Gobierno local INS2":1},
        {"Codigo":"E-0004","Concejo Municipal INS1":0,"Policía INS1":5,"Funcionarios públicos INS1":0,"Gobierno Nacional INS1":0,"Gobierno local INS1":0,"Rama judicial INS1":0,"Gobierno nacional INS2":1,"Gobierno local INS2":0},
        {"Codigo":"E-0005","Concejo Municipal INS1":0,"Policía INS1":0,"Funcionarios públicos INS1":0,"Gobierno Nacional INS1":0,"Gobierno local INS1":0,"Rama judicial INS1":0,"Gobierno nacional INS2":0,"Gobierno local INS2":0},
        {"Codigo":"E-0006","Concejo Municipal INS1":99,"Policía INS1":3,"Funcionarios públicos INS1":3,"Gobierno Nacional INS1":1,"Gobierno local INS1":1,"Rama judicial INS1":1,"Gobierno nacional INS2":5,"Gobierno local INS2":99},
        {"Codigo":"E-0007","Concejo Municipal INS1":0,"Policía INS1":0,"Funcionarios públicos INS1":0,"Gobierno Nacional INS1":4,"Gobierno local INS1":0,"Rama judicial INS1":0,"Gobierno nacional INS2":2,"Gobierno local INS2":0},
        {"Codigo":"E-0008","Concejo Municipal INS1":99,"Policía INS1":4,"Funcionarios públicos INS1":99,"Gobierno Nacional INS1":9,"Gobierno local INS1":99,"Rama judicial INS1":99,"Gobierno nacional INS2":8,"Gobierno local INS2":99},
        {"Codigo":"E-0009","Concejo Municipal INS1":8,"Policía INS1":5,"Funcionarios públicos INS1":0,"Gobierno Nacional INS1":9,"Gobierno local INS1":0,"Rama judicial INS1":5,"Gobierno nacional INS2":8,"Gobierno local INS2":8},
        {"Codigo":"E-0010","Concejo Municipal INS1":0,"Policía INS1":7,"Funcionarios públicos INS1":2,"Gobierno Nacional INS1":0,"Gobierno local INS1":5,"Rama judicial INS1":5,"Gobierno nacional INS2":8,"Gobierno local INS2":8},
        {"Codigo":"E-0011","Concejo Municipal INS1":3,"Policía INS1":3,"Funcionarios públicos INS1":2,"Gobierno Nacional INS1":3,"Gobierno local INS1":3,"Rama judicial INS1":3,"Gobierno nacional INS2":5,"Gobierno local INS2":3},
        {"Codigo":"E-0012","Concejo Municipal INS1":99,"Policía INS1":4,"Funcionarios públicos INS1":4,"Gobierno Nacional INS1":7,"Gobierno local INS1":2,"Rama judicial INS1":5,"Gobierno nacional INS2":8,"Gobierno local INS2":8},
        {"Codigo":"E-0013","Concejo Municipal INS1":4,"Policía INS1":7,"Funcionarios públicos INS1":6,"Gobierno Nacional INS1":7,"Gobierno local INS1":4,"Rama judicial INS1":8,"Gobierno nacional INS2":7,"Gobierno local INS2":4},
        {"Codigo":"E-0014","Concejo Municipal INS1":99,"Policía INS1":5,"Funcionarios públicos INS1":5,"Gobierno Nacional INS1":2,"Gobierno local INS1":4,"Rama judicial INS1":99,"Gobierno nacional INS2":4,"Gobierno local INS2":99},
        {"Codigo":"E-0015","Concejo Municipal INS1":99,"Policía INS1":0,"Funcionarios públicos INS1":2,"Gobierno Nacional INS1":99,"Gobierno local INS1":99,"Rama judicial INS1":99,"Gobierno nacional INS2":6,"Gobierno local INS2":99},
        {"Codigo":"E-0016","Concejo Municipal INS1":0,"Policía INS1":0,"Funcionarios públicos INS1":0,"Gobierno Nacional INS1":6,"Gobierno local INS1":0,"Rama judicial INS1":0,"Gobierno nacional INS2":6,"Gobierno local INS2":0},
        {"Codigo":"E-0017","Concejo Municipal INS1":4,"Policía INS1":5,"Funcionarios públicos INS1":3,"Gobierno Nacional INS1":6,"Gobierno local INS1":7,"Rama judicial INS1":4,"Gobierno nacional INS2":3,"Gobierno local INS2":4},
        {"Codigo":"E-0018","Concejo Municipal INS1":99,"Policía INS1":4,"Funcionarios públicos INS1":4,"Gobierno Nacional INS1":7,"Gobierno local INS1":2,"Rama judicial INS1":4,"Gobierno nacional INS2":8,"Gobierno local INS2":8}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-confi-inst">
  <div class="sech"><h2>🏛️ Confianza en Instituciones</h2><p>Percepción ciudadana sobre distintas entidades y transparencia gubernamental</p></div>
  <div class="card"><div class="ct">Confianza promedio en las siguientes instituciones (escala 0-10)</div><div class="cw t"><canvas id="c-confianza-ins1"></canvas></div></div>
  <div class="card"><div class="ct">Percepción promedio de la transparencia en el gobierno local y nacional</div><div class="cw t"><canvas id="c-transparencia-ins2"></canvas></div></div>
</div>`;
    }

    render(data, n){
      // Función para limpiar números (99 = NA)
      const num = v => (v === 99 || v === null || v === undefined || v === 'NA' || v === '') ? null : +v;
      const avgArr = arr => { const valid = arr.filter(x => x !== null && !isNaN(x)); return valid.length ? (valid.reduce((a,b) => a+b, 0) / valid.length).toFixed(1) : '—'; };

      // INS1: 6 variables
      const ins1Vars = [
        "Concejo Municipal INS1",
        "Policía INS1",
        "Funcionarios públicos INS1",
        "Gobierno Nacional INS1",
        "Gobierno local INS1",
        "Rama judicial INS1"
      ];
      const ins1Labels = [
        "Concejo Municipal",
        "Policía",
        "Funcionarios públicos",
        "Gobierno Nacional",
        "Gobierno local",
        "Rama judicial"
      ];
      const ins1Proms = ins1Vars.map(v => avgArr(data.map(r => num(r[v]))));
      
      mkChart('c-confianza-ins1', 'bar', ins1Labels, [{
        label: 'Promedio (0-10)',
        data: ins1Proms,
        backgroundColor: '#3b82f6',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y', legend: { display: true, position: 'top' } });

      // INS2: 2 variables
      const ins2Vars = [
        "Gobierno nacional INS2",
        "Gobierno local INS2"
      ];
      const ins2Labels = [
        "Gobierno Nacional",
        "Gobierno local"
      ];
      const ins2Proms = ins2Vars.map(v => avgArr(data.map(r => num(r[v]))));
      
      mkChart('c-transparencia-ins2', 'bar', ins2Labels, [{
        label: 'Promedio (escala 0-10)',
        data: ins2Proms,
        backgroundColor: '#f59e0b',
        borderRadius: 5,
        borderWidth: 0
      }], { indexAxis: 'y', legend: { display: true, position: 'top' } });
    }
  }

  registerSection(new ConfianzaInstSection());
})();