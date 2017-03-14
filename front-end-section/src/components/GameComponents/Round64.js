import React from 'react';
import Matchup from './Matchup';

class Round64 extends React.Component {

    render() {
        return (
            <div className="round_64__container">
                <h1>Round of 64</h1>
                  <div className="round_64__container">
                  <div className="connector__container">
                    <Matchup></Matchup>
                    <Matchup></Matchup>
                  </div>

                  <div className="connector__container">
                    <Matchup></Matchup>
                    <Matchup></Matchup>
                  </div>
                  <div className="connector__container">
                    <Matchup></Matchup>
                    <Matchup></Matchup>
                  </div>
                  <div className="connector__container">
                    <Matchup></Matchup>
                    <Matchup></Matchup>
                  </div>
                  </div>
            </div>
        );
    }
}

export default Round64;
