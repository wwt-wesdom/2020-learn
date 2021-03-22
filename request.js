/**
 * @author wwt
 * @description 用promise封装xmlHttpRequest
 */

const defaultHeaders = {
  "Content-Type": "application/x-www-form-urlencoded"
};

function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]"
}

function serialize(params) {
  if (isObject(params)) {
    return Object.keys(params).reduce((pre,key) => {
      let val = encodeURIComponent(params[key]);
      pre.push(`${key}=${val}`);
      return pre;
    }, []).join('&')
  }
  return '';
}

function request(options) {
  return new Promise((resolve, reject) => {
    const {url, method, params, headers} = options;
    const xhr = new XMLHttpRequest();
    if (method === 'GET' || method === 'DELETE') {
      // GET和DELETE一般用querystring传参
      const requestURL = url + '?' + serialize(params);
      xhr.open(method, requestURL, true)
    } else {
      xhr.open(method, url, true)
    }
    // 设置请求头
    const mergedHeaders = Object.assign({}, defaultHeaders, headers);
    Object.keys(mergedHeaders).forEach(key => {
      xhr.setRequestHeader(key, mergedHeaders[key])
    });
    // 状态监听
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    };
    xhr.onerror = function (error) {
      reject(error)
    };
    // 处理body数据，发送请求, post参数也需要序列化
    const data = method === 'POST' || method === 'PUT' ? serialize(params) : null;
    xhr.send(data);
  })
}
