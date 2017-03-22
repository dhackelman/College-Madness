import React from 'react';
import Header from './Header';
// import axios from 'axios';
import TeamData from '../Data/data.js';

class App extends React.Component {
    constructor() {
        super();
        this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
        this.searchWins = this.searchWins.bind(this);
        this.filterByRegion = this.filterByRegion.bind(this);

        this.state = {
            East: [],
            West: [],
            Midwest: [],
            South: []
        };
    }

    componentWillMount() {
        // axios.get("https://kipp-madness-api.herokuapp.com/users/4.json").then((response) => {
        // let teamAPI = response.data;

            let teamAPI = TeamData;
            // console.log('teamAPI ', teamAPI);
            // console.log('in componentDidMount / api response ', teamAPI);
            this.filterByRegion(1, teamAPI.user_predictions);
            this.filterByRegion(2, teamAPI.user_predictions);
            this.filterByRegion(3, teamAPI.user_predictions);
            this.filterByRegion(4, teamAPI.user_predictions);

        // });
    }

    filterByRegion(region, data) {
        const teams = data.filter((val) => {
          // return val.team.region === region;
            return val.team.region === region;
        });
        if (region === 1) {
            this.setState({East: teams});
        }
        if (region === 2) {
            this.setState({West: teams});
        }
        if (region === 3) {
            this.setState({Midwest: teams});
        }
        if (region === 4) {
            this.setState({South: teams});
        }
        // console.log('teams ', teams);
        return teams;
    }

    searchWins(teamData, wins) {
        //use filter to find teams that have more than 1 win

        let teamDataFilter = teamData.filter((team) => {
            if (wins === 1) {
                return team.predicted_wins >= 1;
            }
            if (wins === 2) {
                return team.predicted_wins >= 2;
            }
            if (wins === 3) {
                return team.predicted_wins >= 3;
            }
            if (wins === 4) {
                return team.predicted_wins >= 4;
            }
            if (wins === 5) {
                return team.predicted_wins >= 5;
            }
            if (wins === 6) { // Winner of Bracket
                return team.predicted_wins >= 6;
            }
        });
        return teamDataFilter;
    }

    updateSelectedTeam(key, region) {
      // console.log('update team ', key);

      if(region === 1) {
        let patience = 'East';
        const East = {
            ...this.state.East
        }
        let selectedTeam = this.state.East[key - 1];
        selectedTeam.predicted_wins++;
        this.setState({patience});
        console.log('selectTeam ', selectedTeam);
      }

      if(region === 2) {
        let patience = 'West';
        const West = {
            ...this.state.West
        }
        console.log(this.state.West);
        let selectedTeam = this.state.West[key - 17];
        selectedTeam.predicted_wins++;
        this.setState({patience});
        console.log('selectTeam 2 ', selectedTeam);
      }

      if(region === 3) {
        let patience = 'Midwest';
        const Midwest = {
            ...this.state.Midwest
        }
        let selectedTeam = this.state.Midwest[key - 33];
        selectedTeam.predicted_wins++;
        this.setState({patience});
        console.log('selectTeam 3 ', selectedTeam);
      }

      if(region === 4) {
        let patience = 'South';
        const South = {
            ...this.state.South
        }
        let selectedTeam = this.state.South[key - 49];
        selectedTeam.predicted_wins++;
        this.setState({patience});
        console.log('selectTeam 4 ', selectedTeam);
      }

        // let selectedTeam = this.state.TeamData.teams[key];
        // this.searchWins(TeamData.teams);
    }

    render() {

        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                // TeamData: this.state.TeamData,
                Users: this.state.Users,
                East: this.state.East,
                West: this.state.West,
                Midwest: this.state.Midwest,
                South: this.state.South,
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
