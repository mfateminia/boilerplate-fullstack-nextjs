const next = require('next');
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const { router } = require('./backend/router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
var isFirst = true;

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(bodyParser.json());
  server.use(compression());

  server.use('/api', router);

  server.get('*', (req, res) => {
    return handle(req, res);
  });
  
  const listeningServer = server.listen(3000, (err) => {
    if (err) throw err;
    console.warn('===> Server started on port 3000')
  });
  listeningServer.on("error", (error) => {
    console.log(error)
  })
});