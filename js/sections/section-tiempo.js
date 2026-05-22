(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, mkChart, CC } = Dashboard;

  class TiempoSection extends BaseSection {
    constructor(){
      super('tiempo','Uso del tiempo');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Doctorado","TrabajarTI1":16,"EstudiarTI1":1,"AsearseVestirse":1,"ComerTI1":3,"LimpiarVivienda":1,"CuidarOtros":1,"CocinarTI1":2,"CuidadoMascotas":1,"ActividadesSociales":1,"ActividadesOcio":1,"VerRedesSociales":2,"LeerLibros":0.5,"UsoInternet":2,"ActividadesFisicas":1,"DormirTI1":8,"ObligacionesDiarias":10,"HacerCosasImportantes":10,"ControlTiempo":9,"TiempoDescanso":9},
        {"Codigo":"E-0002","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Casado/a","NSE":5,"Educacion":"Maestría","TrabajarTI1":9,"EstudiarTI1":2,"AsearseVestirse":1,"ComerTI1":2,"LimpiarVivienda":3,"CuidarOtros":4,"CocinarTI1":2,"CuidadoMascotas":0,"ActividadesSociales":2,"ActividadesOcio":2,"VerRedesSociales":3,"LeerLibros":3,"UsoInternet":2,"ActividadesFisicas":1,"DormirTI1":7,"ObligacionesDiarias":2,"HacerCosasImportantes":3,"ControlTiempo":2,"TiempoDescanso":4},
        {"Codigo":"E-0003","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":2,"Educacion":"Técnico/Tecnológico","TrabajarTI1":8,"EstudiarTI1":0,"AsearseVestirse":1,"ComerTI1":0.75,"LimpiarVivienda":2,"CuidarOtros":0,"CocinarTI1":0.5,"CuidadoMascotas":0.0833,"ActividadesSociales":0.5,"ActividadesOcio":3,"VerRedesSociales":2,"LeerLibros":0.5,"UsoInternet":2,"ActividadesFisicas":0,"DormirTI1":9,"ObligacionesDiarias":8,"HacerCosasImportantes":8,"ControlTiempo":4,"TiempoDescanso":9},
        {"Codigo":"E-0004","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":1,"Educacion":"Técnico/Tecnológico","TrabajarTI1":6,"EstudiarTI1":0,"AsearseVestirse":0.25,"ComerTI1":0.5,"LimpiarVivienda":2,"CuidarOtros":5,"CocinarTI1":2,"CuidadoMascotas":0.1667,"ActividadesSociales":0.5,"ActividadesOcio":2,"VerRedesSociales":1,"LeerLibros":0,"UsoInternet":6,"ActividadesFisicas":0,"DormirTI1":8,"ObligacionesDiarias":8,"HacerCosasImportantes":10,"ControlTiempo":9,"TiempoDescanso":8},
        {"Codigo":"E-0005","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Universitario","TrabajarTI1":8,"EstudiarTI1":1,"AsearseVestirse":2,"ComerTI1":2,"LimpiarVivienda":4,"CuidarOtros":2,"CocinarTI1":3,"CuidadoMascotas":3,"ActividadesSociales":1,"ActividadesOcio":3,"VerRedesSociales":2,"LeerLibros":1,"UsoInternet":3,"ActividadesFisicas":1,"DormirTI1":7,"ObligacionesDiarias":8,"HacerCosasImportantes":8,"ControlTiempo":8,"TiempoDescanso":8},
        {"Codigo":"E-0006","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","TrabajarTI1":8,"EstudiarTI1":1,"AsearseVestirse":1,"ComerTI1":3,"LimpiarVivienda":1,"CuidarOtros":0,"CocinarTI1":2,"CuidadoMascotas":1,"ActividadesSociales":1,"ActividadesOcio":0.5,"VerRedesSociales":0.5,"LeerLibros":0.5,"UsoInternet":0.5,"ActividadesFisicas":1,"DormirTI1":7,"ObligacionesDiarias":8,"HacerCosasImportantes":8,"ControlTiempo":7,"TiempoDescanso":7},
        {"Codigo":"E-0007","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Universitario","TrabajarTI1":8,"EstudiarTI1":3,"AsearseVestirse":0.5,"ComerTI1":1,"LimpiarVivienda":1,"CuidarOtros":0,"CocinarTI1":3,"CuidadoMascotas":0,"ActividadesSociales":1,"ActividadesOcio":1.5,"VerRedesSociales":0.5,"LeerLibros":2,"UsoInternet":2,"ActividadesFisicas":1.5,"DormirTI1":6,"ObligacionesDiarias":5,"HacerCosasImportantes":5,"ControlTiempo":5,"TiempoDescanso":3},
        {"Codigo":"E-0008","Sexo":"Mujer","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":3,"Educacion":"Técnico/Tecnológico","TrabajarTI1":8,"EstudiarTI1":null,"AsearseVestirse":2,"ComerTI1":2,"LimpiarVivienda":6,"CuidarOtros":null,"CocinarTI1":2,"CuidadoMascotas":2,"ActividadesSociales":null,"ActividadesOcio":3,"VerRedesSociales":null,"LeerLibros":null,"UsoInternet":3,"ActividadesFisicas":null,"DormirTI1":7,"ObligacionesDiarias":7,"HacerCosasImportantes":5,"ControlTiempo":8,"TiempoDescanso":5},
        {"Codigo":"E-0009","Sexo":"Hombre","Etnia":"Afrocolombiano","EstadoCivil":"Unión libre","NSE":2,"Educacion":"Bachillerato/Secundaria","TrabajarTI1":8,"EstudiarTI1":null,"AsearseVestirse":1,"ComerTI1":0.5,"LimpiarVivienda":2,"CuidarOtros":null,"CocinarTI1":null,"CuidadoMascotas":3,"ActividadesSociales":null,"ActividadesOcio":2,"VerRedesSociales":2,"LeerLibros":null,"UsoInternet":null,"ActividadesFisicas":null,"DormirTI1":7,"ObligacionesDiarias":10,"HacerCosasImportantes":9,"ControlTiempo":8,"TiempoDescanso":7},
        {"Codigo":"E-0010","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Unión libre","NSE":6,"Educacion":"Especialización","TrabajarTI1":5,"EstudiarTI1":2,"AsearseVestirse":1,"ComerTI1":2,"LimpiarVivienda":0.5,"CuidarOtros":0.5,"CocinarTI1":0.3333,"CuidadoMascotas":98,"ActividadesSociales":0.3333,"ActividadesOcio":3,"VerRedesSociales":0.1667,"LeerLibros":2,"UsoInternet":3,"ActividadesFisicas":0.25,"DormirTI1":6,"ObligacionesDiarias":10,"HacerCosasImportantes":10,"ControlTiempo":10,"TiempoDescanso":10},
        {"Codigo":"E-0011","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"NA","TrabajarTI1":8,"EstudiarTI1":4,"AsearseVestirse":2,"ComerTI1":2,"LimpiarVivienda":1,"CuidarOtros":null,"CocinarTI1":2,"CuidadoMascotas":2,"ActividadesSociales":1,"ActividadesOcio":1,"VerRedesSociales":1,"LeerLibros":1,"UsoInternet":null,"ActividadesFisicas":null,"DormirTI1":8,"ObligacionesDiarias":10,"HacerCosasImportantes":10,"ControlTiempo":7,"TiempoDescanso":8},
        {"Codigo":"E-0012","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","TrabajarTI1":null,"EstudiarTI1":4,"AsearseVestirse":1,"ComerTI1":2,"LimpiarVivienda":2,"CuidarOtros":null,"CocinarTI1":null,"CuidadoMascotas":null,"ActividadesSociales":2,"ActividadesOcio":3,"VerRedesSociales":1,"LeerLibros":0.75,"UsoInternet":1,"ActividadesFisicas":null,"DormirTI1":7,"ObligacionesDiarias":8,"HacerCosasImportantes":7,"ControlTiempo":3,"TiempoDescanso":7},
        {"Codigo":"E-0013","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":4,"Educacion":"Bachillerato/Secundaria","TrabajarTI1":7,"EstudiarTI1":7,"AsearseVestirse":1,"ComerTI1":1,"LimpiarVivienda":1,"CuidarOtros":null,"CocinarTI1":1,"CuidadoMascotas":null,"ActividadesSociales":2,"ActividadesOcio":2,"VerRedesSociales":3,"LeerLibros":null,"UsoInternet":1,"ActividadesFisicas":null,"DormirTI1":6,"ObligacionesDiarias":8,"HacerCosasImportantes":6,"ControlTiempo":5,"TiempoDescanso":null},
        {"Codigo":"E-0014","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","TrabajarTI1":8,"EstudiarTI1":4,"AsearseVestirse":1,"ComerTI1":1,"LimpiarVivienda":2,"CuidarOtros":2,"CocinarTI1":1,"CuidadoMascotas":null,"ActividadesSociales":4,"ActividadesOcio":2,"VerRedesSociales":3,"LeerLibros":2,"UsoInternet":1,"ActividadesFisicas":null,"DormirTI1":6,"ObligacionesDiarias":4,"HacerCosasImportantes":6,"ControlTiempo":5,"TiempoDescanso":1},
        {"Codigo":"E-0015","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":5,"Educacion":"NA","TrabajarTI1":6,"EstudiarTI1":null,"AsearseVestirse":2,"ComerTI1":1,"LimpiarVivienda":4,"CuidarOtros":null,"CocinarTI1":3,"CuidadoMascotas":null,"ActividadesSociales":2,"ActividadesOcio":4,"VerRedesSociales":4,"LeerLibros":null,"UsoInternet":1,"ActividadesFisicas":null,"DormirTI1":8,"ObligacionesDiarias":10,"HacerCosasImportantes":10,"ControlTiempo":5,"TiempoDescanso":8},
        {"Codigo":"E-0016","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Universitario","TrabajarTI1":12,"EstudiarTI1":1,"AsearseVestirse":1,"ComerTI1":2,"LimpiarVivienda":1,"CuidarOtros":null,"CocinarTI1":2,"CuidadoMascotas":null,"ActividadesSociales":1,"ActividadesOcio":1,"VerRedesSociales":1,"LeerLibros":1,"UsoInternet":1,"ActividadesFisicas":1,"DormirTI1":6,"ObligacionesDiarias":6,"HacerCosasImportantes":5,"ControlTiempo":7,"TiempoDescanso":4},
        {"Codigo":"E-0017","Sexo":"Mujer","Etnia":"Ninguna","EstadoCivil":"Casado/a","NSE":4,"Educacion":"Maestría","TrabajarTI1":9,"EstudiarTI1":null,"AsearseVestirse":2,"ComerTI1":3,"LimpiarVivienda":null,"CuidarOtros":null,"CocinarTI1":2,"CuidadoMascotas":4,"ActividadesSociales":1,"ActividadesOcio":3,"VerRedesSociales":1,"LeerLibros":1,"UsoInternet":null,"ActividadesFisicas":9,"DormirTI1":3,"ObligacionesDiarias":7,"HacerCosasImportantes":4,"ControlTiempo":4,"TiempoDescanso":6},
        {"Codigo":"E-0018","Sexo":"Hombre","Etnia":"Ninguna","EstadoCivil":"Viudo/a","NSE":1,"Educacion":"Bachillerato/Secundaria","TrabajarTI1":8,"EstudiarTI1":6,"AsearseVestirse":1,"ComerTI1":1,"LimpiarVivienda":0.5,"CuidarOtros":1,"CocinarTI1":3,"CuidadoMascotas":null,"ActividadesSociales":6,"ActividadesOcio":1,"VerRedesSociales":6,"LeerLibros":6,"UsoInternet":2,"ActividadesFisicas":1,"DormirTI1":10,"ObligacionesDiarias":5,"HacerCosasImportantes":5,"ControlTiempo":4,"TiempoDescanso":5}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-tiempo">
  <div class="sech"><h2>&#x23F3; Uso del tiempo</h2><p>Distribución de tiempo en actividades diarias y percepción temporal</p></div>
  <div class="g1"><div class="card"><div class="ct">Horas promedio dedicadas a las siguientes actividades:</div><div class="cw"><canvas id="c-ti1"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Percepción del tiempo</div><div class="cw"><canvas id="c-ti2"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      const avg = (arr) => {
        const vals = arr.filter(v => v !== null && v !== undefined && v !== 98 && !isNaN(v)).map(Number);
        return vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2) : 0;
      };

      const ti1Fields = ['TrabajarTI1','EstudiarTI1','AsearseVestirse','ComerTI1','LimpiarVivienda','CuidarOtros','CocinarTI1','CuidadoMascotas','ActividadesSociales','ActividadesOcio','VerRedesSociales','LeerLibros','UsoInternet','ActividadesFisicas','DormirTI1'];
      const ti1Labels = ['Trabajar','Estudiar','Asearse/vestirse','Comer','Limpiar vivienda','Cuidar a otros','Cocinar','Cuidado mascotas','Act. sociales','Act. ocio','Ver redes','Leer libros','Uso internet','Act. físicas','Dormir'];
      const ti1Proms = ti1Fields.map(f => +avg(data.map(r=>r[f])));
      mkChart('c-ti1','bar',ti1Labels,[{label:'Horas',data:ti1Proms,backgroundColor:CC,borderRadius:5,borderWidth:0}],{ys:{max:16}});

      const ti2Fields = ['ObligacionesDiarias','HacerCosasImportantes','ControlTiempo','TiempoDescanso'];
      const ti2Labels = ['Obligaciones diarias','Hacer cosas importantes','Control sobre tiempo','Tiempo para descansar'];
      const ti2Proms = ti2Fields.map(f => +avg(data.map(r=>r[f])));
      mkChart('c-ti2','bar',ti2Labels,[{label:'Escala 0-10',data:ti2Proms,backgroundColor:['#3b82f6','#8b5cf6','#06b6d4','#10b981'],borderRadius:5,borderWidth:0}],{ys:{max:10}});
    }
  }

  registerSection(new TiempoSection());
})();
