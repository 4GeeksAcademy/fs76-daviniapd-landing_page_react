import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {

    return (
        <div className="card border-success col m-3 p-0">
            <iframe className="rounded" 
            src={props.videoCard} 
            frameborder="0" 
            title="Cartoon Saloon Trailer" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen = "true">
            </iframe>
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.descriptionCard}</p>
                <div className="d-flex justify-content-center">
                <a href={props.urlButton} className="btn btn-outline-success" target="_blank">{props.labelButton}</a>
                </div>
            </div>
        </div>

    );
};

Card.propTypes = {
    videoCard: PropTypes.string,
    titleCard: PropTypes.string,
    descriptionCard: PropTypes.string,
    urlButton: PropTypes.string,
    labelButton: PropTypes.string
};

export default Card;