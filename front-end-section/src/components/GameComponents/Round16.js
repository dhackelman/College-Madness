import React from 'react';
import Matchup from './Matchup';

class Round16 extends React.Component {

    render() {
        return (
            <div className="round_16__container">

                <h1>Sweet 16</h1>
                  <div className="connector__container">
                    <Matchup/>
                    <Matchup/>
                  </div>
                  <div className="connector__container">
                    <Matchup/>
                    <Matchup/>
                  </div>
            </div>
        );
    }
}

export default Round16;
