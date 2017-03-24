import React from 'react';
import Round from './Round';
import Dummy32 from '../../Data/Dummy32.js';

class Region extends React.Component {
    constructor() {
        super();
        this.state = {
            round64: [],
            round32: Dummy32.user_predictions,
            round16: []
        }
        this.selectTeam = this.selectTeam.bind(this);
    }
    componentWillMount() {
        this.setState({round64: this.props.teams});

    }



    selectTeam(winTeamId, loseTeamId, roundId, winPosition) {

      let allTeams = this.state.round64;
      console.log('round64 ', allTeams);
      let teams32 = this.state.round32;

      // console.log('before ', this.state.round64[winTeamId - 1]);
      let winTeam = this.props.allTeams[winTeamId - 1];
      // console.log('afer ', winTeam);
      let loseTeam = this.props.allTeams[loseTeamId - 1];

      if (roundId === 'round_64') {

        winTeam.predicted_wins = 1;
        loseTeam.predicted_wins = 0;
        this.setState({round64: allTeams});

        // let winTeamId = winTeam.team.id;

        if (winTeamId === 1 || winTeamId === 2 || winTeamId === 17 || winTeamId === 18 || winTeamId === 33 || winTeamId === 34 || winTeamId === 49 || winTeamId === 50 ) {
          teams32[0] = winTeam;
          console.log('win team in if ', winTeam);
        }
        if (winTeamId === 3 || winTeamId === 4 || winTeamId === 19 || winTeamId === 20 || winTeamId === 35 || winTeamId === 36 || winTeamId === 51 || winTeamId === 52 ) {
          teams32[1] = winTeam;
        }
        if (winTeamId === 5 || winTeamId === 6 || winTeamId === 21 || winTeamId === 22 || winTeamId === 37 || winTeamId === 38 || winTeamId === 53 || winTeamId === 54 ) {
          teams32[2] = winTeam;
        }
        if (winTeamId === 7 || winTeamId === 8 || winTeamId === 23 || winTeamId === 24 || winTeamId === 39 || winTeamId === 40 || winTeamId === 55 || winTeamId === 56 ) {
          teams32[3] = winTeam;
        }
        if (winTeamId === 9 || winTeamId === 10 || winTeamId === 25 || winTeamId === 26 || winTeamId === 41 || winTeamId === 42 || winTeamId === 57 || winTeamId === 58 ) {
          teams32[4] = winTeam;
        }
        if (winTeamId === 11 || winTeamId === 12 || winTeamId === 27 || winTeamId === 28 || winTeamId === 43 || winTeamId === 44 || winTeamId === 59 || winTeamId === 60 ) {
          teams32[5] = winTeam;
        }
        if (winTeamId === 13 || winTeamId === 14 || winTeamId === 29 || winTeamId === 30 || winTeamId === 45 || winTeamId === 46 || winTeamId === 61 || winTeamId === 62 ) {
          teams32[6] = winTeam;
        }
        if (winTeamId === 15 || winTeamId === 16 || winTeamId === 31 || winTeamId === 32 || winTeamId === 47 || winTeamId === 48 || winTeamId === 63 || winTeamId === 64 ) {
          teams32[7] = winTeam;
        }
        this.setState({round32: teams32});
      }
      // allTeams[winTeamId-1] = winTeam;
      // allTeams[loseTeamId-1] = loseTeam;
      console.log('what? ', allTeams[winTeamId - 1]);
    }







    //     e.preventDefault();
    //
    //     this.props.updateSelectedTeam(key, myRegion);
    //     console.log('xxxxxxxxxxx', this.props.team.region);
    //     let found = false;
    //     let tempActive;
    //     const matchup = this.activeTeam.classList[1];
    //     const selectedMatch = document.querySelectorAll('.' + matchup);
    //
    //     selectedMatch.forEach((team) => {
    //
    //         if (!found) {
    //             if (this.activeTeam === team && !team.classList.contains('team__selected')) {
    //                 tempActive = document.querySelector(`.${matchup}.team__selected`);
    //                 // console.log('activeTeam --> ', this.activeTeam);
    //                 if (tempActive) {
    //                     tempActive.classList.remove('team__selected');
    //                 }
    //                 this.activeTeam.classList.add('team__selected');
    //                 found = true;
    //             } else if (this.activeTeam === team && team.classList.contains('team__selected')) {
    //                 team.classList.remove('team__selected');
    //                 found = true;
    //             } else if (this.activeTeam !== team && !this.activeTeam.classList.contains('team__selected')) {
    //                 tempActive = document.querySelector(`.${matchup}.team__selected`);
    //                 if (tempActive) {
    //                     tempActive.classList.remove('team__selected');
    //                 }
    //                 this.activeTeam.classList.add('team__selected');
    //                 found = true;
    //             }
    //         }
    //     });
    // }


    render() {

        return (
            <div className="region">
                <Round  teams={this.state.round64} round='round_64' selectTeam={this.selectTeam}/>
                <Round teams={this.state.round32} round='round_32' selectTeam={this.selectTeam}/>
            </div>
        );
    }
}

export default Region;
