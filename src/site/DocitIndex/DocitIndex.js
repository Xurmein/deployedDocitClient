import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import NewDocIt from './CreateNewDocIt';
import DocItTable from './DocItTable';
import DocItEdit from './DocItEdit';
import APIURL from '../../helpers/environment';


class DocitIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            docits: [],
            updatePressed: false,
            docitToUpdate: {},
            // modal: false
        }
    }

    fetchDocIts = () => {
        fetch(`${APIURL}/my/docit-index/docits`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((response) => response.json())
            .then((docitLog) => {
                return this.setState({ docits: docitLog })
            })
    }    

    docitDelete = (event) => {
        fetch(`${APIURL}/my/docit-index/docitDelete/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ docit: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        }).then((res) => this.fetchDocIts())
    }

   

    pickDocitToEdit = (event, docit) => {
        this.setState({
            docitToUpdate: docit,
            updatePressed: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
    }


    componentDidMount() {
        this.fetchDocIts();
    }

    render() {
        const docits = this.state.docits.length >= 1 ?
            <DocItTable docits={this.state.docits} delete={this.docitDelete} update={this.pickDocitToEdit} /> : <h4>Create doc[It] to view your Calendar</h4>
        return (


            <div>
                <div >

                    <h2 id="h2">Your doc[It] collection</h2>
                    <div>
                        <div>
                            <Container>
                                <Row>
                                    <Col md="3" id="new-Docit">
                                        <NewDocIt token={this.props.token} updateDocItArray={this.fetchDocIts} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container>
                                <Row>
                                    <Col md="6" id="docitIndex">
                                        {docits}
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md="6">
                                    {
                                        /* chosenDocit = activity; */
                                    this.state.updatePressed ? <DocItEdit t={this.state.updatePressed} docit={this.state.docitToUpdate} updateDocItArray={this.fetchDocIts} />
                                    : <div className="modal"></div>
                                    }
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div> 
            </div>

        );
    }
}

export default DocitIndex;