console.log(self);
self.onmessage = function (event) {
  let message = event.data;
  console.log('Received message:', message);
}

self.postMessage('world')