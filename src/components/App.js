import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import './App.css';

class App extends Component {

  loadDataClickHandler = () => {
    const { loadData } = this.props;
    console.log("clicked");
    loadData();
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.loadDataClickHandler}>Show me Star Wars Info!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPinging: state.ping
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(actions.loadData());
    }
  }
};

App = connect(null, mapDispatchToProps)(App);
export default App;
