import React from  'react';
import Register from './Register';
import Login from './Login';

const Auth = (props) => {
    return(
        <div className="AuthNav">
            <div>
                <Register setToken={props.setToken}/>
            </div> 
            <div>
                <Login setToken={props.setToken}/>
            </div>    
        </div>  
    )
}

export default Auth;