import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.TeamData, 1);

        let team116 = null;
        let team215 = null;
        let team314 = null;
        let team413 = null;
        let team512 = null;
        let team611 = null;
        let team710 = null;
        let team89 = null;

        teams.forEach((team) => {
            if (team.seed === 1 || team.seed === 16) {
                team116 = team;
            } else if (team.seed === 8 || team.seed === 9) {
                team89 = team;
            } else if (team.seed === 5 || team.seed === 12) {
                team512 = team;
            } else if (team.seed === 4 || team.seed === 13) {
                team413 = team;
            } else if (team.seed === 6 || team.seed === 11) {
                team611 = team;
            } else if (team.seed === 3 || team.seed === 14) {
                team314 = team;
            } else if (team.seed === 7 || team.seed === 10) {
                team710 = team;
            } else if (team.seed === 2 || team.seed === 15) {
                team215 = team;
            } else {
                console.log('Error in Round32 ForEach loop');
            }
        })

        return (
            <div className="round_32__container">
                <Matchup team1={team116} team2={team89} update={this.props.update}></Matchup>
                <Matchup team1={team512} team2={team413} update={this.props.update}></Matchup>
                <Matchup team1={team611} team2={team314} update={this.props.update}></Matchup>
                <Matchup team1={team710} team2={team215} update={this.props.update}></Matchup>
            </div>
        );
    }
}

export default Round32;
