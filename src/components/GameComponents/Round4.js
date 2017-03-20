import React from 'react';
import Matchup from './Matchup';

class Round4 extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.TeamData, 4);

        let teamEast = null;
        let teamMidwest = null;

        teams.forEach((team) => {
            if (team.region === "East") {
                teamEast = team;
            }
            if (team.region === "Midwest") {
                teamMidwest = team;
            } else {
                console.log('Error in Round4 A1 ForEach loop');
            }
        })
        return (
            <div className="round_4__container">
                <h2 className="bracket__final-four">Final Four</h2>
                <Matchup team1={teamEast} team2={teamMidwest} update={this.props.update}></Matchup>

            </div>
        );
    }
}

export default Round4;
