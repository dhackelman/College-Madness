import React from 'react';
import Matchup from './Matchup';

class Round4 extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.TeamData, 4);

        let teamEast = null;
        let teamMidwest = null;
        let teamWest = null;
        let teamSouth = null;

        teams.forEach((team) => {
            if (team.region === "East") {
                teamEast = team;
            }
            if (team.region === "Midwest") {
                teamMidwest = team;
            }
            if (team.region === "West") {
                teamWest = team;
            }
            if (team.region === "South") {
                teamSouth = team;
            } else {
                console.log('Error in Round 4 ForEach loop');
            }
        })
        // <h2 className="bracket__final-four">Final Four</h2>
        return (
            <div className="round_4__container">

                <Matchup team1={teamEast} team2={teamMidwest} update={this.props.update}></Matchup>
                <Matchup team1={teamWest} team2={teamSouth} update={this.props.update}></Matchup>

            </div>
        );
    }
}

export default Round4;
