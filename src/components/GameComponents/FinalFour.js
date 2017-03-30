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
          Champ: Dummy0.user_predictions,
          Ready2Submit: false
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
       const last2 = [];
       last2.push(winTeam, loseTeam);
       this.setState({Ready2Submit: true});
       this.setState({Champ:last2});
      }
    }

  // <FinalChamp check={this.props.check} teams={this.state.Champ} round='round_0'/>
    render() {

      return (
            <div className="region final__four">
              <h3>Final Four</h3>
              <FinalRound check={this.props.check} teams={this.props.teams} round='round_4' selectFour={this.selectFour}/>
              <h3>Championship Game</h3>
              <FinalRound check={this.props.check} teams={this.state.NatChampGame} round='round_2' selectFour={this.selectFour}/>
              <h3>National Champion</h3>
              <FinalChamp teams={this.state.Champ} round='round_0'/>
                <form className="submit__form" ref={(input) => this.submitBracket = input} onSubmit={(event) => this.props.sendBracketData(event)}>
                  <input  className={ this.state.Ready2Submit ? 'kippBtn bracket__submit': 'kippBtn is-hidden' } type="submit"></input>
                </form>
            </div>
        );
    }
}

export default FinalFour;
