class ElementMove {
  constructor(option) {
    this.container = option.container;
    this.element = option.element;
    this.speed = {};
    if (option.speed) {
      if (typeof option.speed == "object") {
        this.speed.x = option.speed.x;
        this.speed.y = option.speed.y;
      } else {
        this.speed.x = option.speed;
        this.speed.y = option.speed;
      }
    } else {
      this.speed.x = 2;
      this.speed.y = 2;
    }
    this.pos = {
      left: option.startLeft || 100,
      top: option.startTop || 100
    };
    this.xdir = 1;
    this.ydir = 1;
    this.stopMove = false;
    this.animation();
  }

  move() {
    let el = document.querySelector(this.element);
    el.onmouseover = () => {
      this.stopMove = true;
    };
    el.onmouseout = () => {
      this.stopMove = false;
      this.animation()
    };
    if (!this.stopMove) {
      this.getPos();
      el.style.left = this.pos.left + 'px';
      el.style.top = this.pos.top + 'px';
      this.animation();
    }
  }

  getPos() {
    let container = document.querySelector(this.container);
    let element = document.querySelector(this.element);
    let offsetLeft = element.offsetLeft;
    let offsetTop = element.offsetTop;
    let offsetWidth = element.offsetWidth;
    let offsetHeight = element.offsetHeight;
    //碰撞检测start
    if (offsetLeft <= 0) {
      this.xdir = 1;
    } else if (offsetLeft + offsetWidth >= container.offsetWidth) {
      this.xdir = -1;
    }

    if (offsetTop <= 0) {
      this.ydir = 1;
    } else if (offsetTop + offsetHeight >= container.offsetHeight) {
      this.ydir = -1;
    }
    //碰撞检测end

    this.pos.left = this.pos.left + this.xdir * this.speed.x;
    this.pos.top = this.pos.top + this.ydir * this.speed.y;
  }

  animation() {
    requestAnimationFrame(() => {
      this.move();
    })
  }
}
