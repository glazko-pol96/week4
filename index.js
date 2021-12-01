const { Server } = require('http');

const s = Server((req, res)=> {
  const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
  }
  const login = 'glazkopolina';

  res.writeHead(200, { 'Content-Type': 'application/json', ...CORS});

  if (req.url === '/result4/') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      return res.end(JSON.stringify({
        message: author,
        'x-result': req.headers['x-test'],
        'x-body': body,
      }))
    })
  } else {
    res.end(login)
  }
});
s.listen(process.env.PORT)
