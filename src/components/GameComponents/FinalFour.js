import React from 'react';
import FinalMatchup from './FinalMatchup';
import FinalTeam from './FinalTeam';
import FinalRound from './FinalRound';


import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';



class FinalFour extends React.Component {
  constructor() {
      super();
      this.selectFour = this.selectFour.bind(this);
      this.selectTwo = this.selectTwo.bind(this);

      this.state = {
          round64: [],
          round4: Dummy4.user_predictions,
          round2: Dummy2.user_predictions
      }
  }
  componentWillMount() {
      this.setState({round64: this.props.allTeams});
  }

  selectTwo(winTeamId, loseTeamId, roundId) {
    // let allTeams = this.state.round64;
    // let winTeam = this.props.allTeams[winTeamId - 1];
    // console.log('in f4 - select Team ', winTeamId, winTeam);
    // let round2 = [...this.state.round2];
    // round2.push(winTeam);
    // this.setState({round2});
  }

  selectFour(winTeamId, loseTeamId, roundId) {
    let allTeams = this.state.round64;
    let winTeam = this.props.allTeams[winTeamId - 1];
    let loseTeam = this.props.allTeams[loseTeamId - 1];

    // let teams4 = this.state.round4;
    // let teams4Diff = [];
    let teams2 = this.state.round2;
    let teams2Diff = [];

    console.log('in f4 - select Team ', winTeam);


    if (roundId === 'round_4') {
      winTeam.predicted_wins = 5;
      loseTeam.predicted_wins = 4;

      teams2Diff = teams2.slice();
      teams2Diff[0] = winTeam;

      // let round2 = [...this.state.round2];
      // round2.push(winTeam);
      this.setState({round2: teams2Diff});
     }
    }

    componentDidMount() {
    let round4 = [1,2,3,4];
    round4[0] = this.props.teams[0];
    round4[1] = this.props.teams[1];
    round4[2] = this.props.teams[2];
    round4[3] = this.props.teams[3];
    this.setState({round4});
      console.log('componentWillMount in f4 -> ', this.props.teams);
    }

    render() {
      // let allMatchups = [];
      // let teams = this.props.teams;
      // console.log('teams in f4 matchup ', teams);
      // teams.map((team) => {
      //
      //   return <FinalTeam key={`${team.abbrev}-match`} matchupId={`${team.abbrev}-match`} selectTeam={this.selectTeam}></FinalMatchup>);
      // })

          // allMatchups.push(<FinalMatchup key={`${team1.team.abbrev}-match`} matchupId={`${team1.team.abbrev}-match`} team1={team1} team2={team2} round={this.props.round} selectTeam={this.props.selectTeam}></FinalMatchup>);
          // let rnd4 = this.state.round4.map((team) => {
          //   console.log('team in map -> ', team);
          //   return <FinalRound key={team.abbrev} teams={team} round='round_4' selectFour={this.selectFour}/>
          // });
          // console.log('pr. teams in f4 ', this.props.teams);

          // {this.props.teams.map((team) => {
          //   return <FinalTeam key={team.abbrev} home={team}  selectFour={this.selectFour}/>})}
        return (
            <div className="region">
              <FinalRound teams={this.state.round4} round='round_4' selectTwo={this.selectFour}/>
              <FinalRound teams={this.state.round2} round='round_2' selectTwo={this.selectTwo}/>
            </div>
        );
    }
}

export default FinalFour;
