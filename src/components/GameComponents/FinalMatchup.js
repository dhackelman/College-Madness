import React from 'react';
import FinalTeam from './FinalTeam';

class FinalMatchup extends React.Component {

    render() {
      console.log('in finalMatchup ', this.props);
        return (

            <div className="matchup__container">
              <FinalTeam  home={this.props.team1} away={this.props.team2} round={this.props.round} teams={this.props.teams} selectTeam={this.props.selectTeam}/>
              <FinalTeam  home={this.props.team2} away={this.props.team1} round={this.props.round} teams={this.props.teams} selectTeam={this.props.selectTeam}/>
            </div>

        );
    }
}

export default FinalMatchup;
