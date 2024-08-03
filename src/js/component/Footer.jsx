import React from "react";

const Footer = () => {
    return (
        <footer className="text-light bg-dark py-4">
            <div className="container">
                <p className="float-end mt-2">
                <a href=""><button type="button" class="btn btn-outline-info btn-sm">Back to top</button></a>
                </p>
                <p className="mb-1"> © Cartoon Saloon | Copyright 2024 </p>
                <p className="mb-0">If you want to know more about us: 
                <span> <a href="https://www.cartoonsaloon.ie/">Visit our old website</a></span>
                .</p>
            </div>
        </footer>
    );
};

export default Footer;