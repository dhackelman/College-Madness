import React from 'react';
import FinalMatchup from './FinalMatchup';
import FinalTeam from './FinalTeam';


import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';



class FinalFour extends React.Component {
  constructor() {
      super();
      this.selectFour = this.selectFour.bind(this);

      this.state = {
          round4: Dummy4.user_predictions,
          round2: []
      }
  }

    selectFour(winTeamId) {
      console.log('in f4 - select Team ', winTeamId);
      let round2 = [...this.state.round2];
      round2.push(winTeamId);
      this.setState({round2});
    }

    render() {
      // let allMatchups = [];
      // let teams = this.props.teams;
      // console.log('teams in f4 matchup ', teams);
      // teams.map((team) => {
      //
      //   return <FinalTeam key={`${team.abbrev}-match`} matchupId={`${team.abbrev}-match`} selectTeam={this.selectTeam}></FinalMatchup>);
      // })

          // allMatchups.push(<FinalMatchup key={`${team1.team.abbrev}-match`} matchupId={`${team1.team.abbrev}-match`} team1={team1} team2={team2} round={this.props.round} selectTeam={this.props.selectTeam}></FinalMatchup>);
        return (
            <div className="region__common">
              {this.props.teams.map((team) => {
                console.log('team in map ', team);
                console.log('team abbr ', team.abbrev);
                  return <FinalTeam key={team.abbrev} home={team}  selectFour={this.selectFour}/>})}
            </div>
        );
    }
}

export default FinalFour;
