import React from 'react';
import FinalMatchup from './FinalMatchup';
import FinalTeam from './FinalTeam';

class FinalRound extends React.Component {

  render() {


    let allMatchups = [];
    let teams = this.props.teams;

      for (let index = 0; index < teams.length; index+=2) {
          let team1 = teams[index];
          let team2 = teams[index+1];
          allMatchups.push(<FinalMatchup key={`${team1.team.abbrev}-match`} matchupId={`${team1.team.abbrev}-match`} team1={team1} team2={team2} round={this.props.round} selectFour={this.props.selectFour}></FinalMatchup>);
      }


      return (
          <div className={`${this.props.round}__container`}>
              {allMatchups}
          </div>
      );
    }
}

export default FinalRound;
