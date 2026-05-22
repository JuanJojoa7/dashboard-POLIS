(function(){
  const Dashboard = window.Dashboard;

  function buildTabs(){
    const tabsEl=document.getElementById('tabs');
    Dashboard.sections.forEach((section,idx)=>{
      const tab=document.createElement('div');
      tab.className='tab'+(idx===0?' active':'');
      tab.textContent=section.tabLabel;
      tab.addEventListener('click',()=>Dashboard.setActiveTab(tab,section.id));
      tabsEl.appendChild(tab);
    });
  }

  function injectSections(){
    const contentEl=document.getElementById('content');
    Dashboard.sections.forEach((section,idx)=>{
      contentEl.insertAdjacentHTML('beforeend',section.getHtml(idx===0));
    });
  }

  function updateHeader(n){
    Dashboard.set('hn',n);
    Dashboard.set('hpct',D.length?Math.round(n/D.length*100)+'%':'\u2014');
    Dashboard.set('fcnt','n = '+n);
  }

  function renderAll(){
    const data=Dashboard.getFilteredData();
    const n=data.length;
    updateHeader(n);
    Dashboard.sections.forEach(section=>section.render(data,n));
  }

  function handleFilterChange(){
    Dashboard.syncFilters();
    renderAll();
  }

  function initFilters(){
    document.querySelectorAll('.fbar select').forEach(s=>s.addEventListener('change',handleFilterChange));
    const resetBtn=document.getElementById('f-reset');
    resetBtn.addEventListener('click',()=>{
      Dashboard.resetFilters();
      renderAll();
    });
  }

  function init(){
    injectSections();
    buildTabs();
    Dashboard.syncFilters();
    initFilters();
    renderAll();
  }

  document.addEventListener('DOMContentLoaded',init);
})();
