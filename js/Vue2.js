const Observer = function (data) {
  for (let key in data) {
    defineReactive(data, key)
  }
}
const defineReactive = function (obj, key) {
  const dep = new Dep()
  let val = obj[key];
  Object.defineProperty(obj, key, {
    // 设置当前描述属性为可被循环
    enumerable: true,
    // 设置当前描述属性可被修改
    configurable: true,
    get() {
      // 调用依赖收集器中的addSub，用于收集当前属性与Watcher中的依赖关系
      dep.depend();
      return val
    },
    set(newVal) {
      if (newVal === val) return;
      val = newVal;
      // 当值发生变更时，通知依赖收集器，更新每个需要更新的Watcher，
      // 这里每个需要更新通过什么断定？dep.subs
      dep.notify()
    }

  })
}

const observe = function (data) {
  return new Observer(data)
}

const Vue = function (options) {
  const self = this;
  if (options && typeof options.data === 'function') {
    this._data =  options.data.apply(this)
  }
  
  this.mount = function () {
    new Watcher(self, self.render)
  }
  
  this.render = function () {
    /*with (self) {
      _data.text
    }*/
  }
  
  observe(this._data)
}

const Watcher = function (vm, fn) {
  const self = this;
  this.vm = vm;
  Dep.target = this;
  // 向Dep方法添加当前Watcher
  this.addDep = function (dep) {
    dep.addSub(self)
  }
  this.update = function () {
    console.log('in watcher update');
    fn()
  }
  this.value = fn();
  Dep.target = null
}

const Dep = function () {
  const self = this;
  // 收集目标
  this.target = null
  // 存储收集器中需要通知的Watcher
  this.subs = [];
  // 当有目标时，绑定Dep与Watcher的关系
  this.depend = function () {
    if (Dep.target) {
      Dep.target.addDep(self)
    }
  }
  // 为当前收集器添加Watcher
  this.addSub = function (watcher) {
    self.subs.push(watcher)
  }
  // 通知收集器中所的所有Watcher，调用其update方法
  this.notify = function () {
    for (let i = 0; i < self.subs.length; i++) {
      self.subs[i].update()
    }
  }
}