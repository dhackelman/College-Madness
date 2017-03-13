import React from 'react';
import {Link} from 'react-router';

class Round8 extends React.Component {

    render() {
        return (
            <div className="round_8__container">

                <h1>Elite 8</h1>
                <Link to='round4'>Go To Final Four</Link>
            </div>
        );
    }
}

export default Round8;
