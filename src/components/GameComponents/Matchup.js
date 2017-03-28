import React from 'react';
import Team from './Team';

class Matchup extends React.Component {

    render() {
        return (
            <div className="matchup__container">
              <Team home={this.props.team1} away={this.props.team2} round={this.props.round} selectTeam={this.props.selectTeam}/>
              <Team home={this.props.team2} away={this.props.team1} round={this.props.round} selectTeam={this.props.selectTeam}/>
            </div>
        );
    }
}

export default Matchup;
