import React from 'react';
import AuthNav from './AuthNav';

const Home = (props) => {
        return(
            <div className="main">
               
                    <div id="AuthNav">
                        <AuthNav setToken={props.setToken}/>
                    </div>
               
            </div>
        )
    }


export default Home;