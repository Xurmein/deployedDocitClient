import React from 'react';
import Auth from './Auth'

const AuthNav = (props) => {
   return (
    <div id="AuthNav">
        <Auth setToken={props.setToken}/>
    </div>
   ) 
   
}

export default AuthNav;