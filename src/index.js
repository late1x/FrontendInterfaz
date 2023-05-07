import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    const data = {
        Humedad: parseFloat((Math.random() * 100).toFixed(2)), // generamos valores aleatorios de 0 a 100 para la humedad con dos decimales
        Temperatura: parseFloat((Math.random() * 50).toFixed(2)), // generamos valores aleatorios de 0 a 50 para la temperatura con dos decimales
        Litros: parseFloat((Math.random() * 10).toFixed(2)), // generamos valores aleatorios de 0 a 10 para los litros con dos decimales
        LitrosPorHora: parseFloat((Math.random() * 5).toFixed(2)), // generamos valores aleatorios de 0 a 5 para los litros por hora con dos decimales
        Indice: parseFloat((Math.random() * 5).toFixed(2)) // generamos valores aleatorios de 0 a 5 para el índice con dos decimales
    };

    axios.post('http://localhost:4000/api/datos', data)
        .then(response => console.log(response))
        .catch(error => console.error(error));
}, 1000); // Envía los datos cada segundo (1000ms)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

