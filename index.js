const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const nggUrl = 'https://meximathurbanned.global.ssl.fastly.net/frog/ixl/hvtrs8%2F-nmweg%2Clml-arpq%2Fwnau%60e-7276%2Flou.jtol';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  router: function(req) {
    if (req.headers.host === 'meximathurbanned.global.ssl.fastly.net/frog/ixl/hvtrs8%2F-nmweg%2Clml-arpq%2Fwnau%60e-7276%2Flou.jtol') {
      req.headers['X-Forwarded-For'] = ''; 
      req.headers['X-Real-IP'] = '';
      req.headers['Via'] = '';
    }
    return nggUrl;
  }
});

app.use('/', proxy);

const port = process.env.PORT || 443;
app.listen(port, () => {
  console.log(`CybriaGG is running on port ${port}`);
});
