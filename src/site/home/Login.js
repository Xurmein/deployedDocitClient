import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import APIURL from '../../helpers/environment';


class Login extends Component{
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
        fetch(`${APIURL}/visitor/user/login`, {
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
                <div className="login-containerDiv">
                <hr />
                    <h3>Sign in to doc[It]:</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="username" className="label">Enter your username:  </Label>
                            <Input id="li_username" type="text" name="username" placeholder="username" onChange={this.handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" className="label">Enter your password:  </Label>
                            <Input id="li_password" type="password" name="passwordhash" placeholder="password" onChange={this.handleChange} required />
                        </FormGroup> 
                        <Button type="submit" className="login-button">             
                            <Link to="/login">
                                <img alt="" label="login" className="login-icon" />
                            </Link>
                        </Button>   
                    </Form>
                </div>
            </div>
         
        );
    }
}

export default Login;