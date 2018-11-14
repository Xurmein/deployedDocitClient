import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import APIURL from '../../helpers/environment';


class NewDocIt extends Component{
    constructor(props){
        super(props)
        this.state = {
            owner : '',
            docName : '',
            day : '',
            time : '',
            description:  '',
            user_categoty : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
            fetch(`${APIURL}/my/docit-index/docitCreate`, {
                method : 'POST',
                body : JSON.stringify({ docit : this.state}),
                headers :  new Headers({
                    'Content-Type' : 'application/json',
                    'Authorization' : this.props.token
                })
            }).then(
                (res) => res.json()
                ).then((docitLog) => {
                    this.props.updateDocItArray();
                    this.setState({
                        owner: '',
                        docName: '',
                        day: '',
                        time: ''
                    })
                })
    }

    render(){
        return(
            <div className="main">
                <div className="mainDiv" id="makeDocit">
               <div >
                    <h4>Make a doc[It]</h4>
                    <hr />

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="docName">doc[It] name</Label>
                            <Input id="docName" type="text" name="docName" value={this.state.docName} onChange={this.handleChange} placeholder="what's the occassion?" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="day">Day of the Week</Label>
                            <Input id="day" type="select" name="day" value={this.state.day} onChange={this.handleChange} placeholder="Which day of the week?" required >
                                <option placeholder="ctrl + click, to select multiple options"></option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="time">What time?</Label>
                            <Input id="time" type="time" name="time" value={this.state.time.toString()} onChange={this.handleChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Notes:</Label>
                            <Input id="description" type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_category">Category:</Label>
                            <Input id="user_category" type="text" name="user_category" value={this.state.user_category} onChange={this.handleChange} />
                        </FormGroup>
                        <Button type="submit">doc[It]</Button>
                    </Form>
                    </div>
                </div>
                </div>
        )
    }
}

export default NewDocIt;