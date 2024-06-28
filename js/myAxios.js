class MyAxios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage(),
      response: new InterceptorsManage(),
    }
  }

  request(config) {
    const chain = [this.sendAjax.bind(this), undefined];

    // 请求拦截
    this.interceptors.request.handlers.forEach(interceptor => {
      chain.unshift(interceptor.fullField, interceptor.rejected)
    })

    // 响应拦截
    this.interceptors.response.handlers.forEach(interceptor => {
      chain.push(interceptor.fullField, interceptor.rejected)
    })

    // 执行队列
    let promise = Promise.resolve(config);
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise;
  }

  sendAjax(config) {
    return new Promise(resolve => {
      const {url = '', method = 'get', data = {}} = config;
      console.log(config);
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onload = function () {
        console.log(xhr.responseText);
        resolve(xhr.responseText)
      }
      xhr.send(data)
    })
  }
}

function CreateAxiosFn() {
  let axios = new MyAxios();
  let req = axios.request.bind(axios);
  // 混入方法， 处理axios的request方法，使之拥有get,post...方法
  utils.extend(req, MyAxios.prototype, axios);
  utils.extend(req, axios);
  return req;
}

const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post'];

methodsArr.forEach(met => {
  MyAxios.prototype[met] = function () {
    console.log('执行' + met + '方法');
    if (['get', 'delete', 'head', 'options'].includes(met)) {
      return this.request({
        method: met,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else {
      return this.request({
        method: met,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {}
      })
    }
  }
})


const utils = {
  extend(a, b, context) {
    for (const key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context);
        } else {
          a[key] = b[key];
        }
      }
    }
  }
}

class InterceptorsManage {
  constructor() {
    this.handlers = [];
  }

  use(fullField, rejected) {
    this.handlers.push({
      fullField,
      rejected
    })
  }
}

const axios = CreateAxiosFn();

export default axios