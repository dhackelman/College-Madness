import React from 'react';
import {Link} from 'react-router';
import Matchup from './Matchup';


class Round32 extends React.Component {

    render() {
        return (
            <div className="round_32__container">

                <h1>Round of 32</h1>
                  <div className="connector__container">
                    <Matchup/>
                    <Matchup/>
                  </div>
                  <div className="connector__container">
                    <Matchup/>
                    <Matchup/>
                  </div>
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

export default Round32;
