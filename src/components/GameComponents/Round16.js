import React from 'react';
import Matchup from './Matchup';

class Round16 extends React.Component {

    render() {

        let teams = this.props.searchWins(this.props.setRegion, 2);

        let teamTop = null;
        let teamTop2 = null;
        let teamBottom = null;
        let teamBottom2 = null;

        teams.forEach((team) => {
            if (team.team.seed === 1 || team.team.seed === 16) {
                teamTop = team.team;
            } else if (team.team.seed === 8 || team.team.seed === 9) {
                teamTop = team.team;
            } else if (team.team.seed === 5 || team.team.seed === 12) {
                teamTop2 = team.team;
            } else if (team.team.seed === 4 || team.team.seed === 13) {
                teamTop2 = team.team;
            } else if (team.team.seed === 6 || team.team.seed === 11) {
                teamBottom = team.team;
            } else if (team.team.seed === 3 || team.team.seed === 14) {
                teamBottom = team.team;
            } else if (team.team.seed === 7 || team.team.seed === 10) {
                teamBottom2 = team.team;
            } else if (team.team.seed === 2 || team.team.seed === 15) {
                teamBottom2 = team.team;
            } else {
                console.log('Error in Round16 ForEach loop');
            }
        })

        return (
            <div className="round_16__container">
                <Matchup team1={teamTop} team2={teamTop2} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>
                <Matchup team1={teamBottom} team2={teamBottom2} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>
            </div>
        );
    }
}

export default Round16;
