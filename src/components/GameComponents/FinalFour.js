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


    render() {
      // <Round4  teams={this.state.round4} round='round_4' selectTeam={this.selectTeam}/>
      // <Round2  teams={this.state.round2} round='round_2' selectTeam={this.selectTeam}/>

        return (
            <div className="region__common">


            </div>
        );
    }
}

export default FinalFour;
