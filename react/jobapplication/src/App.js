import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputform from './components/Inputform.js';
import Jobdetails from './components/Jobdetails.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

class App extends Component {

  state = {
    result: []
  }



  fetchJobs() {
    const apiURL = "./listing.json";

    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        this.setState({ result: data })
      })
      .catch((err) => console.log('err', err))
  }

  componentDidMount() {
    this.fetchJobs()
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Jobdetails job={this.state.result} />
          <Inputform />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
