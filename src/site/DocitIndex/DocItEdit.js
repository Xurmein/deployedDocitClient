import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';

class DocItEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: props.chosenDocit,
            owner : '',
            docName: '',
            day: '',
            time: '',
            description: '',
            user_category: ''
        }
    }

    componentWillMount(){
        this.setState({
            id: this.props.docit.id,
            owner: this.props.docit.owner,
            docName: this.props.docit.docName,
            day: this.props.docit.day,
            time: this.props.docit.time,
            description: this.props.docit.description,
            user_category: this.props.docit.user_category
        })
    }

    docitUpdate = (event, docit) => {
        let chosenDocit;
        for(let activity of this.state.docits){
            if(activity.id === docit.id){
               chosenDocit = activity;
            }
        }

        fetch(`http://localhost:3666/my/docit-index/docitUpdate/${docit.id}`, {
            method: 'PUT',
            body: JSON.stringify({ docit: chosenDocit }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
            }).then((res) => {
                this.fetchDocIts();
                this.setState({ updatePressed: false })
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = (event) => { 
        event.preventDefault();
        this.props.update(event, this.state)
    }

  /* chosenDocit = activity; */
    render(){
        return(
                                             

                <div className="modal">
                    <Modal isOpen={true}>
                        <ModalHeader>doc[It] Edit Component</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="docName">doc[It] name</Label>
                                    <Input id="docName" type="text" name="docName" value={this.state.docName} placeholder="what's the occassion?" onChange={this.handleChange} required />
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
                                    <Label for="description">Description/notes</Label>
                                    <Input id="description" type="text" name="description" value={this.state.description} onChange={this.handleChange}  />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="user_category">Category</Label>
                                    <Input id="user_category" type="text" name="user_category" value={this.state.user_category} onChange={this.handleChange} />
                                </FormGroup>
                                <Button type="submit">Edit doc[It]</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
           
        )
    }
}

export default DocItEdit;