import React from 'react';
import {
    Table,
    Button
} from 'reactstrap';
import '../../stylesheets/css/DocitTable.css';

const DocItTable = (props) => {
    return(
        <div className="main">
            <div className="mainDiv">
            <h4 className="user-docit-index-header">doc[It]-index</h4>
            <hr />
            <Table className="user_docit_index">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>doc[It] name</th>
                        <th>day</th>
                        <th>time</th>
                        <th>description/notes</th>
                        <th>assigned category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.docits.map((docit, id) =>{
                            return(
                                <tr key={id}>
                                    <th scope="row">{docit.id}</th>
                                    <th>{docit.docName}</th>
                                    <td>{docit.day}</td>
                                    <td>{docit.time}</td>
                                    <td>{docit.description}</td>
                                    <td>{docit.user_category}</td>
                                    <td>
                                        <Button id={docit.id} className="delete_button" onClick={props.delete}>delete doc[It]</Button> | 
                                        | <Button id={docit.id} className="update_button" onClick={e => props.update(e, docit)}>update doc[It]</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>            
            </div>
        </div>
    )
}

export default DocItTable;