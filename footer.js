const initializeSharedNavigation = () => {
  const aboutDropdown = document.querySelector('.amf-site-nav .amf-nav-dropdown');
  if (aboutDropdown) {
    const aboutLink = aboutDropdown.querySelector(':scope > a');
    if (aboutLink) aboutLink.href = '/about/company/';

    aboutDropdown.querySelectorAll('.amf-nav-dropdown-menu a').forEach((link) => {
      if (link.textContent.trim() === '회사소개') link.href = '/about/company/';
      if (link.textContent.trim() === '대표소개') link.href = '/about/representative/';
    });
  }

  const siteNavigation = document.querySelector('.amf-site-nav');
  const reviewsLink = siteNavigation && [...siteNavigation.children]
    .find((item) => item.tagName === 'A' && item.getAttribute('href') === '/reviews/');
  if (reviewsLink) {
    const reviewsDropdown = document.createElement('div');
    reviewsDropdown.className = 'amf-nav-dropdown';
    reviewsDropdown.innerHTML = '<a href="/reviews/">강의 후기</a><div class="amf-nav-dropdown-menu"><a href="/reviews/psychology/">심리 프로그램</a><a href="/reviews/arts-psychology/">예술심리 프로그램</a></div>';
    reviewsLink.replaceWith(reviewsDropdown);
  }

  const noticeDropdown = [...document.querySelectorAll('.amf-site-nav .amf-nav-dropdown')]
    .find((dropdown) => dropdown.querySelector(':scope > a')?.textContent.trim() === '공지');
  if (noticeDropdown) {
    const noticeLink = noticeDropdown.querySelector(':scope > a');
    if (noticeLink) noticeLink.href = '/notice/news/';

    noticeDropdown.querySelectorAll('.amf-nav-dropdown-menu a').forEach((link) => {
      if (link.textContent.trim() === '소식') link.href = '/notice/news/';
      if (link.textContent.trim() === 'F&Q') link.href = '/notice/qna/';
    });
  }

  const footerInner = document.querySelector('.amf-footer-inner');
  if (!footerInner) return;

  footerInner.querySelectorAll('.amf-footer-social').forEach((block) => block.remove());

  const footerNav = footerInner.querySelector('.amf-footer-nav');
  if (footerNav) {
    footerNav.innerHTML = '<a href="/about/company/">소개</a><a href="/programs/">프로그램</a><a href="/reviews/">강의 후기</a><a href="/notice/news/">공지</a>';
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
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSharedNavigation, { once: true });
}

window.setTimeout(initializeSharedNavigation, 0);
window.addEventListener('load', initializeSharedNavigation, { once: true });
