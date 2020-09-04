import React, { Component } from 'react';
import UserService from '../services/UserService';
import Table from 'react-bootstrap/Table'

class ListUserComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }

    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    //best place to call a rest api
    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
        });
    }

    addUser(){
        this.props.history.push('/add-user/_create');
    }

    render() {
        return (
            <div>

                <div class="jumbotron" style={{backgroundColor: 'lightblue'}}>
                <h1 class="display-4">Hello! Can't decide what to cook?</h1>
                <p class="lead">Use the blue button below to fill out the ingredients you have and then get a text message for a recommended recipe!</p>
                <hr class="my-4"></hr>
                <p class="lead">
                    <div class="text-center">
                        <button className="btn btn-primary btn-lg btn-block" onClick={this.addUser}> Add A Fridge</button>
                    </div>
                </p>
                </div>
                
                <h2 className="text-center">All Fridge Lists</h2>
                <div className="row">
                </div>
                <div className="row">
                    <Table className = "table table-striped table-bordered hover">

                        <thead>
                            <tr>
                                <th> Fridge Belongs to</th>
                                <th> Owner's Number</th>
                                <th> Ingredients in Fridge</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.id}>
                                        <td> { user.name } </td>
                                        <td> { user.number } </td>
                                        <td> { user.body } </td>
                                        <td>
                                            <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">Send the Recipe! </button>
                                        </td>
        
                                    </tr>
                                )
                            }

                        </tbody>

                    </Table>
                </div>
                <br /> 
                <br /> 
            </div>
        );
    }
}

export default ListUserComponent;