import React from 'react';
import Matchup from './Matchup';

class Round2 extends React.Component {

    render() {
        let teams = this.props.searchWins(this.props.TeamData, 5);
        let teamFinalsOne = null;
        let teamFinalsTwo = null;

        teams.forEach((team) => {
            if (team.region === "East" || team.region === "Midwest") {
                teamFinalsOne = team;
            } else if (team.region === "West" || team.region === "South") {
                teamFinalsTwo = team;
            } else {
                console.log('Error in Round 2 ForEach loop');
            }
        })
        return (
            <div className="round_2__container">
                <Matchup team1={teamFinalsOne} team2={teamFinalsTwo} update={this.props.update}></Matchup>
            </div>
        );
    }
}

export default Round2;
