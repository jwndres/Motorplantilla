const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const personas = [
  { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
  { nombre: 'Ana', apellido: 'López', edad: 25 },
  { nombre: 'Carlos', apellido: 'Gómez', edad: 40 },
];

app.get('/', (req, res) => {
  res.render('index', { personas });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

