(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, set, avg, freq, mkChart, CC } = Dashboard;

  class ParticipacionSection extends BaseSection {
    constructor(){
      super('participacion', 'Participación Ciudadana');
      this.filterSource = false;
      this.filterKey = 'Codigo';
      this.data = [
        {"Codigo":"E-0001","Votó":"Sí","Interés en temas políticos":10,"Manifestación política":"Sí","Pertenece partido":"No","Firmó peticiones":"Sí","Participa sindical":"No"},
        {"Codigo":"E-0002","Votó":"Sí","Interés en temas políticos":10,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"Sí","Participa sindical":"No"},
        {"Codigo":"E-0003","Votó":"Sí","Interés en temas políticos":10,"Manifestación política":"No","Pertenece partido":"Sí","Firmó peticiones":"Sí","Participa sindical":"No"},
        {"Codigo":"E-0004","Votó":"Sí","Interés en temas políticos":0,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0005","Votó":"Sí","Interés en temas políticos":0,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0006","Votó":"Sí","Interés en temas políticos":8,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0007","Votó":"Sí","Interés en temas políticos":5,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0008","Votó":"Sí","Interés en temas políticos":5,"Manifestación política":"No","Pertenece partido":"Sí","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0009","Votó":"Sí","Interés en temas políticos":5,"Manifestación política":"No","Pertenece partido":"Sí","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0010","Votó":"Sí","Interés en temas políticos":9,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0011","Votó":"No","Interés en temas políticos":5,"Manifestación política":"Sí","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0012","Votó":"Sí","Interés en temas políticos":8,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0013","Votó":"No","Interés en temas políticos":9,"Manifestación política":"Sí","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0014","Votó":"No","Interés en temas políticos":0,"Manifestación política":"Sí","Pertenece partido":"No","Firmó peticiones":"Sí","Participa sindical":"No"},
        {"Codigo":"E-0015","Votó":"No","Interés en temas políticos":3,"Manifestación política":"No","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0016","Votó":"Sí","Interés en temas políticos":3,"Manifestación política":"Sí","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0017","Votó":"Sí","Interés en temas políticos":6,"Manifestación política":"Sí","Pertenece partido":"No","Firmó peticiones":"No","Participa sindical":"No"},
        {"Codigo":"E-0018","Votó":"Sí","Interés en temas políticos":10,"Manifestación política":"Sí","Pertenece partido":"Sí","Firmó peticiones":"No","Participa sindical":"No"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-participacion">
  <div class="sech"><h2>🗳️ Participación Ciudadana</h2><p>Votación, interés político, manifestaciones y otras formas de participación</p></div>
  <div class="g3">
    <div class="kpi"><div class="v" id="par-interes">—</div><div class="l">Interés promedio en temas políticos</div></div>
  </div>
  <div class="g3">
    <div class="card"><div class="ct">¿Usted votó en las pasadas elecciones?</div><div class="cw"><canvas id="c-voto"></canvas></div></div>
    <div class="card"><div class="ct">Usted pertenece a algún partido político</div><div class="cw"><canvas id="c-partido"></canvas></div></div>
    <div class="card"><div class="ct">Usted participa en actividades sindicales</div><div class="cw"><canvas id="c-sindical"></canvas></div></div>
  </div>
  <div class="g2">
    <div class="card"><div class="ct">Usted ha participado en alguna manifestación política</div><div class="cw"><canvas id="c-manifestacion"></canvas></div></div>
    <div class="card"><div class="ct">Usted ha firmado peticiones</div><div class="cw"><canvas id="c-peticiones"></canvas></div></div>
  </div>
</div>`;
    }

    render(data, n){
      // Interés promedio en temas políticos
      const num = v => (v === null || v === undefined || v === 'NA') ? null : +v;
      const intereses = data.map(r => num(r["Interés en temas políticos"])).filter(v => v !== null);
      const promedio = intereses.length ? (intereses.reduce((a,b) => a+b, 0) / intereses.length).toFixed(1) : '—';
      set('par-interes', promedio);

      // Votó
      const votoFreq = freq(data, "Votó");
      const votoKeys = Object.keys(votoFreq);
      mkChart('c-voto', 'doughnut', votoKeys, [{
        data: votoKeys.map(k => votoFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Partido político
      const partidoFreq = freq(data, "Pertenece partido");
      const partidoKeys = Object.keys(partidoFreq);
      mkChart('c-partido', 'doughnut', partidoKeys, [{
        data: partidoKeys.map(k => partidoFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Actividades sindicales
      const sindicalFreq = freq(data, "Participa sindical");
      const sindicalKeys = Object.keys(sindicalFreq);
      mkChart('c-sindical', 'doughnut', sindicalKeys, [{
        data: sindicalKeys.map(k => sindicalFreq[k]),
        backgroundColor: CC,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Manifestación política
      const manifFreq = freq(data, "Manifestación política");
      const manifKeys = Object.keys(manifFreq);
      mkChart('c-manifestacion', 'bar', manifKeys, [{
        label: 'Personas',
        data: manifKeys.map(k => manifFreq[k]),
        backgroundColor: '#f97316',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });

      // Firmó peticiones
      const peticionFreq = freq(data, "Firmó peticiones");
      const peticionKeys = Object.keys(peticionFreq);
      mkChart('c-peticiones', 'bar', peticionKeys, [{
        label: 'Personas',
        data: peticionKeys.map(k => peticionFreq[k]),
        backgroundColor: '#10b981',
        borderRadius: 5,
        borderWidth: 0
      }], { legend: { display: true, position: 'top' } });
    }
  }

  registerSection(new ParticipacionSection());
})();