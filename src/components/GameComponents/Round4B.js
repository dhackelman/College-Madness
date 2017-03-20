import React from 'react';
import Matchup from './Matchup';

class Round4B extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.TeamData, 4);

        let teamWest = null;
        let teamSouth = null;

        teams.forEach((team) => {
            if (team.region === "West") {
                teamWest = team;
            }
            if (team.region === "South") {
                teamSouth = team;
            } else {
                console.log('Error in Round4 B1 ForEach loop');
            }
        })
        return (
            <div className="round_4__container">

                <Matchup team1={teamWest} team2={teamSouth} update={this.props.update}></Matchup>
                <h2 className="bracket__final-four">Final Four</h2>
            </div>
        );
    }
}

export default Round4B;
