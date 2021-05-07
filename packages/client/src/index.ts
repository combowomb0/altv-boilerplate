import alt from 'alt-client';

alt.log('client');

const view = new alt.WebView('http://resource/client/view/index.html');

view.on('client:someEvent', () => {
  alt.log('some event from web view');
});
