import React from 'react';
import Matchup from './Matchup';

class Round8 extends React.Component {

    render() {

        let east = this.props.searchWins(this.props.east, 3);
        let midwest = this.props.searchWins(this.props.midwest, 3);
        let west = this.props.searchWins(this.props.west, 3);
        let south = this.props.searchWins(this.props.south, 3);

        let teamEastTop = null;
        let teamEastBottom = null;
        let teamMidwestTop = null;
        let teamMidwestBottom = null;
        let teamWestTop = null;
        let teamWestBottom = null;
        let teamSouthTop = null;
        let teamSouthBottom = null;

        east.forEach((team) => {
            if ((team.team.seed === 1 || team.team.seed === 16 || team.team.seed === 8 || team.team.seed === 9 || team.team.seed === 5 || team.team.seed === 12 || team.team.seed === 4 || team.team.seed === 13) && team.region === "East") {
                teamEastTop = team;
            } else if ((team.team.seed === 6 || team.team.seed === 11 || team.team.seed === 3 || team.team.seed === 14 || team.team.seed === 7 || team.team.seed === 10 || team.team.seed === 2 || team.team.seed === 15) && team.region === "East") {
                teamEastBottom = team;
            } else {
                console.log('Error in Round 8 ForEach loop');
            }
        })

        midwest.forEach((team) => {
            if ((team.team.seed === 1 || team.team.seed === 16 || team.team.seed === 8 || team.team.seed === 9 || team.team.seed === 5 || team.team.seed === 12 || team.team.seed === 4 || team.team.seed === 13) && team.region === "Midwest") {
                teamMidwestTop = team;
            } else if ((team.team.seed === 6 || team.team.seed === 11 || team.team.seed === 3 || team.team.seed === 14 || team.team.seed === 7 || team.team.seed === 10 || team.team.seed === 2 || team.team.seed === 15) && team.region === "Midwest") {
                teamMidwestBottom = team;
            } else {
                console.log('Error in Round 8 ForEach loop');
            }
        })

        west.forEach((team) => {
            if ((team.team.seed === 1 || team.team.seed === 16 || team.team.seed === 8 || team.team.seed === 9 || team.team.seed === 5 || team.team.seed === 12 || team.team.seed === 4 || team.team.seed === 13) && team.region === "West") {
                teamWestTop = team;
            } else if ((team.team.seed === 6 || team.team.seed === 11 || team.team.seed === 3 || team.team.seed === 14 || team.team.seed === 7 || team.team.seed === 10 || team.team.seed === 2 || team.team.seed === 15) && team.region === "West") {
                teamWestBottom = team;
            } else {
                console.log('Error in Round 8 ForEach loop');
            }
        })

        south.forEach((team) => {
            if ((team.team.seed === 1 || team.team.seed === 16 || team.team.seed === 8 || team.team.seed === 9 || team.team.seed === 5 || team.team.seed === 12 || team.team.seed === 4 || team.team.seed === 13) && team.region === "South") {
                teamSouthTop = team;
            } else if ((team.team.seed === 6 || team.team.seed === 11 || team.team.seed === 3 || team.team.seed === 14 || team.team.seed === 7 || team.team.seed === 10 || team.team.seed === 2 || team.team.seed === 15) && team.region === "South") {
                teamSouthBottom = team;
            } else {
                console.log('Error in Round 8 ForEach loop');
            }
        })

        return (
            <div className="round_8__container">
                <Matchup team1={teamEastTop} team2={teamEastBottom} update={this.props.update}></Matchup>
                <Matchup team1={teamMidwestTop} team2={teamMidwestBottom} update={this.props.update}></Matchup>
                <Matchup team1={teamWestTop} team2={teamWestBottom} update={this.props.update}></Matchup>
                <Matchup team1={teamSouthTop} team2={teamSouthBottom} update={this.props.update}></Matchup>
            </div>
        );
    }
}

export default Round8;
