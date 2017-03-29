import React from 'react';
import Matchup from './Matchup';

class Round extends React.Component {

  componentWillUpdate(nextProps, nextState) {
    nextProps.local();
  }

    render() {
      let allMatchups = [];
      let teams = this.props.teams;
      for (let index = 0; index < teams.length; index+=2) {
          let team1 = teams[index];
          let team2 = teams[index+1];
          allMatchups.push(<Matchup key={`${team1.team.abbrev}-match`} matchupId={`${team1.team.abbrev}-match`} team1={team1} team2={team2} round={this.props.round} selectTeam={this.props.selectTeam}></Matchup>);
      }
        return (
            <div className={`${this.props.round}__container`}>
                {allMatchups}
            </div>
        );
    }
}

export default Round;
