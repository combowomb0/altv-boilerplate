import alt from 'alt-client';

alt.log('client');

const webView = new alt.WebView('http://resource/client/view/index.html');

webView.on('client:someEvent', () => {
  alt.log('some event from web view');
});
