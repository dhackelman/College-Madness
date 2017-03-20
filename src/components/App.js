import React from 'react';
import Header from './Header';
import TeamData from '../Data/data.js';

class App extends React.Component {
    constructor() {
        super();
        this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
        this.searchWins = this.searchWins.bind(this);

        this.state = {
            TeamData: TeamData
        };
    }

    searchWins(teamData, wins) {
        //use filter to find teams that have more than 1 win

        let teamDataFilter = teamData.filter((team) => {
            if (wins === 1) {
                return team.wins >= 1;
            }
            if (wins === 2) {
                return team.wins >= 2;
            }
            if (wins === 3) {
                return team.wins >= 3;
            }
            if (wins === 4) {
                return team.wins >= 4;
            }
            if (wins === 5) {
                return team.wins >= 5;
            }
            if (wins === 6) { // Winner of Bracket
                return team.wins === 6;
            }
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
        // this.searchWins(TeamData.teams);

        // console.log('props in cont -', this.props);
    }

    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                TeamData: this.state.TeamData,
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
