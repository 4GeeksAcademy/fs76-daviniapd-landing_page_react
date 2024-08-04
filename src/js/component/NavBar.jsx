import React from "react";
import Logo from "/src/img/logo-cartoon-blanco.png"

const NavBarStyles = {
    background: "linear-gradient(to right, #1c774f, #1d4436)", 
    fontFamily: 'Montserrat, sans-serif',

}

const logoStyles = {
    maxWidth: "125px",
    height: "auto", 
}

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark px-5 py-1" style={NavBarStyles} aria-label="Third navbar example">
            <div className="container-fluid">
            <img src={Logo} style={logoStyles} alt="" />
                {/* <a className="navbar-brand fs-3" href="#"><b>Cartoon Saloon</b></a> */}

                <button className="navbar-toggler text-light m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-light" id="navbarsExample03">
                    <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                            <ul className="dropdown-menu bg-light bg-opacity-25">
                                <li><a className="dropdown-item" href="#">Feature Films</a></li>
                                <li><a className="dropdown-item" href="#">Short Films</a></li>
                                <li><a className="dropdown-item" href="#">TV Series</a></li>
                            </ul>    
                        </li>                    
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;