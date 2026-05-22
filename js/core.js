(function(){
  const Dashboard = window.Dashboard || {};
  window.Dashboard = Dashboard;

  Dashboard.CC = ['#6366f1','#10b981','#f59e0b','#06b6d4','#8b5cf6','#ef4444','#ec4899','#14b8a6','#f97316','#84cc16','#3b82f6','#a78bfa'];
  Dashboard.charts = {};
  Dashboard.state = { filters: { sx:'', et:'', cv:'', ns:'', ed:'' } };

  Dashboard.setActiveTab = function(el,id){
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.sec').forEach(s=>s.classList.remove('active'));
    el.classList.add('active');
    const target=document.getElementById('s-'+id);
    if(target){target.classList.add('active');}
  };

  Dashboard.syncFilters = function(){
    const f=Dashboard.state.filters;
    f.sx=document.getElementById('fsx').value;
    f.et=document.getElementById('fet').value;
    f.cv=document.getElementById('fcv').value;
    f.ns=document.getElementById('fns').value;
    f.ed=document.getElementById('fed').value;
    return f;
  };

  Dashboard.resetFilters = function(){
    document.querySelectorAll('.fbar select').forEach(s=>s.value='');
    Dashboard.syncFilters();
  };

  Dashboard.applyFilters = function(data){
    const F=Dashboard.state.filters;
    if(!Array.isArray(data)) return [];
    const colSexo="4. ¿Cómo se identifica usted?";
    const colEtnia="6. De acuerdo a su cultura, pueblo o rasgos físicos usted se reconoce como:";
    const colCivil="10. Usted actualmente:";
    const colEstrato="5. ¿Cuál es el estrato socio-económico de su vivienda?";
    const colEdu="7.1.1 ¿Cuál es el nivel educativo más alto alcanzado por usted (así no haya terminado) y el último grado aprobado en este nivel? NIVEL";

    return data.filter(r=>{
      if(F.sx){
        const sx=r[colSexo];
        if(sx!==undefined&&sx!==null&&sx!=+F.sx) return false;
      }
      if(F.et){
        const e=r[colEtnia];
        if(e!==undefined&&e!==null){
          const min=(e!==6);
          if(F.et==='min'&&!min) return false;
          if(F.et==='no'&&min) return false;
        }
      }
      if(F.cv){
        const c=r[colCivil];
        if(c!==undefined&&c!==null){
          const con=(c===1||c===4);
          if(F.cv==='con'&&!con) return false;
          if(F.cv==='sin'&&con) return false;
        }
      }
      if(F.ns){
        const s=r[colEstrato];
        if(s!==undefined&&s!==null){
          if(F.ns==='bajo'&&!(s<=2)) return false;
          if(F.ns==='medio'&&!(s===3||s===4)) return false;
          if(F.ns==='alto'&&!(s>=5)) return false;
        }
      }
      if(F.ed){
        const ed=r[colEdu];
        if(ed!==undefined&&ed!==null&&String(ed)!==F.ed) return false;
      }
      return true;
    });
  };

  Dashboard.nv = function(data,col,ex=[98,99]){
    return data.map(r=>{const v=r[col];return(v===null||v===undefined||ex.includes(v))?null:+v;}).filter(v=>v!==null&&!isNaN(v));
  };
  Dashboard.avg = function(a){return a.length?(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1):'\u2014';};
  Dashboard.avg2 = function(a){return a.length?+(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1):0;};
  Dashboard.pct = function(n,t){return t?Math.round(n/t*100)+'%':'\u2014';};
  Dashboard.set = function(id,v){const e=document.getElementById(id);if(e)e.textContent=(v??'\u2014');};
  Dashboard.freq = function(data,col,ex=[98,99,null,undefined]){const m={};data.forEach(r=>{const v=r[col];if(v===null||v===undefined||ex.includes(v)||ex.includes(+v))return;m[v]=(m[v]||0)+1;});return m;};

  Dashboard.mkChart = function(id,type,labels,datasets,opts={}){
    if(Dashboard.charts[id]){Dashboard.charts[id].destroy();}
    const el=document.getElementById(id);if(!el)return;
    Dashboard.charts[id]=new Chart(el,{type,data:{labels,datasets},options:{
      responsive:true,maintainAspectRatio:false,animation:{duration:200},
      plugins:{legend:{display:opts.legend??false,labels:{color:'#94a3b8',font:{size:10},boxWidth:10}},
        tooltip:{callbacks:{label:ctx=>{const v=ctx.parsed.y??ctx.parsed;return ' '+(ctx.dataset.label||ctx.label)+': '+(typeof v==='number'?Math.round(v*10)/10:v);}}}},
      scales:(type==='pie'||type==='doughnut')?{}:{
        x:{ticks:{color:'#94a3b8',font:{size:9}},grid:{color:'#1e293b'},...(opts.xs||{})},
        y:{ticks:{color:'#94a3b8',font:{size:9}},grid:{color:'#1e293b'},beginAtZero:true,...(opts.ys||{})}
      },
      ...(opts.indexAxis?{indexAxis:opts.indexAxis}:{})
    }});
  };

  Dashboard.sections = [];
  Dashboard.BaseSection = class {
    constructor(id,tabLabel){
      this.id=id;
      this.tabLabel=tabLabel;
      this.data=[];
    }
    getData(){return this.data||[];}
    setData(data){this.data=Array.isArray(data)?data:[];}
    getHtml(){return '';} // override
    render(){ } // override
  };
  Dashboard.registerSection = function(section){Dashboard.sections.push(section);};
})();

