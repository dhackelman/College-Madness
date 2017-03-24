import React from 'react';
import Round from './Round';
import Dummy32 from '../../Data/Dummy32.js';
import Dummy16 from '../../Data/Dummy16.js';
import Dummy8 from '../../Data/Dummy8.js';
import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';

class Region extends React.Component {
    constructor() {
        super();
        this.state = {
            round64: [],
            round32: Dummy32.user_predictions,
            round16: Dummy16.user_predictions,
            round8: Dummy8.user_predictions,
            round4: Dummy4.user_predictions,
            round2: Dummy2.user_predictions
        }
        this.selectTeam = this.selectTeam.bind(this);
    }
    componentWillMount() {
        this.setState({round64: this.props.teams});
    }

    selectTeam(winTeamId, loseTeamId, roundId) {
      let allTeams = this.state.round64;
      let teams32 = this.state.round32;
      let teams32Diff = [];
      let teams16 = this.state.round16;
      let teams16Diff = [];
      let teams8 = this.state.round8;
      let teams8Diff = [];
      let teams4 = this.state.round4;
      let teams4Diff = [];
      let teams2 = this.state.round2;
      let teams2Diff = [];
      let winTeam = this.props.allTeams[winTeamId - 1];
      let loseTeam = this.props.allTeams[loseTeamId - 1];

      // allTeams[winTeamId-1] = winTeam;
      // allTeams[loseTeamId-1] = loseTeam;

      if (roundId === 'round_64') {
        winTeam.predicted_wins = 1;
        loseTeam.predicted_wins = 0;
        this.setState({round_64: allTeams});
        if (winTeamId === 1 || winTeamId === 2 || winTeamId === 17 || winTeamId === 18 || winTeamId === 33 || winTeamId === 34 || winTeamId === 49 || winTeamId === 50) {
          teams32Diff = teams32.slice();
          teams32Diff[0] = winTeam;
        }
        if (winTeamId === 3 || winTeamId === 4 || winTeamId === 19 || winTeamId === 20 || winTeamId === 35 || winTeamId === 36 || winTeamId === 51 || winTeamId === 52) {
          teams32Diff = teams32.slice();
          teams32Diff[1] = winTeam;
        }

        if (winTeamId === 5 || winTeamId === 6 || winTeamId === 21 || winTeamId === 22 || winTeamId === 37 || winTeamId === 38 || winTeamId === 53 || winTeamId === 54) {
          teams32Diff = teams32.slice();
          teams32Diff[2] = winTeam;
        }
        if (winTeamId === 7 || winTeamId === 8 || winTeamId === 23 || winTeamId === 24 || winTeamId === 39 || winTeamId === 40 || winTeamId === 55 || winTeamId === 56) {
          teams32Diff = teams32.slice();
          teams32Diff[3] = winTeam;
        }

        if (winTeamId === 9 || winTeamId === 10 || winTeamId === 25 || winTeamId === 26 || winTeamId === 41 || winTeamId === 42 || winTeamId === 57 || winTeamId === 58) {
          teams32Diff = teams32.slice();
          teams32Diff[4] = winTeam;
        }
        if (winTeamId === 11 || winTeamId === 12 || winTeamId === 27 || winTeamId === 28 || winTeamId === 43 || winTeamId === 44 || winTeamId === 59 || winTeamId === 60) {
          teams32Diff = teams32.slice();
          teams32Diff[5] = winTeam;
        }

        if (winTeamId === 13 || winTeamId === 14 || winTeamId === 29 || winTeamId === 30 || winTeamId === 45 || winTeamId === 46 || winTeamId === 61 || winTeamId === 62) {
          teams32Diff = teams32.slice();
          teams32Diff[6] = winTeam;
        }
        if (winTeamId === 15 || winTeamId === 16 || winTeamId === 31 || winTeamId === 32 || winTeamId === 47 || winTeamId === 48 || winTeamId === 63 || winTeamId === 64) {
          teams32Diff = teams32.slice();
          teams32Diff[7] = winTeam;
        }
        this.setState({round32: teams32Diff});
      }


      if (roundId === 'round_32') {
        winTeam.predicted_wins = 2;
        loseTeam.predicted_wins = 1;


        if (winTeamId === 1 || winTeamId === 2 || winTeamId === 17 || winTeamId === 18 || winTeamId === 33 || winTeamId === 34 || winTeamId === 49 || winTeamId === 50 || winTeamId === 3 || winTeamId === 4 || winTeamId === 19 || winTeamId === 20 || winTeamId === 35 || winTeamId === 36 || winTeamId === 51 || winTeamId === 52) {

          teams16Diff = teams16.slice();
          teams16Diff[0] = winTeam;
        }

        if (winTeamId === 5 || winTeamId === 6 || winTeamId === 21 || winTeamId === 22 || winTeamId === 37 || winTeamId === 38 || winTeamId === 53 || winTeamId === 54 || winTeamId === 7 || winTeamId === 8 || winTeamId === 23 || winTeamId === 24 || winTeamId === 39 || winTeamId === 40 || winTeamId === 55 || winTeamId === 56 ) {
          teams16Diff = teams16.slice();
          teams16Diff[1] = winTeam;
        }

        if (winTeamId === 9 || winTeamId === 10 || winTeamId === 25 || winTeamId === 26 || winTeamId === 41 || winTeamId === 42 || winTeamId === 57 || winTeamId === 58 || winTeamId === 11 || winTeamId === 12 || winTeamId === 27 || winTeamId === 28 || winTeamId === 43 || winTeamId === 44 || winTeamId === 59 || winTeamId === 60) {
          teams16Diff = teams16.slice();
          teams16Diff[2] = winTeam;
        }

        if (winTeamId === 13 || winTeamId === 14 || winTeamId === 29 || winTeamId === 30 || winTeamId === 45 || winTeamId === 46 || winTeamId === 61 || winTeamId === 62 || winTeamId === 15 || winTeamId === 16 || winTeamId === 31 || winTeamId === 32 || winTeamId === 47 || winTeamId === 48 || winTeamId === 63 || winTeamId === 64 ) {
          teams16Diff = teams16.slice();
          teams16Diff[3] = winTeam;
        }
        this.setState({round16: teams16Diff});

      }





    if (roundId === 'round_16') {
      winTeam.predicted_wins = 3;
      loseTeam.predicted_wins = 2;
      this.setState({round8: teams8});

      if (winTeamId === 1 || winTeamId === 2 || winTeamId === 17 || winTeamId === 18 || winTeamId === 33 || winTeamId === 34 || winTeamId === 49 || winTeamId === 50 || winTeamId === 3 || winTeamId === 4 || winTeamId === 19 || winTeamId === 20 || winTeamId === 35 || winTeamId === 36 || winTeamId === 51 || winTeamId === 52 || winTeamId === 5 || winTeamId === 6 || winTeamId === 21 || winTeamId === 22 || winTeamId === 37 || winTeamId === 38 || winTeamId === 53 || winTeamId === 54 || winTeamId === 7 || winTeamId === 8 || winTeamId === 23 || winTeamId === 24 || winTeamId === 39 || winTeamId === 40 || winTeamId === 55 || winTeamId === 56) {

        teams8Diff = teams8.slice();
        teams8Diff[0] = winTeam;
      }



      if (winTeamId === 9 || winTeamId === 10 || winTeamId === 25 || winTeamId === 26 || winTeamId === 41 || winTeamId === 42 || winTeamId === 57 || winTeamId === 58 || winTeamId === 11 || winTeamId === 12 || winTeamId === 27 || winTeamId === 28 || winTeamId === 43 || winTeamId === 44 || winTeamId === 59 || winTeamId === 60 || winTeamId === 13 || winTeamId === 14 || winTeamId === 29 || winTeamId === 30 || winTeamId === 45 || winTeamId === 46 || winTeamId === 61 || winTeamId === 62 || winTeamId === 15 || winTeamId === 16 || winTeamId === 31 || winTeamId === 32 || winTeamId === 47 || winTeamId === 48 || winTeamId === 63 || winTeamId === 64) {
        teams8Diff = teams8.slice();
        teams8Diff[1] = winTeam;
      }
      this.setState({round8: teams8});
      this.props.elite(teams8);
    }

  }

    render() {

        return (
            <div className="region">
                <Round teams={this.state.round64} round='round_64' selectTeam={this.selectTeam}/>
                <Round teams={this.state.round32} round='round_32' selectTeam={this.selectTeam}/>
                <Round teams={this.state.round16} round='round_16' selectTeam={this.selectTeam}/>
            </div>
        );
    }
}

export default Region;
