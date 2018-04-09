import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  
  state = {
    id: '',
    title: '',
    description: '',
    pay: '',
    interested: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state)
    this.reset()
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  reset = () => {
    this.setState({
      id: '',
      title: '',
      description: '',
      pay: '',
      interested: ''
    })
  }

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.onFormSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
          <label htmlFor="pay">Compensation</label>
          <input onChange={this.handleChange} type="text" name="pay" value={this.state.pay} />
          <label htmlFor="description">Description</label>
          <textarea onChange={this.handleChange} name="description" value={this.state.description} rows="8" cols="40"></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}

export default Form;
