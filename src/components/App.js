import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import './App.css';

class App extends Component {

  loadDataClickHandler = () => {
    const { loadData } = this.props;
    loadData();
  }

  render() {

    const { jedi, planet, starship } = this.props;
  
    return (
      <div className="App">
        <button onClick={this.loadDataClickHandler}>Show Me Star Wars Info!<br/>:: May the ForkJoin Be With You ::</button>

        <div className="data">
          {jedi &&
            <div>
            <strong>Name: {jedi.name}</strong><br />
            Height: {jedi.height}<br />
            Mass: {jedi.mass}<br />
            Hair Color: {jedi.hair_color}<br />
            Eye Color: {jedi.eye_color}<br />
            Birth Year: {jedi.birth_year}
            </div>
          }
          {planet &&
            <div>
            <strong>Name: {planet.name}</strong><br />
            Rotation Period: {planet.rotation_period}<br />
            Orbital Period: {planet.orbital_period}<br />
            Diameter: {planet.diameter}<br />
            Gravity: {planet.gravity}<br />
            Population: {planet.population}
            </div>
          }
          {starship &&
            <div>
            <strong>Name: {starship.name}</strong> <br />
            Model: {starship.model}<br />
            Class: {starship.starship_class}<br />
            Cost: {starship.cost_in_credits} credits<br />
            Length: {starship.length}<br />
            Hyperdrive Rating: {starship.hyperdrive_rating}
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jedi: state.jedi,
    planet: state.planet,
    starship: state.starship
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(actions.loadData());
    }
  }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
