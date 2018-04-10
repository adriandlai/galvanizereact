import React, { Component } from 'react';


class Preview extends Component {

    onPreview = (event) => {
        event.target.nextElementSibling.classList.toggle('hidden');
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <button id="preview-toggle" onClick={this.onPreview}>Show Preview</button>
                <section id="application-preview" className="hidden">{this.props.text}</section>
            </div>
        )
    }
}

export default Preview;


