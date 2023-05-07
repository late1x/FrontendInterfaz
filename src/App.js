import './estilos/App.css';
import './estilos/Navbar.css'
import Tank from './componentes/Tank';
import WeatherChart from "./componentes/WeatherChart";
import TankHour from "./componentes/TankHour";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "./componentes/Navbar";



function App() {
    return (
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col className="my-3" xs={12} md={4}>
                        <Tank />
                    </Col>
                    <Col className="my-3" xs={12} md={4}>
                        <TankHour />
                    </Col>
                    <Col className="my-3" xs={12} md={4}>
                        <WeatherChart />
                    </Col>
                </Row>
            </Container>
            <footer
                style={{
                    backgroundColor: "white",
                    borderTop: "1px solid #ddd",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                Proyecto
            </footer>
        </div>
    );
}

export default App;