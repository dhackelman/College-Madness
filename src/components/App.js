import React from 'react';
// import {Link} from 'react-router';
// import Container from './Container';
import Header from './Header';
import TeamData from '../Data/data.js';

class App extends React.Component {
    constructor() {
        super();
        this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
        this.searchWins = this.searchWins.bind(this);

        // this.updateSelectedTeamStyle = this.updateSelectedTeamStyle.bind(this);
        this.state = {
            TeamData: TeamData,
            Round32: TeamData
        };
    }

    searchWins(teamData) {
        //use filter to find teams that have more than 1 win
        let teamDataFilter = teamData.filter((team) => {
            return team.wins !== 0;
        });;
        return teamDataFilter;
    }

    updateSelectedTeam(key) {
        const TeamData = {
            ...this.state.TeamData
        }
        let selectedTeam = this.state.TeamData.teams[key];

        selectedTeam.wins++;
        this.setState({TeamData});
        this.searchWins(TeamData.teams);

        // console.log('props in cont -', this.props);
    }

    updateRound32() {}

    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                TeamData: this.state.TeamData,
                Round32: this.state.Round32,
                updateSelectedTeam: this.updateSelectedTeam,
                searchWins: this.searchWins
            });
        });

        return (
            <div>
                <Header/> {childWithProp}
            </div>
        );
    }
}

export default App;
