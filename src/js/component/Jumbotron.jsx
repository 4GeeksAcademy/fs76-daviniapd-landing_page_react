import React from "react";

const Jumbotron = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="placeholder col-12 placeholder p-5"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                    </svg>
                    <div className="carousel-caption d-block mb-4">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <button className="btn btn-primary">Button 1</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="placeholder col-12 placeholder p-5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                    </svg>
                    <div className="carousel-caption d-block mb-4">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                        <button className="btn btn-primary">Button 2</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="placeholder col-12 placeholder p-5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                    </svg>
                    <div className="carousel-caption d-block mb-4">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                        <button className="btn btn-primary">Button 3</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Jumbotron;