import React from "react";

const FooterStyles = {
    background: "linear-gradient(to right, #1c774f, #1d4436)", 
    fontFamily: 'Montserrat, sans-serif',

}

const Footer = () => {
    return (
        <footer className="text-light bg-dark py-4" style={FooterStyles}>
            <div className="container">
                <p className="float-end mt-2">
                <a href=""><button type="button" class="btn btn-outline-light btn-sm">Back to top</button></a>
                </p>
                <p className="mb-1"> © Cartoon Saloon | Copyright 2024 </p>
                <p className="mb-0">If you want to know more about us: 
                <span> <a href="https://www.cartoonsaloon.ie/" className="text-info">Visit our old website</a></span>
                .</p>
            </div>
        </footer>
    );
};

export default Footer;