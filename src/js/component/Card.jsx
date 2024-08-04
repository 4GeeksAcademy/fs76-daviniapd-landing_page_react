import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="card col m-3 p-0">
            <img src={props.imageCard} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.descriptionCard}</p>
                <a href={props.urlButton} className="btn btn-primary">{props.labelButton}</a>
            </div>
        </div>

    );
};

Card.propTypes = {
    imageCard: PropTypes.string,
    titleCard: PropTypes.string,
    descriptionCard: PropTypes.string,
    urlButton: PropTypes.string,
    labelButton: PropTypes.string
};

export default Card;