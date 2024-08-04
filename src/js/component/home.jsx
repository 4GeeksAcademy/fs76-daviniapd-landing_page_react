import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
import PropTypes from "prop-types";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 m-3 g-3 d-flex justify-content-around">
				<Card
					imageCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dx7_rsQyERNz81p6Yu8JnpS_uLtHma7yRA&s"
					titleCard="Título de la tarjeta 1"
					descriptionCard="Descripción de la tarjeta 1"
					urlButton=""
					labelButton="Texto del botón 1"
				/>
				<Card
					imageCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dx7_rsQyERNz81p6Yu8JnpS_uLtHma7yRA&s"
					titleCard="Título de la tarjeta 2"
					descriptionCard="Descripción de la tarjeta 2"
					urlButton=""
					labelButton="Texto del botón 2"
				/>
				<Card
					imageCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dx7_rsQyERNz81p6Yu8JnpS_uLtHma7yRA&s"
					titleCard="Título de la tarjeta 3"
					descriptionCard="Descripción de la tarjeta 3"
					urlButton=""
					labelButton="Texto del botón 3"
				/>
				<Card
					imageCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4dx7_rsQyERNz81p6Yu8JnpS_uLtHma7yRA&s"
					titleCard="Título de la tarjeta 4"
					descriptionCard="Descripción de la tarjeta 4"
					urlButton=""
					labelButton = "Texto del botón 4"
				/>
			</div>
			<Footer />

		</>
	);
};

export default Home;


// <div className="text-center">
// 	<h1 className="text-center mt-5">Hello Rigo!</h1>
// 	<p>
// 		<img src={rigoImage} />
// 	</p>
// 	<a href="#" className="btn btn-success">
// 		If you see this green button... bootstrap is working...
// 	</a>
// 	<p>
// 		Made by{" "}
// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
// 		love!
// 	</p>
// </div>