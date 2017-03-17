import React from 'react';
import TeamData from '../Data/data.js';

class Container extends React.Component {
    componentWillMount() {
        // this.updateSelectedTeamStyle();
        this.setState({TeamData: TeamData});

    }
    constructor() {
        super();
        this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
        this.searchWins = this.searchWins.bind(this);
        // this.updateSelectedTeamStyle = this.updateSelectedTeamStyle.bind(this);
        this.state = {
            TeamData: TeamData
        };
    }
    searchWins() {
      const TeamData = {
        ...this.state.TeamData};
        //use filter to find teams that have more than 1 win
        let TeamDataFilter = TeamData.teams.filter((team) => {
            return team.wins !== 0;
        });
        
    }

    updateSelectedTeam(key) {
        const TeamData = {
            ...this.state.TeamData
        }

        let selectedTeam = this.state.TeamData.teams[key];

        selectedTeam.wins++;
        this.setState({TeamData});
        this.searchWins();
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
            <div className="component__container">
                {childWithProp}
            </div>
        );
    }
}

export default Container;
