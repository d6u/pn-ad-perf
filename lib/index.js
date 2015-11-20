'use strict';

const Chrome = require('chrome-remote-interface');

function chromeCallback(chrome) {
  setTimeout(() => {
    // chrome.Page.getResourceTree((err, tree) => {
      // console.log(JSON.stringify(tree, null, 4));
      chrome.close();
    // });
  }, 3000);

  chrome.Network.setCacheDisabled(true);
  chrome.Network.requestWillBeSent((params) => {
    console.log(JSON.stringify(params, null, 4));
  });
  // chrome.Network.responseReceived((params) => {
  //   // console.log(JSON.stringify(params, null, 4));
  //   chrome.Network.getResponseBody({requestId: params.requestId}, (err, data) => {
  //     const r = {
  //       url: params.response.url,
  //       header_length: params.response.headersText.length,
  //       body_length: data.body.length,
  //       length: params.response.headersText.length + data.body.length,
  //     };
  //     console.log(JSON.stringify(r, null, 4));
  //   });
  // });
  chrome.Network.enable();

  chrome.Page.enable();

  chrome.once('ready', () => {
    chrome.Page.navigate({
      url: 'http://pn-exp-main.s3-website-us-east-1.amazonaws.com/'
    });
  });
}

Chrome({host: '172.16.59.133'}, chromeCallback)
  .on('error', (err) => {
    console.log(err);
    console.error('Cannot connect to Chrome');
  });
