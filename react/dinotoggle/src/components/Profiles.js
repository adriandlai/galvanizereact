import React, { Component } from 'react'
import Skills from './Skills.js'


class Profiles extends Component {
    constructor(props) {
        super(props)
    }

    toggleDetails = (e) => {
        e.preventDefault()
        if (e.target.parentNode.classList.contains('profile-header')) {
            e.target.parentNode.nextElementSibling.classList.toggle('hidden')
        }
    }

    render() {
        return (
            <section id="profiles-container">
                <h2>Profiles</h2>
                <ul id="profiles">
                    {this.props.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="profile-card" onClick={this.toggleDetails}>
                                    <header className="profile-header">
                                        <img src={item.image} alt="profile" />
                                        <h2>{item.name}</h2>
                                    </header>
                                    <section className="skills-container hidden">
                                        <h4>Skills</h4>
                                        <ul className="skills-list">
                                            <Skills key={index} list={item.skills} />
                                        </ul>
                                    </section>
                                </div>
                            </li>
                        )
                    }

                    )}
                </ul>
            </section>
        )
    }
}

export default Profiles





