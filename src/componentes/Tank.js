import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";

const Tank = () => {
    const [Litros, setLitros] = useState(0);
    const tankStyle = {
        width: '200px',
        height: '300px',
        position: 'relative',
        border: '2px solid black',
        borderRadius: '5px',
        overflow: 'hidden',
        backgroundColor: 'gray'
    };

    const waterStyle = {
        width: '100%',
        height: `${Litros}%`,
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
        fontSize: '20px',
        userSelect: 'none'
    };

    const containerStyle = {
        width: '200px',
        height: '300px',
        marginTop: '20px'
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            axios.get('http://localhost:4000/api/datos')
                .then(response => {
                    const {Litros} = response.data;
                    setLitros(Litros);
                    console.log(response.data);
                })
                .catch(error => console.error(error));
        }, 1000); // Realiza la petición cada segundo (1000ms)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Container style={containerStyle}>
            <div style={tankStyle}>
                <div style={waterStyle}></div>
                <div style={textStyle}>{`${Litros}%`}</div>
                <div style={{...textStyle, top: '10%', fontSize: '14px'}}>Litros totales</div>
            </div>
        </Container>
    );
};

export default Tank;

