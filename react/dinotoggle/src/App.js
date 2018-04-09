import React, { Component } from 'react';
import './App.css';
import Profiles from './components/Profiles.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';


class App extends Component {

  state = {
    result: []

  };


  fetchList() {
    const apiURL = "./dinosaurs.json";

    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ result: data })
      })
      .catch((err) => console.log('err', err))
  }

  componentDidMount() {
    this.fetchList()
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Profiles list={this.state.result} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;



