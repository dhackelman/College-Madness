import React from 'react';
import FinalRound from './FinalRound';
import Dummy2 from '../../Data/Dummy2.js';
import Dummy0 from '../../Data/Dummy0.js';
import FinalChamp from './FinalChamp';

class FinalFour extends React.Component {
  constructor() {
      super();
      this.selectFour = this.selectFour.bind(this);
      this.state = {
          NatChampGame: Dummy2.user_predictions,
          Champ: Dummy0.user_predictions
      }
  }

  selectFour(winTeamId, loseTeamId, roundId) {

    // let allTeams = this.props.allTeams;
    let winTeam = this.props.allTeams[winTeamId - 1];
    let loseTeam = this.props.allTeams[loseTeamId - 1];

    if (roundId === 'round_4') {
      winTeam.predicted_wins = 5;
      loseTeam.predicted_wins = 4;
      let finals = [...this.state.NatChampGame];
      if (winTeam.team.region === 1 || winTeam.team.region === 2) {
        finals[0] = winTeam;
      }
      if (winTeam.team.region === 3 || winTeam.team.region === 4) {
        finals[1] = winTeam;
      }
      this.setState({NatChampGame:finals});
     }

     if (roundId === 'round_2') {
       winTeam.predicted_wins = 6;
       loseTeam.predicted_wins = 5;
       let champ = [...this.state.Champ];
       champ[0] =  winTeam;
       this.setState({Champ: champ});
      }
    }

    render() {

      return (
            <div className="region">
              <FinalRound check={this.props.check} teams={this.props.teams} round='round_4' selectFour={this.selectFour}/>
              <FinalRound check={this.props.check} teams={this.state.NatChampGame} round='round_2' selectFour={this.selectFour}/>
              <FinalChamp check={this.props.check} teams={this.state.Champ} round='round_0'/>
            </div>
        );
    }
}

export default FinalFour;
