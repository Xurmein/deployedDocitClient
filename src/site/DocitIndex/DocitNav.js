import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
// import Splash from '../home/Splash';
import DocitIndex from './DocitIndex';


const DocitNav = () => {
    return (
    <section className="user-nav-container">
        <ul className="user-nav-table">
            <li>
                <button className="home-button"><Link to="/"><img alt="" label="home" className="home-icon"/></Link></button>
            </li>    
            <li className="offset1">
                <button className="about-button">{/*<Link to="/about">*/}<img alt="" label="about" className="about-icon"/>{/*</Link>*/}</button>
            </li>
            <li>
                <button className="event-button">{/* <Link to="/events">*/}<img alt="" label="events"className="events-icon" />{/*</Link>*/}</button> 
            </li>
            <li className="offset2">
                <button className="feature-button"><Link to="../DocitIndex/DocitIndex"><img alt="" label="features" className="feature-icon" /></Link></button>
            </li>                              
        </ul>
        <div className="nav-route">
            <Switch>
               
                {/* <Route exact path="/about"><About /></Route>
                <Route exact path="/events"><Events /></Route>*/}
                <Route exact path="/docitindex"><DocitIndex /></Route>
                
            </Switch>        
        </div>
    </section>
    )
}

export default DocitNav;