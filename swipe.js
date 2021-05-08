const swipe = document.querySelector('.swipe');
const slidesEls = document.querySelectorAll('.slide');
let slideCount = slidesEls.length;
let cloneFirst = slidesEls[0].cloneNode(true);
let cloneLast = slidesEls[slideCount - 1].cloneNode(true);
swipe.insertBefore(cloneLast, slidesEls[0]);
swipe.appendChild(cloneFirst);
let startX = 0;
let distance = 0;
let currentIndex = 0;
let scrolling = false;
let interval = null;
let width = swipe.offsetWidth;
// 因为第一张为最后一张图片的复制，所以把位置调整到第一张
swipe.style.cssText = `transform: translate3d(${-width}px, 0, 0); transition: all 0ms ease 0s;`;

/**
 * 设置位置
 * @param position
 */
function scrollContent(position) {
  scrolling = true;
  swipe.style.cssText = `transform: translate3d(${position}px, 0, 0); transition: all 300ms ease 0s;`;
  checkPosition();
  scrolling = false;
}

/**
 * 校准位置
 */
function checkPosition() {
  //设置延迟时间和过渡时间一样-当最后一次轮播完成后重置位置(因为轮播过渡效果需要时间，所以设置定时器延迟执行还原操作)
  setTimeout(() => {
    if (currentIndex >= slideCount + 1) {
      currentIndex = 1;
    } else if (currentIndex <= 0) {
      currentIndex = slideCount;
    }
    swipe.style.cssText = `transform: translate3d(${-currentIndex*width}px, 0, 0); transition: all 0ms ease 0s;`;
  },300)
}

function startInterval() {
  interval = setInterval(() => {
    currentIndex ++;
    scrollContent(-currentIndex*width);
  }, 2000);
}

startInterval();

function stopTimer() {
  clearInterval(interval)
}


swipe.addEventListener('touchstart', function (e) {
  if (scrolling) return;
  stopTimer();
  startX = e.touches[0].pageX;
});

swipe.addEventListener('touchmove', function (e) {
  let currentX = e.touches[0].pageX;
  distance = currentX - startX;
  let currentPosition = -currentIndex * width;
  let movePosition = currentPosition + distance;
  swipe.style.cssText = `transform: translate3d(${movePosition}px, 0, 0);`;
});

swipe.addEventListener('touchend', function (e) {
  let currentDistance = Math.abs(distance);
  if (distance === 0) {
    return;
  } else if (distance > 0 && currentDistance >= width*0.25) {
    currentIndex--
  } else if (distance < 0 && currentDistance >= width*0.25) {
    currentIndex++
  }
  scrollContent(-currentIndex * width);
  startInterval();
});
