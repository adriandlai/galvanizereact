import React, { Component } from 'react';
import Preview from'./Preview.js';



class Inputform extends Component{

    state = {
        input:'',
        message: ''
      }
  
onSubmit = (event) => {
event.preventDefault();


console.log('event', event)
console.log('target', event.target)

this.setState({ message: 'Your application was submitted!'})
this.setState({input:''})

 }
 
 
handleChange = (event) => {
    console.log('changed!!!', { [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

render(){
    
        return(
            <div>
            <form id="application-input" onSubmit ={this.onSubmit}>
            <label>Apply Here: </label>
            <textarea onChange={this.handleChange} value={this.state.input} name="input" id="application-text" rows="8" cols="100"></textarea>
            <input id="submit" type="submit" value="Submit"/>
            </form>   
            <p>{this.state.message}</p> 
            <Preview text = {this.state.input}/>
            </div>
                 
        )
    }
}  

export default Inputform;


       