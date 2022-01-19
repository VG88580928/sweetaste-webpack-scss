import './scss/all.scss';
import Collapse from 'bootstrap/js/dist/collapse'; // 行動版 navbar 需要用到

// 首頁 Fade in on scroll 特效
let options = {
  // (還有兩個參數 root & rootMargin，目前用不到)
  threshold: 0.5, // 表示在當前畫面上目標元素出現 50% 時執行 callback
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let target = entry.target;

      target.style.transform = 'translateX(0px)';
      target.style.opacity = '1';
      // 元素出現後就停止觀察，避免 callback 多次觸發造成效能浪費
      observer.unobserve(target);
    }
  });
}
let observer = new IntersectionObserver(callback, options);

// 要被觀察的所有元素
const elements = [
  ...document.querySelectorAll('.middle-slice1 .col-md-6'),
  ...document.querySelectorAll('.middle-slice2 .col-md-6'),
  document.querySelector('.middle-slice3 .img-1'),
  document.querySelector('.middle-slice3 .img-2'),
  document.querySelector('.slogan4'),
  document.querySelector('.slogan5'),
];

elements.forEach((element) => {
  let direction = element.getAttribute('data-direction');
  if (direction) {
    element.classList.add(`fade-${direction}`);
  }
  observer.observe(element);
});
