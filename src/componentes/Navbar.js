import React from 'react';
import '../estilos/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar" style={{ backgroundColor: "skyblue" }}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h1 className="navbar-heading text-center">Water Measure Device</h1>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
