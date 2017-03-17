import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {

    render() {
      const teams = this.props.TeamData;

        return (
            <div className="round_32__container">
              {this.props.searchWins()}
            </div>
        );
    }
}

export default Round32;
