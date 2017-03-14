import React from 'react';
import {Link} from 'react-router';
import Matchup from './Matchup';

class Round32 extends React.Component {

    render() {
        return (
            <div className="round_32__container">
                <Matchup/>
                <Matchup/>

                <Matchup/>
                <Matchup/>

                <Matchup/>
                <Matchup/>

                <Matchup/>
                <Matchup/>

            </div>
        );
    }
}

export default Round32;
