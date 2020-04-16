import { log, WebView } from 'alt-client';

log('client');

const webView = new WebView('http://resource/client/view/index.html');

webView.on('view:loaded', () => {
  log('view:loaded');
});
