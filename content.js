function blockShorts() {
  const shortsElements = document.querySelectorAll('ytd-reel-shelf-renderer');
  shortsElements.forEach(element => {
    element.style.display = 'none';
  });

  const shortsNavigation = document.querySelector('a[title="Shorts"]');
  if (shortsNavigation && shortsNavigation.closest('ytd-guide-entry-renderer')) {
    shortsNavigation.closest('ytd-guide-entry-renderer').style.display = 'none';
  }

  const shortsInFeed = document.querySelectorAll('ytd-rich-section-renderer');
  shortsInFeed.forEach(element => {
    element.style.display = 'none';
  });
}

window.addEventListener('load', blockShorts);
const observer = new MutationObserver(blockShorts);
observer.observe(document.body, { childList: true, subtree: true });
