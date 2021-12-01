const { Server } = require('http');
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'x-test,Content-Type,Accept,Access-Control-Allow-Headers'
}
const login = 'glazkopolina';

const s = Server((req, res)=> {
  if (req.url === '/reault4/') {
    res.writeHead(200, { 'Content-Type': 'application/json', ...CORS});
    return res.end(JSON.stringify({
      'message': login,
      'x-result': req.headers['x-test'],
      'x-body': req.body.toString()
    }));
  } else {
    return res.end(login)
  }
});
s.listen(process.env.PORT)
