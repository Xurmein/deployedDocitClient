import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

// const APIURL = 'https://docitserver.herokuapp.com/'
class Register extends Component{
    constructor(props){
        super(props) 
        this.state = {
            username: '',
            passwordhash: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch(`http://localhost:3666/visitor/user/register`,{ //fetch(`${APIURL}user/register`, 
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        })
        event.preventDefault();
    }

    render(){
        return(
            <div className="register-login-container">
                <div className="register-containerDiv">
                    <h3>Register for a user account:</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username" className="label">Select a username  </Label>
                            <Input id="su_username" type="text" name="username" placeholder="username must be unique" onChange={this.handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" className="label">Select a password  </Label>
                            <Input id="su_password" type="password" name="passwordhash" placeholder="enter a password" onChange={this.handleChange} required />
                        </FormGroup>
                        <Button type="submit" className="register-button">
                            <Link to="/register">
                                <img alt="" label="register" className="register-icon" />
                            </Link>
                        </Button>  
                    </Form>
                </div>
                <hr />
            </div>
        );
    }
}

export default Register;