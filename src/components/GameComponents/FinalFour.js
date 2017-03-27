import React from 'react';
// import Round2 from './Round2';
// import Round4 from './Round4';
// import Round from './Round';

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
      let finalFour = this.props.four;
      let teams4 = this.state.round4;
      let teams4Diff = [];
      let teams2 = this.state.round2;
      let teams2Diff = [];
      let winTeam = this.props.allTeams[winTeamId - 1];
      let loseTeam = this.props.allTeams[loseTeamId - 1];

       if (roundId === 'round_4') {
         winTeam.predicted_wins = 5;
         loseTeam.predicted_wins = 4;
          teams4Diff = teams4.slice();
          teams4Diff[1] = winTeam;
         console.log(' win team in round 4 ', winTeam);
        //  this.setState({FinalFour: });
        }
    }

    render() {
      // <Round4  teams={this.state.round4} round='round_4' selectTeam={this.selectTeam}/>
      // <Round2  teams={this.state.round2} round='round_2' selectTeam={this.selectTeam}/>

        return (
            <div className="region__common">
              <Round4  teams={this.state.four} round='round_4' selectTeam={this.selectTeam}/>

            </div>
        );
    }
}

export default FinalFour;
