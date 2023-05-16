const express = require('express');
const app = express();
const path  = require('path');
const hbs = require('hbs');


const port = 8080;

// Definición carpeta documentos estáticos
app.use(express.static('public'));

// Configuración motor de plantillas
app.set('views', path.join(__dirname + '/public/views'));

app.set('view engine', 'hbs');

// Definición ruta de documentos parciales
hbs.registerPartials(__dirname + '/public/views/partials');

app.listen(port, () => {
    console.log('listening on port ' + port);
});

// Página de login

app.get('/', (req, res) => {
    
    res.render('disponibilidad', { 
        titulo: 'CosmeTIC',
        user_name: 'Julian Carreño', 
        consecutivo: 'Login'
    });
})