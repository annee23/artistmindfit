(() => {
  const footerInner = document.querySelector('.amf-footer-inner');
  if (!footerInner || footerInner.querySelector('.amf-footer-social')) return;

  const social = document.createElement('div');
  social.className = 'amf-footer-social';
  social.innerHTML = `
    <div class="amf-social-title">Artist Mind Fit<br><em>connects.</em></div>
    <div class="amf-social-handle">예술가를 위한 심리교육 기획사 · @artistmindfit_</div>
    <div class="amf-footer-social-links">
      <a href="https://www.instagram.com/artistmindfit_/" target="_blank" rel="noopener">Instagram ↗</a>
      <a href="https://pf.kakao.com/_CSBGG" target="_blank" rel="noopener">카카오톡 채널 ↗</a>
      <a href="https://m.blog.naver.com/artistmindfit" target="_blank" rel="noopener">네이버 블로그 ↗</a>
      <a href="https://brunch.co.kr/@artistmindfit" target="_blank" rel="noopener">브런치 ↗</a>
      <a href="https://www.youtube.com/@아티스트마인드핏" target="_blank" rel="noopener">YouTube ↗</a>
    </div>`;

  footerInner.insertBefore(social, footerInner.children[1] || null);
})();
