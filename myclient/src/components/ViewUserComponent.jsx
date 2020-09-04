import React, { Component } from 'react';
import UserService from '../services/UserService';

class ViewUserComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data.data});
        });
    }

    render() {
        return (
            <div>
                <div class="jumbotron" style={{backgroundColor: 'lightblue', height : '600px'}}>
                    <div class="container text-center">
                        <h1 class="display-3">Yay! The recipe has just been texted to your phone!</h1>
                            <div class="group">
                                <label><strong>Name of the Person We Messaged: &nbsp;</strong></label>
                                <div>{this.state.user.name}</div>
                                <label><strong>Number we Messaged to: &nbsp;</strong></label>
                                <div>{this.state.user.number}</div>
                                <label><strong>Ingredients that the Recipe is based on: &nbsp;</strong></label>
                                <div>{this.state.user.body}</div>
                            </div>
                            </div>
                </div>
                

            </div>
        );
    }
}

export default ViewUserComponent;