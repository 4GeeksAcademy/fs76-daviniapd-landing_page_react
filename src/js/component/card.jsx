import React from "react";
import PropTypes from "prop-types";
import "./styles.css";



const Card = (props) => {

    return (
        <div className="card border-success col m-3 mt-1 border-0 p-0">
            <iframe className="rounded" 
            src={props.videoCard} 
            title="Cartoon Saloon Trailer" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen={true}>
            </iframe>
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.descriptionCard}</p>
                <div className="d-flex justify-content-center"> 
                <a href={props.urlButton} target="_blank"><button className="btn btn-outline-success border-2">{props.labelButton}</button></a>
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