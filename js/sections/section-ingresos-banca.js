(function(){
  const Dashboard = window.Dashboard;
  const { BaseSection, registerSection, freq, mkChart, CC } = Dashboard;

  class IngresosBancaSection extends BaseSection {
    constructor(){
      super('ingresos-banca','Ingresos y Banca');
      this.filterSource=false;
      this.data = [
        {"Codigo":"E-0001","Ingresos":"Entre 4 y 8 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"Sí","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"No","PagoVirtual":"Sí","IngSuficientes":8,"Preocupacion":8,"Control":8},
        {"Codigo":"E-0002","Ingresos":"Entre 2 y 4 smmlv","IngReducidos":"Sí","SinDineroComida":"Sí","Ahorros3m":"No","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"No","PagoVirtual":"Sí","IngSuficientes":5,"Preocupacion":9,"Control":6},
        {"Codigo":"E-0003","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"Sí","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":7,"Preocupacion":4,"Control":2},
        {"Codigo":"E-0004","Ingresos":"Entre 2 y 4 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"Sí","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":10,"Preocupacion":5,"Control":10},
        {"Codigo":"E-0005","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":10,"Preocupacion":0,"Control":10},
        {"Codigo":"E-0006","Ingresos":"Entre 2 y 4 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"Sí","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":9,"Preocupacion":3,"Control":8},
        {"Codigo":"E-0007","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"Sí","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":5,"Preocupacion":10,"Control":8},
        {"Codigo":"E-0008","Ingresos":"No percibe ingresos","IngReducidos":"NA","SinDineroComida":"NA","Ahorros3m":"NA","CuentaTarjeta":"NA","DificultadDeudas":"NA","PagoVirtual":"NA","IngSuficientes":98,"Preocupacion":98,"Control":98},
        {"Codigo":"E-0009","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"No","IngSuficientes":7,"Preocupacion":5,"Control":4},
        {"Codigo":"E-0010","Ingresos":"Entre 4 y 8 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"Sí","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":10,"Preocupacion":5,"Control":10},
        {"Codigo":"E-0011","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"Sí","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":9,"Preocupacion":3,"Control":10},
        {"Codigo":"E-0012","Ingresos":"Menos de 1 salario mínimo","IngReducidos":"Sí","SinDineroComida":"No","Ahorros3m":"No sabe / No responde","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":8,"Preocupacion":8,"Control":7},
        {"Codigo":"E-0013","Ingresos":"Menos de 1 salario mínimo","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":7,"Preocupacion":6,"Control":8},
        {"Codigo":"E-0014","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":5,"Preocupacion":8,"Control":6},
        {"Codigo":"E-0015","Ingresos":"Entre 1 y 2 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Ninguna","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":10,"Preocupacion":5,"Control":5},
        {"Codigo":"E-0016","Ingresos":"Entre 2 y 4 smmlv","IngReducidos":"No","SinDineroComida":"Sí","Ahorros3m":"No","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":4,"Preocupacion":5,"Control":7},
        {"Codigo":"E-0017","Ingresos":"Entre 4 y 8 smmlv","IngReducidos":"No","SinDineroComida":"No","Ahorros3m":"Sí","CuentaTarjeta":"Ambas (cuenta y tarjeta)","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":10,"Preocupacion":2,"Control":3},
        {"Codigo":"E-0018","Ingresos":"Menos de 1 salario mínimo","IngReducidos":"Sí","SinDineroComida":"No","Ahorros3m":"No","CuentaTarjeta":"Solo cuenta de ahorros","DificultadDeudas":"Sí","PagoVirtual":"Sí","IngSuficientes":4,"Preocupacion":6,"Control":4}
      ];
    }

    getHtml(isActive){
      return `
<div class="sec${isActive ? ' active' : ''}" id="s-ingresos-banca">
  <div class="sech"><h2>💰 Ingresos y Banca</h2><p>Situación financiera y acceso a servicios bancarios</p></div>
  <div class="g1"><div class="card"><div class="ct">Ingresos</div><div class="cw"><canvas id="c-ingresos"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Situación financiera</div><div class="cw"><canvas id="c-situacion"></canvas></div></div></div>
  <div class="g2"><div class="card"><div class="ct">¿Usted tiene una cuenta de ahorros y tarjeta de crédito activa con algún banco o institución financiera?</div><div class="cw"><canvas id="c-cuenta-tarjeta"></canvas></div></div><div class="card"><div class="ct">¿Usted usa algún tipo de mecanismo de pago virtual?</div><div class="cw"><canvas id="c-pago-virtual"></canvas></div></div></div>
  <div class="g1"><div class="card"><div class="ct">Percepción sobre situación financiera: respuesta promedio</div><div class="cw"><canvas id="c-percepcion"></canvas></div></div></div>
</div>`;
    }

    render(data,n){
      // Gráfico 1: Ingresos (barras, todas categorías)
      const ingresosFm = freq(data, "Ingresos", ['NA']);
      const ingresosK = ['Entre 4 y 8 smmlv','Entre 2 y 4 smmlv','Entre 1 y 2 smmlv','Menos de 1 salario mínimo','No percibe ingresos'];
      const ingresosData = ingresosK.map(k => ingresosFm[k] || 0);
      mkChart('c-ingresos', 'bar', ingresosK, [{label: 'Personas', data: ingresosData, backgroundColor: CC, borderRadius: 5, borderWidth: 0}]);

      // Gráfico 2: Situación financiera (barras, contar "Sí")
      const ingReducidos = data.filter(r => r["IngReducidos"] === "Sí").length;
      const sinDinero = data.filter(r => r["SinDineroComida"] === "Sí").length;
      const ahorros3m = data.filter(r => r["Ahorros3m"] === "Sí").length;
      const dificultadDeudas = data.filter(r => r["DificultadDeudas"] === "Sí").length;
      mkChart('c-situacion', 'bar', ['Ingresos reducidos','Sin dinero para comida','Ahorros 3 meses','Dificultad pagar deudas'],
        [{label: 'Personas', data: [ingReducidos, sinDinero, ahorros3m, dificultadDeudas], backgroundColor: ['#ef4444','#f59e0b','#06b6d4','#6366f1'], borderRadius: 5, borderWidth: 0}]);

      // Gráfico 3: Cuenta y tarjeta (doughnut)
      const cuentaTarjetaFm = freq(data, "CuentaTarjeta", ['NA']);
      const cuentaK = Object.keys(cuentaTarjetaFm).sort();
      mkChart('c-cuenta-tarjeta', 'doughnut', cuentaK, [{data: cuentaK.map(k=>cuentaTarjetaFm[k]), backgroundColor: CC, borderWidth: 0}], {legend: true});

      // Gráfico 4: Pago virtual (doughnut)
      const pagoVirtualFm = freq(data, "PagoVirtual", ['']);
      const pagoK = ['No','Sí'].filter(k => k in pagoVirtualFm).sort().reverse();
      mkChart('c-pago-virtual', 'doughnut', pagoK, [{data: pagoK.map(k=>pagoVirtualFm[k]), backgroundColor: CC, borderWidth: 0}], {legend: true});

      // Gráfico 5: Percepción (promedios ING2, excluir 98)
      const ingSufVals = data.map(r => r["IngSuficientes"]).filter(v => v !== 98 && v !== null && v !== undefined && !isNaN(v)).map(Number);
      const ingSufProm = ingSufVals.length ? (ingSufVals.reduce((a,b)=>a+b,0)/ingSufVals.length).toFixed(1) : 0;

      const preocupacionVals = data.map(r => r["Preocupacion"]).filter(v => v !== 98 && v !== null && v !== undefined && !isNaN(v)).map(Number);
      const preocupacionProm = preocupacionVals.length ? (preocupacionVals.reduce((a,b)=>a+b,0)/preocupacionVals.length).toFixed(1) : 0;

      const controlVals = data.map(r => r["Control"]).filter(v => v !== 98 && v !== null && v !== undefined && !isNaN(v)).map(Number);
      const controlProm = controlVals.length ? (controlVals.reduce((a,b)=>a+b,0)/controlVals.length).toFixed(1) : 0;

      mkChart('c-percepcion', 'bar', ['Ingresos suficientes','Preocupación por finanzas','Control sobre situación'],
        [{label: 'Promedio (0-10)', data: [+ingSufProm, +preocupacionProm, +controlProm], backgroundColor: ['#10b981','#ef4444','#3b82f6'], borderRadius: 5, borderWidth: 0}],
        {ys: {max: 10}});
    }
  }

  registerSection(new IngresosBancaSection());
})();
