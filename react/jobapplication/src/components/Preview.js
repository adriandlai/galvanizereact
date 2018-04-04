import React, { Component } from 'react';


class Preview extends Component{

onPreview = (event) => {
    console.log('clickevent', event)
    console.log('event.target', event.target)
    console.log('sibling', event.target.nextElementSibling)

    event.target.nextElementSibling.classList.toggle('hidden');

}


handleChange = (event) => {
    console.log('changed!!!', { [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }


    render(){
        return(
            <div>
            <button id="preview-toggle" onClick = {this.onPreview}>Show Preview</button>
            <section id="application-preview" className= "hidden">{this.props.text}</section>
           </div>
        )
    }
}

export default Preview;


