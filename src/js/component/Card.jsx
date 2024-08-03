import React from "react";

const Card = () => {
    return (
        <div className="card col m-3 p-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dx7_rsQyERNz81p6Yu8JnpS_uLtHma7yRA&s" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};

export default Card;