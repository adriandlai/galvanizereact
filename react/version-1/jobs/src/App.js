import React, { Component } from 'react';
import './App.css';
import logo from './dino.png'; 

const Header = () => {
return (
  <header className = "App-header">
    <img src= {logo} className="App-logo" alt="logo"/>  
  </header>
)}

const Footer = () => {
  return (
    <footer>
      <small>Copyright 2018</small>
    </footer>
  )
}

class Joblist extends Component {
constructor(props){
  super(props);

  this.state = {
    result: null
  }
  this.fetchJobs = this.fetchJobs.bind(this)
}

  fetchJobs(){ 
      let apiURL = "./listings.json";
      return (
      fetch(apiURL)
      .then(response => response.json())
      .then(result => {
        console.log('thisresult', result)
        this.setJobs(result)
      }
      )
      .catch(e => e)  
        
      
      ) 
  }

  render (){
  return (
  <section>
    <h2>Job Listings</h2>
    <ul id="job-listings">
    </ul>
  </section>
  )
  }
}

const Form = () => {
  return (
    <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form">
          <label htmlFor="title">Title</label>
          <input type="text" name="title"/>
          <label htmlFor="pay">Compensation</label>
          <input type="text" name="pay"/>
          <label htmlFor="description">Description</label>
          <textarea name="description" rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
  )
}

class App extends Component {
  render() {
    return (
        <body>
            <Header/>
            <main>
            <Joblist/>
            <Form/>
           </main>
           <Footer />
        </body>
    );
  }
}

export default App;


// function submitForm(event){
//   event.preventDefault();
//   const data = new FormData(event.target);
//   addListing({
//     title: data.get("title"),
//     pay: data.get("pay"),
//     description: data.get("description"),
//     interested: []
//   });
//   event.target.reset();
// }

// function addListing(data){
//   let container = document.querySelector("#job-listings");
//   let listing = document.createElement("li");
//   buildListing(listing, [{
//     selector: "h4",
//     data: data.title
//   },{
//     selector: "small",
//     data: `${data.pay}`
//   },{
//     selector: "p",
//     data: data.description
//   },{
//     selector: "small",
//     data: `${data.interested.length} dinos are interested in this job`
//   }]);
//   container.prepend(listing);
// }


