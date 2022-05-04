import React from "react";

const CharacterListItem = ({ character }) => {
	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={character.img} alt={character.name} />
				</div>
				<div className="card-back">
					<h1>{character.name}</h1>
					<ul>
						<li>
							<strong>Actor Name:</strong>
							{character.portrayed}
						</li>
						<li>
							<strong>Nickname:</strong>
							{character.nickname}
						</li>
						<li>
							<strong>Birthday:</strong>
							{character.birthday}
						</li>
						<li>
							<strong>Status:</strong>
							<span
								style={{
									color: character.status === "Alive" ? "green" : "red",
								}}
							>
								{character.status}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CharacterListItem;
