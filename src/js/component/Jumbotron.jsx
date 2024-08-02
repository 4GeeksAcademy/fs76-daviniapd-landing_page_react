import React from "react";

const Jumbotron = () => {
    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Diapositiva 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Diapositiva 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Diapositiva 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active carousel-item-start">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Un ejemplo mas de titular</h1>
                            <p className="opacity-75">Algunos contenidos de marcador de posición representativos para la primera diapositiva del carrusel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Regístrate hoy</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item carousel-item-next carousel-item-start">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Otro ejemplo de titular.</h1>
                            <p>Algunos contenidos de marcador de posición representativos para la segunda diapositiva del carrusel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Aprende más</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Uno más por si acaso.</h1>
                            <p>Algunos contenidos de marcador de posición representativos para la tercera diapositiva de este carrusel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Explorar galería</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Próximo</span>
            </button>
        </div>
    );
};

export default Jumbotron;