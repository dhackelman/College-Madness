import React from 'react';
import Matchup from './Matchup';

class Round64 extends React.Component {
    loadTeams() {
      this.props.search('East');
    }
    render() {
        return (
            <div className="round_64__container">
                <Matchup/>
                <Matchup/>

                <Matchup/>
                <Matchup/>

                <Matchup/>
                <Matchup/>

                <Matchup/>
                <Matchup/>

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

export default Round64;
