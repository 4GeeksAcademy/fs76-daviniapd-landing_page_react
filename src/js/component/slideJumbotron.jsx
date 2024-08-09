import React from "react";
import PropTypes from "prop-types";
import "./styles.css";


const textStyles = {
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
}

const SlideJumbotron = (props) => {
    return (
        <>
            <svg
                className="placeholder col-12 placeholder p-5 opacity-100"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                style={{
                    backgroundImage: `url(${props.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >

            </svg>
            <div className="carousel-caption d-block mb-4" style={textStyles}>
                <h2>{props.titleSlide}</h2>
                <p>{props.descriptionSlide}</p>
                <button href={props.urlButtonSlide} className="btn btn-success shadow-md" target="_blank">{props.labelButtonSlide}</button>
            </div>
        </>
    );
};

SlideJumbotron.prototypes = {
    backgroundImage: PropTypes.string,
    titleSlide: PropTypes.string,
    descriptionSlide: PropTypes.string,
    urlButtonSlide: PropTypes.string,
    labelButtonSlide: PropTypes.string
};

export default SlideJumbotron;