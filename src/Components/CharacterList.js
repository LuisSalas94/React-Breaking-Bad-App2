import React from "react";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ characters }) => {
	return (
		<section className="cards">
			{characters.map((character) => (
				<CharacterListItem character={character} key={character.char_id} />
			))}
		</section>
	);
};

export default CharacterList;
