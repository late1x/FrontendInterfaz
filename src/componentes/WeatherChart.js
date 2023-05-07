import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const WeatherChart = () => {
    const [humedad, setHumedad] = useState(0);
    const [temperatura, setTemperatura] = useState(0);
    const [indice, setIndice] = useState(0);

    const cardStyle = {
        width: '200x',
        height: '100px',
    };

    const cardrStyleS = {
        width: '200x',
        height: '300px',
        marginTop: '20px'
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get('http://localhost:4000/api/datos')
                .then(response => {
                    const { Humedad, Temperatura, Indice } = response.data;
                    setHumedad(Humedad);
                    setTemperatura(Temperatura);
                    setIndice(Indice);
                    console.log(response.data);
                })
                .catch(error => console.error(error));
        }, 1000); // Realiza la petición cada segundo (1000ms)

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <Card style={cardrStyleS}>
            <Card style={cardStyle}>
                <Card.Body>
                    <div className="weather-icon">
                        <FontAwesomeIcon icon={faThermometerHalf} />
                    </div>
                    <Card.Title>{temperatura}°C</Card.Title>
                    <Card.Text>Temperatura</Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle}>
                <Card.Body>
                    <div className="weather-icon">
                        <FontAwesomeIcon icon={faTint} />
                    </div>
                    <Card.Title>{humedad}%</Card.Title>
                    <Card.Text>Humedad</Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle}>
                <Card.Body>
                    <div className="weather-icon">
                        <FontAwesomeIcon icon={faTemperatureLow} />
                    </div>
                    <Card.Title>{indice}°C</Card.Title>
                    <Card.Text>Sensacion termica</Card.Text>
                </Card.Body>
            </Card>
        </Card>
    );
};

export default WeatherChart;


