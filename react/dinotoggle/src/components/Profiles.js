import React, { Component } from 'react';
import Skills from'./Skills.js';


class Profiles extends Component {
    constructor(props) {
        super(props);
      }

    toggleDetails = (e) => {
        e.preventDefault()
        console.log('event', e)
        console.log('e.target',e.target)
        console.log('parent', e.target.parentNode)
        console.log('child', e.target.parentNode.nextElementSibling)
      if(e.target.parentNode.classList.contains('profile-header')) {
        e.target.parentNode.nextElementSibling.classList.toggle('hidden');
            
    }
}   

    render() {
        return (
        <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles"></ul>
            {this.props.list.map( (item, index) => {
                return (
                    <li key = {index}>
                    <div class="profile-card" onClick = {this.toggleDetails}>
                    <header class="profile-header">
                        <img src={item.image} />
                        <h2>{item.name}</h2>
                    </header>
                    {/* <section class="skills-container hidden"> */}
                    <section class="skills-container hidden">
                        <h4>Skills</h4>
                        <ul>
                        <Skills key = {index} list = {item.skills}/>
                        </ul>
                    </section>        
                    </div>
                    </li> 
                )
            }
            
            )}     
        </section>
        )
    }
}

export default Profiles;





