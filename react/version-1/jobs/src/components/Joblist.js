import React, { Component } from 'react';
import './Joblist.css';


class Joblist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h2>Job Listings</h2>
        <ul id="job-listings">
          {this.props.list.map(function (item, index) {
            return (
              <li key={index}>
                <h4>{item.title}</h4>
                <small>{item.pay} </small>
                <p>{item.description}</p>
                <small>{item.interested.length} dinos are interested in this job </small>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Joblist;