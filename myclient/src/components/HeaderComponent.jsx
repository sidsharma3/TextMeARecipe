import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    viewUser(id){
        return this.props.history
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="" className="navbar-brand">Text Yourself a Recipe!</a>
                        <a class="navbar-brand navbar-light " href="http://localhost:5000/">Home <span class="sr-only">(current)</span></a>
                        <a class="navbar-brand navbar-light " href="http://localhost:5000/add-user/_create">Create a Fridge <span class="sr-only">(current)</span></a>
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
