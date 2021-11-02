//
// imports
//
const express = require('express');
const path = require('path');
const app = express();

//
// constants
//
const port = process.env.PORT || 3000;
const baseViewsPath = path.join(__dirname, 'views');

//
// middlewares
//
app.use(express.static('public'));

//
// routes
//
app.get('/', (req, res) => res.sendFile(path.join(baseViewsPath, 'home.html')));

// error pages
app.get('/404', (req, res) => res.send('Error página no encontrada'));

//
// listen application
//
app.listen(port, () => console.log(`Servidor iniciado en el puerto http://localhost:${port}`));
