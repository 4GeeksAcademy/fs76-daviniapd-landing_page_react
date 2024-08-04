import React from "react";
import PropTypes from "prop-types";

const SlideJumbotron = (props) => {
    return (
        <>
            <h5>{props.titleSlide}</h5>
            <p>{props.titleSlide}</p>
            <button href={props.urlButtonSlide} className="btn btn-success" target="_blank">{props.labelButtonSlide}</button>
        </>
    );
};

SlideJumbotron.prototypes = {
    titleSlide: PropTypes.string,
    descriptionSlide: PropTypes.string,
    urlButtonSlide: PropTypes.string,
    labelButtonSlide: PropTypes.string
};

export default SlideJumbotron;