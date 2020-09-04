import React, { Component } from 'react';
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            number: '',
            body: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeBodyHandler = this.changeBodyHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    componentDidMount(){
        if(this.state.id === "_create") {
            return
        } else {
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data.data;
                this.setState({
                    name: user.name,
                    number: user.number,
                    body: user.body
                });
            });
        }
    }

    saveUser = (e) => {
        console.log("greeeen")
        e.preventDefault();
        let user = {name: this.state.name, number: this.state.number, body: this.state.body};
        console.log('user => ' + JSON.stringify(user));

        if (this.state.id === "_create"){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users'); 
            });
        } else {
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }

        
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeNumberHandler= (event) => {
        this.setState({number: event.target.value})
    }

    changeBodyHandler= (event) => {
        this.setState({body: event.target.value})
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === "_create"){
            return <h3 className="text-center">Add a Fridge</h3>
        } else {
            return <h3 className="text-center">Update Fridge</h3>
        }
    }
    render() {
        return (
            <div>
                <div class="jumbotron" style={{backgroundColor: 'lightblue', height : '180px'}}>
                <h1 class="display-8">Get a recipe texted to you now!</h1>
                <p class="lead">Fill out or update the form below to update what ingredients you have in your fridge and get a recipe sent right away!</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Who owns the fridge?</label>
                                        <input placeholder="Fridge Owner Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>What is the number to text the recipe to?</label>
                                        <input placeholder="Number" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>What is in your fridge right now?</label>
                                        <input placeholder="Be sure to comma seperate ingredients!" name="body" className="form-control" 
                                                value={this.state.body} onChange={this.changeBodyHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;