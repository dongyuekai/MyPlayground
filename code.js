importScripts('a.js', 'b.js')
self.onmessage = event => {
  self.postMessage('hello' + event.data);
}