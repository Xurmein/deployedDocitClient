import React from 'react';
import DocitIndex from './DocitIndex';

const Splash = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
                <DocitIndex token={props.sessionToken} />
            </div>
        </div>
    )
}

export default Splash;