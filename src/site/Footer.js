import React from 'react';
import { Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <Row>
                <p className="byline">by: Jake Peacock</p>
                <p className="copy">&copy; 2018</p>
                <p className="citations"><Link to="">Citations</Link></p>
            </Row>
        </footer>
    )
}

export default Footer;