const app = require('./server/server');
const { port } = require('./server/config');

app.listen(port, () => {
  console.log('Listening');
});
