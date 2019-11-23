import React from "react";

export default function SearchForm(props) {
  return (
    <form
      className="form"
      onSubmit={event => {
        event.preventDefault();

        let userInput = event.target.userInput.value;
        props.handleSearch(userInput);
        event.target.userInput.value = "";
      }}
    >
      <label htmlFor="search">
        There lived...
        <input
          type="text"
          className="input"
          id="search"
          name="userInput"
          placeholder="Obi Wan Kenobi"
        />
        <button type="submit" className="Search-characters">
          Search the universe
        </button>
      </label>
    </form>
  );
}
