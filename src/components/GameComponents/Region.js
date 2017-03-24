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



    selectTeam(winTeamId, loseTeamId, roundId) {
      let allTeams = this.state.round64;
      let teams32 = this.state.round32;
      let winTeam = this.state.round64[winTeamId - 1];
      let loseTeam = this.state.round64[loseTeamId - 1];

      if (roundId === 'round_64') {
        winTeam.predicted_wins = 1;
        loseTeam.predicted_wins = 0;
        this.setState({round64: allTeams});

        let winPosition = winTeam.team.position;
        if (winPosition === 7 || winPosition === 8 ) {
          teams32[3] = winTeam;
        }
        this.setState({round32: teams32});
      }
      allTeams[winTeamId-1] = winTeam;
      allTeams[loseTeamId-1] = loseTeam;
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
                <Round teams={this.state.round64} round='round_64' selectTeam={this.selectTeam}/>
                <Round teams={this.state.round32} round='round_32' selectTeam={this.selectTeam}/>
            </div>
        );
    }
}

export default Region;
