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

  function updateHeader(n,total){
    Dashboard.set('hn',n);
    Dashboard.set('hpct',total?Math.round(n/total*100)+'%':'\u2014');
    Dashboard.set('fcnt','n = '+n);
  }

  function renderAll(){
    const baseSection=Dashboard.sections[0];
    const baseData=baseSection?baseSection.getData():[];
    const baseFiltered=Dashboard.applyFilters(baseData);
    updateHeader(baseFiltered.length,baseData.length);

    Dashboard.sections.forEach(section=>{
      const sectionData=section.getData();
      const filtered=Dashboard.applyFilters(sectionData);
      section.render(filtered,filtered.length);
    });
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
