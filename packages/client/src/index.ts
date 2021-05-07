import alt from 'alt-client';

alt.log('client');

const view = new alt.WebView('http://assets/core-assets-view/build/index.html');

view.on('client:someEvent', () => {
  alt.log('some event from web view');
});
