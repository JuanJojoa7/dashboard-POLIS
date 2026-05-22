(function(){
  const Dashboard = window.Dashboard;

  function buildTabs(){
    const tabsEl=document.getElementById('tabs');
    Dashboard.sections.forEach((section,idx)=>{
      const tab=document.createElement('div');
      tab.className='tab'+(idx===0?' active':'');
      tab.textContent=section.tabLabel;
      tab.addEventListener('click',()=>{
        Dashboard.setActiveTab(tab,section.id);
        requestAnimationFrame(()=>{
          Object.values(Dashboard.charts).forEach(c=>{try{c.resize();}catch(e){}});
        });
      });
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
    const baseSection=Dashboard.sections.find(s=>s.filterSource) || Dashboard.sections[0];
    const baseData=baseSection?baseSection.getFilterData():[];
    const baseKey=baseSection?baseSection.getFilterKey():Dashboard.defaultFilterKey;
    const filterIndex=Dashboard.buildFilterIndex(baseData,baseKey);
    updateHeader(filterIndex.filteredCount,filterIndex.total);

    Dashboard.sections.forEach(section=>{
      const sectionData=section.getData();
      const sectionKey=section.getFilterKey();
      const filtered=Dashboard.filterByIndex(sectionData,filterIndex.index,sectionKey);
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

  function waitForSections(){
    const ready = window.DashboardSectionsReady;
    if (ready && typeof ready.then === 'function') return ready;
    return Promise.resolve();
  }

  document.addEventListener('DOMContentLoaded',()=>{
    waitForSections().then(init);
  });
})();
