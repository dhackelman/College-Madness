import React from 'react';
import Matchup from './Matchup';

class Round64 extends React.Component {
    loadTeams() {
      this.props.search('East');
    }
    render() {
        const regions = this.props.bracketData;

        return (
            <div className="round_64__container">
                <Matchup></Matchup>
            </div>

        );
    }
}

export default Round64;
