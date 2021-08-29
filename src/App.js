import React, { useState } from "react";
import "./styles.css";

const allGenres = {
	superhero: [
		{
			name: "Black Panther",
			description:
				"Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name.",
			rating: "5/5",
			trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU"
		},
		{
			name: "Logan",
			description:
				"Logan is a 2017 American superhero film starring Hugh Jackman. The film based in an alternate future, follows an aged Wolverine and an extremely ill Charles Xavier who defends a young mutant named Laura from the villainous Reavers",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=Div0iP65aZo"
		},
		{
			name: "Deadpool",
			description:
				"Deadpool is a 2016 American superhero film based on the Marvel Comics character of the same name.",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=Xithigfg7dA"
		},
		{
			name: "Avengers Endgame",
			description:
				"Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers.",
			rating: "5/5",
			trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
		}
	],

	comedy: [
		{
			name: "The Hangover",
			description:
				"The Hangover is a trilogy of American comedy films. All three films follow the misadventures of a quartet of friends.",
			rating: "5/5",
			trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M"
		},
		{
			name: "Neighbors",
			description:
				"Neighbors (released in some countries as Bad Neighbours) is a 2014 American comedy film. The plot follows a couple who come into conflict with a fraternity that has recently moved in next door, which leads them into an all out war.",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=KrAf5ALLxGI"
		},
		{
			name: "Game Night",
			description:
				"Game Night is a 2018 American action comedy film. The film follows a group of friends whose game night turns into a real-life mystery after one of them is kidnapped by apparent burglars.",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=qmxMAdV6s4U"
		},
		{
			name: "American Pie",
			description:
				"American Pie is a film series consisting of four sex comedy films.",
			rating: "3/5",
			trailer: "https://www.youtube.com/watch?v=iUZ3Yxok6N8"
		}
	],

	thriller: [
		{
			name: "Tenet",
			description:
				"Tenet is a 2020 science fiction action thriller film. The film follows a secret agent who learns to manipulate the flow of time to prevent an attack from the future.",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo"
		},
		{
			name: "The Platform",
			description:
				"The Platform is a 2019 Spanish social science fiction-horror film is set in a large, tower-style 'Vertical Self-Management Center'. Its residents, who are switched every 30 days between its many floors, are fed via a platform.",
			rating: "5/5",
			trailer: "https://www.youtube.com/watch?v=RlfooqeZcdY"
		},
		{
			name: "Bird Box",
			description:
				"Bird Box is a 2018 American post-apocalyptic horror thriller film which follows the character Malorie Hayes as she tries to protect herself and two children from entities which cause people who look at them to die by suicide.",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=o2AsIXSh2xo"
		},
		{
			name: "Fractured",
			description:
				"Fractured is a 2019 American psychological thriller film that follows a man desperate to find his wife and child in a hospital that’s determined to thwart him at every turn.",
			rating: "4/5",
			trailer: "https://www.youtube.com/watch?v=sCimThZW-Ew"
		}
	]
};

export default function App() {
	const [genre, setGenre] = useState("superhero");
	function onClickHandler(genre) {
		setGenre(genre);
	}

	return (
		<div className="App">
			<h1>
				<span role="img" aria-label="Clapper Board">
					🎬
				</span>{" "}
				good movies
			</h1>
			<p>Check out my favourite movies. Select a genre to get started.</p>

			<div>
				{Object.keys(allGenres).map((genre) => (
					<button
						key={genre}
						className="genreSelectorButton"
						onClick={() => onClickHandler(genre)}
					>
						{genre.charAt(0).toUpperCase() + genre.slice(1)}
					</button>
				))}
			</div>
			<hr />

			<div>
				<ul style={{ paddingInlineStart: "0px" }}>
					{allGenres[genre].map((movie) => (
						<li className="listItem" key={movie.name}>
							<span className="nameTxt">{movie.name}</span>
							<span className="ratingTxt">{movie.rating}</span>
							<div className="descriptionTxt">
								{movie.description}
							</div>
							<div className="trailerDiv">
								<a href={movie.trailer} className="trailerLink">
									See Trailer
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
			<hr />
			<div>
				Made with{" "}
				<span role="img" aria-label="Red Heart">
					❤️
				</span>{" "}
				by{" "}
				<a
					href="https://bruh.dev"
					style={{
						textDecoration: "none",
						fontSize: "1.1rem",
						color: "var(--primary-color)"
					}}
				>
					Chaitanya
				</a>
			</div>
			<a href="https://twitter.com/ChhikaraBRUH">
				<img
					alt="Twitter Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384017.png"
				/>
			</a>
			<a href="https://github.com/ChhikaraBRUH">
				<img
					alt="GitHub Icon"
					src="https://image.flaticon.com/icons/png/512/733/733609.png"
				/>
			</a>
			<a href="https://linkedin.com/in/ChaitanyaChhikara">
				<img
					alt="LinkedIn Icon"
					src="https://image.flaticon.com/icons/png/512/1384/1384014.png"
				/>
			</a>
		</div>
	);
}
