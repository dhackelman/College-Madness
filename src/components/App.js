import React from 'react';
import Header from './Header';
import axios from 'axios';
import TeamData from '../Data/data.js';

class App extends React.Component {
    constructor() {
        super();
        this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
        this.searchWins = this.searchWins.bind(this);

        this.state = {
            TeamData: TeamData,
            TeamData666: {}
        };
    }

    componentWillMount() {
        axios.get("https://kipp-madness-api.herokuapp.com/users/4.json").then((response) => {
            let TeamData666 = {
                ...this.state.TeamData666
            }
            console.log(response);
            TeamData666 = response.data.user_predictions;
            this.setState({TeamData666});
            console.log('in componentDidMount ', response.data.user_predictions);
        });
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
                return team.wins >= 6;
            }
        });
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
                Users: this.state.Users,
                updateSelectedTeam: this.updateSelectedTeam,
                searchWins: this.searchWins,
                TeamData666: this.state.TeamData666
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
