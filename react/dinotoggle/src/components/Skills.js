import React, { Component } from 'react';



class Skills extends Component{


render(){
    
        return(
            this.props.list.map((item, index) => {
            return(
            <li key = {index}>{item}</li>
                )})
                 
        )
    }
}  


export default Skills;


       