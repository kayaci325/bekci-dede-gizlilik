// dil: Bekçi Dede'de yalnız Türkçe; uygulama içinde bu dosya yüklenmez (uygulama bölümü kendisi seçer)
(function () {
  const L = ['pl', 'tr', 'en'], q = new URLSearchParams(location.search).get('lang'), nav = (navigator.language || '').slice(0, 2);
  const lang = 'tr'; /* Bekçi Dede yalnız Türkçe (karar #10); q ve nav kullanılmaz */ void q; void nav; void L;
  document.documentElement.lang = lang;
  for (const s of document.querySelectorAll('section[lang]')) s.classList.toggle('on', s.lang === lang);
  for (const a of document.querySelectorAll('.langs a')) a.setAttribute('aria-current', String(a.dataset.l === lang));
})();
