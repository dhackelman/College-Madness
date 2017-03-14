import React from 'react';
import {Link} from 'react-router';

class Container extends React.Component { render() {
        return (
            <div className="component__container">
                <h1>This is the component container</h1>
                <Link to='bracket'>Go To Bracket</Link>
            </div>
        );
    }
}export default Container;
