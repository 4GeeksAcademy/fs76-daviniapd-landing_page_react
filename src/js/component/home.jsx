import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 m-3 g-3 d-flex justify-content-around">
			<Card />
			<Card />
			<Card />
			<Card />
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