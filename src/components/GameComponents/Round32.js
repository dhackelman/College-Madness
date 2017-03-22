import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.setRegion, 1);
        console.log(' teams in 32 ', teams);
        let team116 = null;
        let team215 = null;
        let team314 = null;
        let team413 = null;
        let team512 = null;
        let team611 = null;
        let team710 = null;
        let team89 = null;

        teams.forEach((team) => {
            if (team.team.seed === 1 || team.team.seed === 16) {
                team116 = team.team;
            } else if (team.team.seed === 8 || team.team.seed === 9) {
                team89 = team.team;
            } else if (team.team.seed === 5 || team.team.seed === 12) {
                team512 = team.team;
            } else if (team.team.seed === 4 || team.team.seed === 13) {
                team413 = team.team;
            } else if (team.team.seed === 6 || team.team.seed === 11) {
                team611 = team.team;
            } else if (team.team.seed === 3 || team.team.seed === 14) {
                team314 = team.team;
            } else if (team.team.seed === 7 || team.team.seed === 10) {
                team710 = team.team;
            } else if (team.team.seed === 2 || team.team.seed === 15) {
                team215 = team.team;
            } else {
                console.log('Error in Round32 ForEach loop');
            }
        })

        return (
            <div className="round_32__container">
                <Matchup team1={team116} team2={team89} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>
                <Matchup team1={team512} team2={team413} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>
                <Matchup team1={team611} team2={team314} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>
                <Matchup team1={team710} team2={team215} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>
            </div>
        );
    }
}

export default Round32;
