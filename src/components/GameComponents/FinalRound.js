import React from 'react';
import FinalMatchup from './FinalMatchup';

class FinalRound extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     round32: []
  //   };
  // }

  // componentDidMount() {
  //   const currentTeams = this.props.teams;
  //   this.setState({round32: this.props.teams})
  // }

  //
  // {this.props.teams.map((team) => {
  //   return <FinalTeam key={team.abbrev} home={team}  selectFour={this.selectFour}/>})}
  render() {
    let allMatchups = [];
    let teams = this.props.teams;
    for (let index = 0; index < teams.length; index+=2) {
        let team1 = teams[index];
        let team2 = teams[index+1];
        console.log('FinalRound- team1 / team2 ', team1, team2);
        allMatchups.push(<FinalMatchup key={`${team1.team.abbrev}-match`} matchupId={`${team1.team.abbrev}-match`} team1={team1} team2={team2} round={this.props.round} selectTeam={this.props.selectTeam}></FinalMatchup>);
    }
      return (
          <div className={`${this.props.round}__container`}>
              {allMatchups}
          </div>

      );
    }
}

export default FinalRound;
