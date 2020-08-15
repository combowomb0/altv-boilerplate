import * as alt from 'alt-client';

alt.log('client');

const webView = new alt.WebView('http://resource/client/view/index.html');

webView.on('view:loaded', () => {
  alt.log('view:loaded');
});
