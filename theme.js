(function () {
    var d = document.documentElement, t;
    var m = document.cookie.match(/(?:^|; )lf_theme=(light|dark)/);
    try { t = localStorage.getItem('theme'); } catch (e) {}
    if (m) t = m[1];
    if (t !== 'light' && t !== 'dark') {
        t = window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    d.dataset.theme = t;
    d.classList.add('js');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === 'light' ? '#f4efe6' : '#0d0c0a';
})();

