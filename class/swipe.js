class Swipe {
  constructor(options) {
    this.swipe = document.querySelector(options.container);
    this.slidesEls = document.querySelectorAll(options.slider);
    this.slideCount = this.slidesEls.length;
    this.startX = 0;
    this.distance = 0;
    this.currentIndex = 0;
    this.scrolling = false;
    this.interval = null;
    this.width = this.swipe.offsetWidth;
    this.transitionTime = options.transitionTime || 300; // 过渡时间
    this.speed = options.speed || 3000; // 轮播速度
    this.rotate = options.rotate || 0.25; //
    this.init();
  }

  /**
   * 初始化
   */
  init() {
    let cloneFirst = this.slidesEls[0].cloneNode(true);
    let cloneLast = this.slidesEls[this.slideCount - 1].cloneNode(true);
    this.swipe.insertBefore(cloneLast, this.slidesEls[0]);
    this.swipe.appendChild(cloneFirst);
    // 因为第一张为最后一张图片的复制，所以把位置调整到第一张
    this.setPosition(-this.width, 0);
    this.startInterval();

    this.swipe.addEventListener('touchstart', (e) => {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    });

    this.swipe.addEventListener('touchmove', (e) => {
      let currentX = e.touches[0].pageX;
      this.distance = currentX - this.startX;
      let currentPosition = -this.currentIndex * this.width;
      let movePosition = currentPosition + this.distance;
      this.setPosition(movePosition, 0)
    });

    this.swipe.addEventListener('touchend', (e) => {
      let currentDistance = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (this.distance > 0 && currentDistance >= this.width * 0.25) {
        this.currentIndex--
      } else if (this.distance < 0 && currentDistance >= this.width * 0.25) {
        this.currentIndex++
      }
      this.scrollContent(-this.currentIndex * this.width);
      this.startInterval();
    });
  }

  /**
   * 滚动到正确位置
   * @param position
   */
  scrollContent(position) {
    this.scrolling = true;
    this.setPosition(position, this.transitionTime);
    this.checkPosition();
    this.scrolling = false;
  }

  /**
   * 设置滚动位置
   * @param position 位置
   * @param time 过渡时间
   */
  setPosition(position, time) {
    this.swipe.style.cssText = `transform: translate3d(${position}px, 0, 0); transition: all ${time}ms ease 0s;`;
  }

  /**
   * 校准位置
   */
  checkPosition() {
    //设置延迟时间和过渡时间一样-当最后一次轮播完成后重置位置(因为轮播过渡效果需要时间，所以设置定时器延迟执行还原操作)
    setTimeout(() => {
      if (this.currentIndex >= this.slideCount + 1) {
        this.currentIndex = 1;
      } else if (this.currentIndex <= 0) {
        this.currentIndex = this.slideCount;
      }
      this.setPosition(-this.currentIndex * this.width, 0)
    }, this.transitionTime)
  }

  /**
   * 启动定时器
   */
  startInterval() {
    this.interval = setInterval(() => {
      this.currentIndex++;
      this.scrollContent(-this.currentIndex * this.width);
    }, this.speed);
  }

  /**
   * 停止定时器
   */
  stopTimer() {
    clearInterval(this.interval)
  }
}
