import React, { Component } from 'react';

class Jobdetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="job-details">
                <h2>Job Details</h2>
                <h4>{this.props.job.title}</h4>
                <p>{this.props.job.description}</p>
            </section>

        )
    }
}

export default Jobdetails;





