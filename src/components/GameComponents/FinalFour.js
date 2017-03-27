import React from 'react';
import Round2 from './Round2';
import Round4 from './Round4';
import Round from './Round';

import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';



class FinalFour extends React.Component {
  constructor() {
      super();
      this.selectTeam = this.selectTeam.bind(this);

      this.state = {
          round64: [],
          round4: Dummy4.user_predictions,
          round2: Dummy2.user_predictions
      }
  }
    componentWillMount() {
        this.setState({round64: this.props.allTeams});
    }
    selectTeam(winTeamId, roundId) {
      console.log('in f4 - select Team ', winTeamId, roundId);
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
