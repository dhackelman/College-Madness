// import React from 'react';
// import Matchup from './Matchup';
//
// class Round32 extends React.Component {
//
//     render() {
//         let teams = this.props.searchWins(this.props.TeamData);
//         console.log('teams in render ', teams);
//         let teamsCopy = [];
//         teams.forEach((team) => {
//             if (team.seed === 1 || team.seed === 16) {
//                 teamsCopy.push(team);
//             } else if (team.seed === 2 || team.seed === 15) {
//                 teamsCopy.push(team);
//             }
//         })
//
//         return (
//             <div className="round_32__container">
//                 <Matchup key={teams.id} id={teams.abbrev} team1={teams} team2={teams} update={this.props.update}></Matchup>
//                 <Matchup key={teams.id} id={teams.abbrev} team1={teams} team2={teams} update={this.props.update}></Matchup>
//                 <Matchup key={teams.id} id={teams.abbrev} team1={teams} team2={teams} update={this.props.update}></Matchup>
//                 <Matchup key={teams.id} id={teams.abbrev} team1={teams} team2={teams} update={this.props.update}></Matchup>
//             </div>
//         );
//     }
// }
//
// export default Round32;
