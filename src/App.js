import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Result from "./Result";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,

      results: ""
    };
  }
  // query
  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const character = data.results.map(result => {
          if (result.name === this.state.query) {
            return character.push(result);
          }
        });
        this.setState({ character });
        console.log("characters in fetch:", character);
      });
  }

  handleSearch = searchTerm => {
    console.log(searchTerm);
    // const { results } = this.state;
    // const search = searchTerm.value;
    // const result = results;
    // const found = search.match(result);
    // if (search === result) {
    //   results.push(result);
    this.setState({
      query: searchTerm
    });
  };

  render() {
    const resultList = this.state.results;
    return (
      <div className="App">
        <header className="App-header">
          <h1>In a galaxy far, far away...</h1>
          <SearchForm handleSearch={this.handleSearch} />
          <ul>
            {/* {this.state.results.map((result, i) => (
              <div key={i}>
                only display results if
                searchTerm matches the result in API 
                <Result result={resultList} />
              </div>
            ))} */}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
