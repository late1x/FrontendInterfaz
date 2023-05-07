import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Alert, Card} from 'react-bootstrap';

const TankHour = () => {
    const [LitrosPorHora, setLitrosPorHora] = useState(0);
    const tankStyle = {
        width: '100px',
        height: '150px',
        position: 'relative',
        border: '2px solid black',
        borderRadius: '5px',
        overflow: 'hidden',
        backgroundColor: 'gray'
    };

    const waterStyle = {
        width: '100%',
        height: `${LitrosPorHora}%`,
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'lightskyblue',
        borderRadius: '5px 5px 0 0',
        transition: 'height 0.5s ease'
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        userSelect: 'none'
    };

    const cardStyle = {
        width: '200x',
        height: '300px',
        marginTop: '20px'
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get('http://localhost:4000/api/datos')
                .then(response => {
                    const {LitrosPorHora} = response.data;
                    setLitrosPorHora(LitrosPorHora);
                    console.log(response.data);
                })
                .catch(error => console.error(error));
        }, 1000); // Realiza la petición cada segundo (1000ms)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Card style={cardStyle}>
            <Card.Body>
                <div style={tankStyle}>
                    <div style={waterStyle}></div>
                    <p style={textStyle}>{`${LitrosPorHora} L/hr`}</p>
                </div>
                <div style={{marginTop: '10px'}}>
                    {LitrosPorHora === 0 ? (
                        <Alert variant="danger">¡No hay agua!</Alert>
                    ) : (
                        <Alert variant="success">¡Hay agua!</Alert>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
};

export default TankHour;


