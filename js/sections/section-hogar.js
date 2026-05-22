(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, freq, mkChart, CC } = Dashboard;

  class HogarSection extends BaseSection {
    constructor(){
      super('hogar','Hogar');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Doctorado","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":0,"Mascota":"No"},
        {"Codigo":"E-0002","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Casado/a","NSE":5,"Educacion":"Maestría","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":3,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":1,"Mascota":"No"},
        {"Codigo":"E-0003","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":2,"Educacion":"Técnico/Tecnológico","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":4,"PersonasEdadTrabajo":3,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":1,"Mascota":"Sí"},
        {"Codigo":"E-0004","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":1,"Educacion":"Técnico/Tecnológico","Proveedor":"Sí","TieneHijos":"Sí","NumHijos":2,"PersonasHogar":5,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":0,"Mascota":"Sí"},
        {"Codigo":"E-0005","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Universitario","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":0,"Mascota":"Sí"},
        {"Codigo":"E-0006","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":1,"PersonasEdadTrabajo":1,"PersonasEmpleadas":1,"PersonasBuscandoEmpleo":0,"Mascota":"Sí"},
        {"Codigo":"E-0007","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Universitario","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":3,"PersonasEdadTrabajo":3,"PersonasEmpleadas":3,"PersonasBuscandoEmpleo":0,"Mascota":"Sí"},
        {"Codigo":"E-0008","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","Proveedor":"No","TieneHijos":"Sí","NumHijos":2,"PersonasHogar":4,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":2,"Mascota":"Sí"},
        {"Codigo":"E-0009","Sexo":"Hombre","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":2,"Educacion":"Bachillerato/Secundaria","Proveedor":"Sí","TieneHijos":"Sí","NumHijos":2,"PersonasHogar":3,"PersonasEdadTrabajo":2,"PersonasEmpleadas":1,"PersonasBuscandoEmpleo":1,"Mascota":"Sí"},
        {"Codigo":"E-0010","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":6,"Educacion":"Especialización","Proveedor":"Sí","TieneHijos":"Sí","NumHijos":2,"PersonasHogar":4,"PersonasEdadTrabajo":3,"PersonasEmpleadas":4,"PersonasBuscandoEmpleo":0,"Mascota":"No"},
        {"Codigo":"E-0011","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"NA","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":0,"Mascota":"No"},
        {"Codigo":"E-0012","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":1,"PersonasBuscandoEmpleo":2,"Mascota":"No"},
        {"Codigo":"E-0013","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Bachillerato/Secundaria","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":2,"Mascota":"No"},
        {"Codigo":"E-0014","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":1,"Mascota":"No"},
        {"Codigo":"E-0015","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":5,"Educacion":"NA","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":1,"PersonasEdadTrabajo":1,"PersonasEmpleadas":1,"PersonasBuscandoEmpleo":0,"Mascota":"No"},
        {"Codigo":"E-0016","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","Proveedor":"No","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":0,"Mascota":"No"},
        {"Codigo":"E-0017","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":2,"PersonasEdadTrabajo":2,"PersonasEmpleadas":2,"PersonasBuscandoEmpleo":0,"Mascota":"Sí"},
        {"Codigo":"E-0018","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":1,"Educacion":"Bachillerato/Secundaria","Proveedor":"Sí","TieneHijos":"No","NumHijos":98,"PersonasHogar":1,"PersonasEdadTrabajo":1,"PersonasEmpleadas":1,"PersonasBuscandoEmpleo":0,"Mascota":"No"}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-hogar">
  <div class="sech"><h2>&#x1F3E0; Hogar</h2><p>Composición y características de los hogares</p></div>
  <div class="g1"><div class="card"><div class="ct">Composición del hogar</div><div class="cw"><canvas id="c-composicion"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Características en promedio de los habitantes del hogar</div><div class="cw"><canvas id="c-caracteristicas"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      // HO1: Gráfico de barras - frecuencia de "Sí"
      const proveedorSi = data.filter(r => r["Proveedor"] === "Sí").length;
      const hijosSi = data.filter(r => r["TieneHijos"] === "Sí").length;
      const mascotaSi = data.filter(r => r["Mascota"] === "Sí").length;

      mkChart('c-composicion', 'bar', ['Proveedor económico', 'Tenencia de hijos', 'Tenencia de mascota'],
        [{label: 'Cantidad', data: [proveedorSi, hijosSi, mascotaSi], backgroundColor: ['#6366f1', '#10b981', '#f59e0b'], borderRadius: 5, borderWidth: 0}],
        {ys: {max: 12}});

      // HO2: Gráfico de barras - promedios
      const numHijosVals = data
        .map(r => r["NumHijos"])
        .filter(v => v !== 98 && v !== null && v !== undefined && !isNaN(v))
        .map(Number);
      const numHijosProm = numHijosVals.length
        ? (numHijosVals.reduce((a,b)=>a+b,0)/numHijosVals.length).toFixed(1)
        : 0;

      const personasHogarVals = data.map(r => +r["PersonasHogar"]);
      const personasHogarProm = personasHogarVals.length
        ? (personasHogarVals.reduce((a,b)=>a+b,0)/personasHogarVals.length).toFixed(1)
        : 0;

      const personasEdadVals = data.map(r => +r["PersonasEdadTrabajo"]);
      const personasEdadProm = personasEdadVals.length
        ? (personasEdadVals.reduce((a,b)=>a+b,0)/personasEdadVals.length).toFixed(1)
        : 0;

      const personasEmpleadasVals = data.map(r => +r["PersonasEmpleadas"]);
      const personasEmpleadasProm = personasEmpleadasVals.length
        ? (personasEmpleadasVals.reduce((a,b)=>a+b,0)/personasEmpleadasVals.length).toFixed(1)
        : 0;

      const personasBuscandoVals = data.map(r => +r["PersonasBuscandoEmpleo"]);
      const personasBuscandoProm = personasBuscandoVals.length
        ? (personasBuscandoVals.reduce((a,b)=>a+b,0)/personasBuscandoVals.length).toFixed(1)
        : 0;

      mkChart('c-caracteristicas', 'bar',
        ['Número de hijos', 'Personas en hogar', 'En edad de trabajar', 'Empleadas', 'Buscando empleo'],
        [{label: 'Promedio', data: [+numHijosProm, +personasHogarProm, +personasEdadProm, +personasEmpleadasProm, +personasBuscandoProm],
          backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#06b6d4', '#ef4444'], borderRadius: 5, borderWidth: 0}],
        {ys: {max: 3}});
    }
  }

  registerSection(new HogarSection());
})();
