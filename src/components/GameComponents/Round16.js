import React from 'react';
import Matchup from './Matchup';

class Round16 extends React.Component {

    render() {

        let teams = this.props.searchWins(this.props.TeamData, 2);

        let teamTop = null;
        let teamTop2 = null;
        let teamBottom = null;
        let teamBottom2 = null;

        teams.forEach((team) => {
            if (team.seed === 1 || team.seed === 16) {
                teamTop = team;
            } else if (team.seed === 8 || team.seed === 9) {
                teamTop = team;
            } else if (team.seed === 5 || team.seed === 12) {
                teamTop2 = team;
            } else if (team.seed === 4 || team.seed === 13) {
                teamTop2 = team;
            } else if (team.seed === 6 || team.seed === 11) {
                teamBottom = team;
            } else if (team.seed === 3 || team.seed === 14) {
                teamBottom = team;
            } else if (team.seed === 7 || team.seed === 10) {
                teamBottom2 = team;
            } else if (team.seed === 2 || team.seed === 15) {
                teamBottom2 = team;
            } else {
                console.log('Error in Round16 ForEach loop');
            }
        })

        return (
            <div className="round_16__container">
                <Matchup team1={teamTop} team2={teamTop2} update={this.props.update}></Matchup>
                <Matchup team1={teamBottom} team2={teamBottom2} update={this.props.update}></Matchup>
            </div>
        );
    }
}

export default Round16;
