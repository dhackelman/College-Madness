import React from 'react';
import FinalRound from './FinalRound';
import Dummy2 from '../../Data/Dummy2.js';



class FinalFour extends React.Component {
  constructor() {
      super();
      this.selectFour = this.selectFour.bind(this);
      this.state = {
          NatChampGame: Dummy2.user_predictions,
          Champ: Dummy2.user_predictions
      }
  }


  selectFour(winTeamId, loseTeamId, roundId) {

    let allTeams = this.props.allTeams;
    let winTeam = this.props.allTeams[winTeamId - 1];
    let loseTeam = this.props.allTeams[loseTeamId - 1];

    console.log('in f4 - select Team ', winTeam);

    if (roundId === 'round_4') {
      winTeam.predicted_wins = 5;
      loseTeam.predicted_wins = 4;
      let finals = [...this.state.NatChampGame];
      console.log('pre-set', finals);
      if (winTeam.team.region === 1 || winTeam.team.region === 2) {
        finals[0] = winTeam;
      }
      if (winTeam.team.region === 3 || winTeam.team.region === 4) {
        finals[1] = winTeam;
      }

      this.setState({NatChampGame:finals});
      console.log('from MB', this.state.NatChampGame);
     }

     if (roundId === 'round_2') {
       winTeam.predicted_wins = 6;
       loseTeam.predicted_wins = 5;
       let finals = [...this.state.NatChampGame];
       console.log('pre-set', finals);
       if (winTeam.team.region === 1 || winTeam.team.region === 2) {
         finals[0] = winTeam;
       }
       if (winTeam.team.region === 3 || winTeam.team.region === 4) {
         finals[1] = winTeam;
       }

       this.setState({NatChampGame:finals});
       console.log('from MB', this.state.NatChampGame);
      }
    }





    render() {

      return (
            <div className="region">
              <FinalRound check={this.props.check} teams={this.props.teams} round='round_4' selectFour={this.selectFour}/>
              <FinalRound check={this.props.check} teams={this.state.NatChampGame} round='round_2' selectFour={this.selectFour}/>
            </div>
        );
    }
}

export default FinalFour;
