import React from "react";
import SlideJumbotron from "./slideJumbotron";
import PropTypes from "prop-types";
import Kells from "/src/img/kells.png";
import Song from "/src/img/song.jpg";
import Wolf from "/src/img/wolf.jpg";
import "./styles.css";

const titleStyles = {
    fontFamily: 'Montserrat, sans-serif',


}


const Jumbotron = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <SlideJumbotron
                            backgroundImage={Kells}
                            titleSlide="ABOUT CARTOON SALOON"
                            descriptionSlide="Cartoon Saloon is a world renowned animation studio and produces brave and beautiful shorts, feature films, and TV series. "
                            urlButtonSlide=""
                            labelButtonSlide="About Us"
                        />
                    </div>
                    <div className="carousel-item">
                        <SlideJumbotron
                            backgroundImage={Song}
                            titleSlide="AWARDS & RECOGNITION"
                            descriptionSlide="Cartoon Saloon has five Academy Award® and two Golden Globe® nominations and many award wins including BAFTA® and Emmy."
                            urlButtonSlide=""
                            labelButtonSlide="About our services"
                        />
                    </div>
                    <div className="carousel-item">
                        <SlideJumbotron
                            backgroundImage={Wolf}
                            titleSlide="WHY WORK WITH US"
                            descriptionSlide="Here at Cartoon Saloon our goal has always been to make original stories and foster the talent of our crew."
                            urlButtonSlide=""
                            labelButtonSlide="Contact Us"
                        />
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
            </div >
            <h5 className="text-success mt-3 mx-5 border-success" style={titleStyles}> 
                <b>Our most awarded projects</b>
                <hr className="border-2 border-success mt-2 opacity-75"/>
            </h5>
        </>
    );
};

export default Jumbotron;