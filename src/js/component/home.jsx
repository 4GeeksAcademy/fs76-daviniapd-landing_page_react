import React from "react";

//include images into your bundle
import NavBar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import PropTypes from "prop-types";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 m-3 g-3 d-flex justify-content-around">
				<Card
					videoCard="https://www.youtube.com/embed/kHhmfNgQ2Bg"
					titleCard="My Father's Dragon"
					descriptionCard="2022. Elmer Elevator searches for a captive Dragon on Wild Island and finds much more than he could ever have anticipated."
					urlButton="https://www.cartoonsaloon.ie/my-fathers-dragon/"
					labelButton="About this movie"
				/>
				<Card
					videoCard="https://www.youtube.com/embed/Zgsfht2YEhc"
					titleCard="WolfWalkers"
					descriptionCard="2020. After moving to Ireland, young Robyn meets Mebh, a free-spirited girl from a unusual tribe who is said to transform into a wolf at night."
					urlButton="https://www.cartoonsaloon.ie/wolfwalkers/"
					labelButton="About this movie"
				/>
				<Card
					videoCard="https://www.youtube.com/embed/CCvR5YBcpR8"
					titleCard="Song of the Sea"
					descriptionCard="2014. Ben, a young Irish boy, and his little sister Saoirse, a girl who can turn into a seal, go on an adventure to free the fairies and save the spirit world. "
					urlButton="https://www.cartoonsaloon.ie/song-of-the-sea/"
					labelButton="About this movie"
				/>
				<Card
					videoCard="https://www.youtube.com/embed/lw2_HZTuQBE"
					titleCard="The Book of Kells"
					descriptionCard="2009. A young boy in a remote medieval meets a celebrated master illuminator arrives with an ancient book, brimming with secret wisdom and powers."
					urlButton="https://www.cartoonsaloon.ie/the-secret-of-kells/"
					labelButton="About this movie"
				/>
			</div>
			<Footer />

		</>
	);
};

export default Home;
