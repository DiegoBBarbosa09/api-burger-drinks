const express = require('express');
const app = express();
const cors = require('cors');
const fretesData = require('./data/fretes/fretesData');
const snacksData = require('./data/products/snacks');
const portionsData = require('./data/products/portions');
const noodlesData = require('./data/products/noodles');
const drinksData = require('./data/products/drinks');
const ingredientsExtrasData = require('./data/products/ingredients-extras');

app.use(cors());

const port = 3001;

// Endpoint para listar todos os snacks
app.get('/snacks', (req, res) => {
    res.json(snacksData);
});

// Endpoint para listar todas as porções
app.get('/portions', (req, res) => {
    res.json(portionsData);
});

// Endpoint para listar todos os noodles
app.get('/noodles', (req, res) => {
    res.json(noodlesData);
});

// Endpoint para listar todas as bebidas
app.get('/drinks', (req, res) => {
    res.json(drinksData);
});

// Endpoint para listar todos os ingredientes extras
app.get('/ingredients-extras', (req, res) => {
    res.json(ingredientsExtrasData);
});

// Rota Fretes
app.get('/fretes', (req, res) => {
  res.send(fretesData);
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
