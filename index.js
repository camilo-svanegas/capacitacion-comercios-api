const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = 3000;


//CORS
// const whitelist = ['http://localhost:4200'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Acceso de negado'));
//     }
//   }
// }

app.use(cors());

app.get('/', (req, res) => {
  res.send('Im a Server in Express');
});

routerApi(app);

//LISTEN PORT
app.listen(port, () => {
  console.log('Corriendo en el puerto ' + port);
});
