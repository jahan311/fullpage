import { fullPageEffect, fullResize, topBtnFlag, menuFlag, navFlag, specificFlag, pageCount, pageWrapTime } from './fullPage.js';

window.addEventListener('load', () => {

  // wheel event
  window.addEventListener('wheel', (e) => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag) return;
    // full page
    fullPageEffect('wheel', e);
  });

  // touch event
  let touchStartY;
  let touchStartX;
  let touchEndY;
  let touchEndX;

  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].pageY;
    touchStartX = e.touches[0].pageX;
  });

  window.addEventListener('touchend', (e) => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag) return;
    touchEndY = e.changedTouches[0].pageY;
    touchEndX = e.changedTouches[0].pageX;

    fullPageEffect('touch', e, touchStartY, touchEndY);
  });

  // resize event
  window.addEventListener('resize', () => {
    if (topBtnFlag || menuFlag || navFlag || specificFlag) return;

    fullResize();
  });
});