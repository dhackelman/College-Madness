import React from 'react';
import Matchup from './Matchup';

class Round8 extends React.Component {

    render() {

        let teams = this.props.searchWins(this.props.TeamData, 3);

        let teamTop = null;
        let teamBottom = null;

        teams.forEach((team) => {
            if (team.seed === 1 || team.seed === 16) {
                teamTop = team;
            } else if (team.seed === 8 || team.seed === 9) {
                teamTop = team;
            } else if (team.seed === 5 || team.seed === 12) {
                teamTop = team;
            } else if (team.seed === 4 || team.seed === 13) {
                teamTop = team;
            } else if (team.seed === 6 || team.seed === 11) {
                teamBottom = team;
            } else if (team.seed === 3 || team.seed === 14) {
                teamBottom = team;
            } else if (team.seed === 7 || team.seed === 10) {
                teamBottom = team;
            } else if (team.seed === 2 || team.seed === 15) {
                teamBottom = team;
            } else {
                console.log('Error in Round 8 ForEach loop');
            }
        })

        return (
            <div className="round_8__container">
                <Matchup team1={teamTop} team2={teamBottom} update={this.props.update}></Matchup>

            </div>
        );
    }
}

export default Round8;
