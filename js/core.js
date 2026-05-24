(function(){
  const Dashboard = window.Dashboard || {};
  window.Dashboard = Dashboard;

  Dashboard.CC = ['#2ec4b6','#f5a623','#4da6ff','#e05c7a','#4caf8a','#a78bfa','#ffca6e','#5ee0d4','#f97316','#84cc16','#c084fc','#fb7185'];
  Dashboard.charts = {};
  Dashboard.state = { filters: { sx:'', et:'', cv:'', ns:'', ed:'' } };
  Dashboard.defaultFilterKey = 'Codigo';

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
    
    // Mapeo de filtros a columnas simplificadas
    const colSexo="Sexo";
    const colEtnia="Etnia";
    const colCivil="EstadoCivil";
    const colEstrato="NSE";
    const colEdu="Educacion";

    return data.filter(r=>{
      if(F.sx && r[colSexo] !== F.sx) return false;
      if(F.et && r[colEtnia] !== F.et) return false;
      if(F.cv && r[colCivil] !== F.cv) return false;
      if(F.ns && +r[colEstrato] !== +F.ns) return false;
      if(F.ed && r[colEdu] !== F.ed) return false;
      return true;
    });
  };

  Dashboard.buildFilterIndex = function(data, key){
    const k = key || Dashboard.defaultFilterKey;
    const filtered = Dashboard.applyFilters(data);
    const idx = new Set();
    filtered.forEach(r=>{
      const v = r ? r[k] : undefined;
      if (v !== undefined && v !== null) idx.add(v);
    });
    return { index: idx, total: Array.isArray(data)?data.length:0, filteredCount: filtered.length, key: k };
  };

  Dashboard.filterByIndex = function(data, index, key){
    if (!Array.isArray(data)) return [];
    if (!index || !index.size) return data;
    const k = key || Dashboard.defaultFilterKey;
    return data.filter(r=>{
      const v = r ? r[k] : undefined;
      return v !== undefined && v !== null && index.has(v);
    });
  };

  Dashboard.nv = function(data,col,ex=[98,99]){
    return data.map(r=>{const v=r[col];return(v===null||v===undefined||ex.includes(v))?null:+v;}).filter(v=>v!==null&&!isNaN(v));
  };
  Dashboard.avg = function(a){return a.length?(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1):'\u2014';};
  Dashboard.avg2 = function(a){return a.length?+(a.reduce((x,y)=>x+y,0)/a.length).toFixed(1):0;};
  Dashboard.pct = function(n,t){return t?Math.round(n/t*100)+'%':'\u2014';};
  Dashboard.set = function(id,v){const e=document.getElementById(id);if(e)e.textContent=(v??'\u2014');};
  Dashboard.freq = function(data,col,ex=[98,99,null,undefined,'.',  'NA']){const m={};data.forEach(r=>{const v=r[col];if(v===null||v===undefined||ex.includes(v)||ex.includes(+v))return;m[v]=(m[v]||0)+1;});return m;};

  Dashboard.mkChart = function(id,type,labels,datasets,opts={}){
    if(Dashboard.charts[id]){Dashboard.charts[id].destroy();}
    const el=document.getElementById(id);if(!el)return;
    Dashboard.charts[id]=new Chart(el,{type,data:{labels,datasets},options:{
      responsive:true,maintainAspectRatio:false,animation:{duration:200},
      plugins:{legend:{display:opts.legend??false,labels:{color:'#7a90b8',font:{size:10,family:"'DM Mono', monospace"},boxWidth:10}},
        tooltip:{backgroundColor:'#0f1525',borderColor:'#1e2d4a',borderWidth:1,titleColor:'#dce6f5',bodyColor:'#7a90b8',padding:10,callbacks:{label:ctx=>{const v=(opts.indexAxis==='y'?ctx.parsed.x:ctx.parsed.y)??ctx.parsed;return ' '+(ctx.dataset.label||ctx.label)+': '+(typeof v==='number'?Math.round(v*10)/10:v);}}}},
      scales:(type==='pie'||type==='doughnut')?{}:{
        x:{ticks:{color:'#7a90b8',font:{size:9,family:"'DM Mono', monospace"}},grid:{color:'#141d32'},...(opts.xs||{})},
        y:{ticks:{color:'#7a90b8',font:{size:9,family:"'DM Mono', monospace"}},grid:{color:'#141d32'},beginAtZero:true,...(opts.ys||{})}
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
      this.filterSource=false;
      this.filterKey=Dashboard.defaultFilterKey;
    }
    getData(){return this.data||[];}
    setData(data){this.data=Array.isArray(data)?data:[];}
    getFilterData(){return this.getData();}
    getFilterKey(){return this.filterKey||Dashboard.defaultFilterKey;}
    getHtml(){return '';} // override
    render(){ } // override
  };
  Dashboard.registerSection = function(section){Dashboard.sections.push(section);};
})();

