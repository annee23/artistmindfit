(() => {
  const footerInner = document.querySelector('.amf-footer-inner');
  if (!footerInner) return;

  footerInner.querySelectorAll('.amf-footer-social').forEach((block) => block.remove());

  const footerNav = footerInner.querySelector('.amf-footer-nav');
  if (footerNav) {
    footerNav.innerHTML = '<a href="/about/">소개</a><a href="/programs/">프로그램</a><a href="/reviews/">강의 후기</a><a href="/notice/">공지</a>';
  }

  const social = document.createElement('div');
  social.className = 'amf-footer-social';
  social.innerHTML = `
    <div class="amf-footer-social-links">
      <a href="https://www.instagram.com/artistmindfit_/" target="_blank" rel="noopener">Instagram ↗</a>
      <a href="https://pf.kakao.com/_CSBGG" target="_blank" rel="noopener">카카오톡 채널 ↗</a>
      <a href="https://m.blog.naver.com/artistmindfit" target="_blank" rel="noopener">네이버 블로그 ↗</a>
      <a href="https://brunch.co.kr/@artistmindfit" target="_blank" rel="noopener">브런치 ↗</a>
      <a href="https://www.youtube.com/@아티스트마인드핏" target="_blank" rel="noopener">YouTube ↗</a>
    </div>`;

  footerInner.insertBefore(social, footerInner.children[1] || null);
})();
