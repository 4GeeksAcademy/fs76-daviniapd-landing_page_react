import React from "react";

const Footer = () => {
    return (
        <footer className="text-body-secondary py-5">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="">Volver arriba</a>
                </p>
                <p className="mb-1">El álbum de ejemplo es © Bootstrap, ¡pero descárgalo y personalízalo tú mismo!</p>
                <p className="mb-0">¿Es nuevo en Bootstrap?
                <a href="/">Visite la página de inicio</a>
                <a href="/docs/5.3/getting-started/introduction/">guía de introducción</a> 
                .</p>
            </div>
        </footer>
    );
};

export default Footer;