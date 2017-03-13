import React from 'react';
import {Link} from 'react-router';

class Round4 extends React.Component {

    render() {
        return (
            <div className="round_4__container">

                <h1>Final Four</h1>
                <Link to='round2'>Go To Championship Game</Link>
            </div>
        );
    }
}

export default Round4;
