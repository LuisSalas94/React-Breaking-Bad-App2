import React, { useState, useEffect } from "react";
import CharacterList from "./Components/CharacterList";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Spinner from "./Components/Spinner";

function App() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [query, setQuery] = useState("");

	const callBreakindBadAPI = async () => {
		const url = `https://www.breakingbadapi.com/api/characters?name=${query}`;
		const resp = await fetch(url);
		const data = await resp.json();
		setCharacters(data);
		setLoading(false);
	};

	useEffect(() => {
		callBreakindBadAPI();
	}, [query]);

	return (
		<div className="container">
			<Navbar />
			<SearchBar setQuery={(query) => setQuery(query)} />
			{loading ? <Spinner /> : <CharacterList characters={characters} />}
		</div>
	);
}

export default App;
