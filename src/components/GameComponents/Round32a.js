import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.TeamData);
        console.log('teams in render ', teams);
        let teamsCopy = [];
        teams.forEach((team) => {
            if (team.seed === 1 || team.seed === 16) {
                const team116 = team;
            } else if (team.seed === 2 || team.seed === 15) {
                const team215 = team;
            } else if (team.seed === 3 || team.seed === 14) {
                const team314 = team;
            } else if (team.seed === 4 || team.seed === 13) {
                const team413 = team;
            } else if (team.seed === 5 || team.seed === 12) {
                const team512 = team;
            } else if (team.seed === 6 || team.seed === 11) {
                const team611 = team;
            } else if (team.seed === 7 || team.seed === 10) {
                const team710 = team;
            } else if (team.seed === 8 || team.seed === 9) {
                const team89 = team;
            }
        })

        return (
            <div className="round_32__container">
                <Matchup key={team116.id} id={team116.abbrev} team1={team116} team2={team215} update={this.props.update}></Matchup>
                <Matchup key={team314.id} id={team314.abbrev} team1={team314} team2={team413} update={this.props.update}></Matchup>
                <Matchup key={team512.id} id={team512.abbrev} team1={team512} team2={team611} update={this.props.update}></Matchup>
                <Matchup key={team710.id} id={team710.abbrev} team1={team710} team2={team89} update={this.props.update}></Matchup>
            </div>
        );
    }
}

export default Round32;
