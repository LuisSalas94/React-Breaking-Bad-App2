import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
	const [text, setText] = useState("");

	const handleChange = (e) => {
		setText(e.target.value);
		setQuery(e.target.value);
	};

	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search your character"
					autoFocus
					name="search"
					value={text}
					onChange={handleChange}
					id="search"
				/>
			</form>
		</section>
	);
};

export default SearchBar;
