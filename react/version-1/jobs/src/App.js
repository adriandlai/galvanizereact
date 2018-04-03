import React, { Component } from 'react';
import './App.css';
import Joblist from './components/Joblist.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Form from './components/Form.js';


class App extends Component {

  state = {
    result: [],

  };

  onSubmit = (value) => {
    console.log('daddyResult', value)
    const result = this.state.result.concat(value)

    this.setState(
      { result }
    )
  }

  fetchJobs() {
    const apiURL = "./listings.json";

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
          <Joblist list={this.state.result} />
          <Form onFormSubmit={this.onSubmit} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;





