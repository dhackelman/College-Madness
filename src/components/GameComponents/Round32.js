import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Round32: {}
        };
    }

    componentWillReceiveProps(props) {
        let newTeams = props.searchWins(props.TeamData);
        console.log("new Teams --> ", newTeams);
        this.setState({Round32: newTeams});
    }

    render() {
        console.log('what the state ', this.state);
        let teams = this.state.Round32;
        console.log('teams in render ', teams);
        let teamsCopy = [];
        if (Object.keys(teams).length !== 0) {
            teams.forEach((team) => {
                teamsCopy.push(team);
            })
        }
        console.log('teamsCopy ', teamsCopy);
        return (
            <div className="round_32__container">
            { /*<Matchup key={team_1.id} id={team_1.abbrev} team1={team_1} team2={team_2} update={this.props.update}></Matchup> */}
            </div>
        );
    }
}

export default Round32;
