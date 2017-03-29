import React from 'react';
import { Link } from 'react-router';

class Logout extends React.Component {

    render() {

        return (
            <div>
              <Link className="header__logout kippBtn" to="/">Logout</Link>
            </div>
        );
    }
}

export default Logout;
