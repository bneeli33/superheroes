import React, { Component } from 'react';
import CardList from './Components/CardLists/CardList';
import SearchBox from './Components/SearchBox/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      superheroes: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ superheroes: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { superheroes, searchField } = this.state;
    const filteredHeroes = superheroes.filter((superhero) =>
      superhero.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>SuperHeroes</h1>
        <SearchBox
          placeholder="Search SuperHeroes"
          handleChange={this.handleChange}
        />
        <CardList superheroes={filteredHeroes} />
      </div>
    );
  }
}
export default App;
