import React from 'react';
import Round2 from './Round2';
import Round4 from './Round4';
import Round from './Round';

import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';



class FinalFour extends React.Component {
  constructor() {
      super();
      this.state = {
          round64: [],
          round4: Dummy4.user_predictions,
          round2: Dummy2.user_predictions
      }

  }
    componentWillMount() {
        this.setState({round64: this.props.allTeams});
    }
    selectTeam(winTeamId, loseTeamId, roundId) {
      let allTeams = this.state.round64;
      let teams4 = this.state.round4;
      let teams4Diff = [];
      let teams2 = this.state.round2;
      let teams2Diff = [];
      let winTeam = this.props.allTeams[winTeamId - 1];
      let loseTeam = this.props.allTeams[loseTeamId - 1];

      if (roundId === 'round_4') {
        winTeam.predicted_wins = 5;
        loseTeam.predicted_wins = 4;


        if (winTeamId === 1 || winTeamId === 2 || winTeamId === 17 || winTeamId === 18 || winTeamId === 33 || winTeamId === 34 || winTeamId === 49 || winTeamId === 50 || winTeamId === 3 || winTeamId === 4 || winTeamId === 19 || winTeamId === 20 || winTeamId === 35 || winTeamId === 36 || winTeamId === 51 || winTeamId === 52 || winTeamId === 5 || winTeamId === 6 || winTeamId === 21 || winTeamId === 22 || winTeamId === 37 || winTeamId === 38 || winTeamId === 53 || winTeamId === 54 || winTeamId === 7 || winTeamId === 8 || winTeamId === 23 || winTeamId === 24 || winTeamId === 39 || winTeamId === 40 || winTeamId === 55 || winTeamId === 56) {

          teams4Diff = teams4.slice();
          teams4Diff[0] = winTeam;
        }

        if (winTeamId === 9 || winTeamId === 10 || winTeamId === 25 || winTeamId === 26 || winTeamId === 41 || winTeamId === 42 || winTeamId === 57 || winTeamId === 58 || winTeamId === 11 || winTeamId === 12 || winTeamId === 27 || winTeamId === 28 || winTeamId === 43 || winTeamId === 44 || winTeamId === 59 || winTeamId === 60 || winTeamId === 13 || winTeamId === 14 || winTeamId === 29 || winTeamId === 30 || winTeamId === 45 || winTeamId === 46 || winTeamId === 61 || winTeamId === 62 || winTeamId === 15 || winTeamId === 16 || winTeamId === 31 || winTeamId === 32 || winTeamId === 47 || winTeamId === 48 || winTeamId === 63 || winTeamId === 64) {
          teams4Diff = teams4.slice();
          teams4Diff[1] = winTeam;
        }

        this.setState({round4: teams4Diff});
        console.log('4', teams4Diff);
       }

  }

    render() {


        return (
            <div className="region__common">
              <Round  teams={this.state.round4} round='round_4' selectTeam={this.selectTeam}/>
              <Round  teams={this.state.round2} round='round_2' selectTeam={this.selectTeam}/>
            </div>
        );
    }
}

export default FinalFour;
