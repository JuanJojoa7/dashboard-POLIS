(function(){
  const files = Array.isArray(window.DashboardSectionFiles) ? window.DashboardSectionFiles : [];
  let resolveReady = null;

  window.DashboardSectionsReady = new Promise(resolve => {
    resolveReady = resolve;
  });

  function done(){
    if (resolveReady) resolveReady();
  }

  function loadNext(i){
    if (i >= files.length) {
      done();
      return;
    }
    const src = files[i];
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => loadNext(i + 1);
    s.onerror = () => {
      console.error('No se pudo cargar', src);
      loadNext(i + 1);
    };
    document.head.appendChild(s);
  }

  loadNext(0);
})();
