(function() {
  var script = document.createElement('script');
  script.src = '/child2.js';
  document.body.appendChild(script);

  var iframe = document.createElement('iframe');
  iframe.src = '//pn-exp-other.s3-website-us-east-1.amazonaws.com';
  document.body.appendChild(iframe);
})();
