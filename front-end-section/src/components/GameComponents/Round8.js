import React from 'react';
import Matchup from './Matchup';

class Round8 extends React.Component {

    render() {
        return (
            <div className="round_8__container">

                <h1>Elite 8</h1>
                  <div className="connector__container">
                    <Matchup/>
                    <Matchup/>
                  </div>
            </div>
        );
    }
}

export default Round8;
