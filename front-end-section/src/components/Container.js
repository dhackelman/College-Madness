import React from 'react';
import TeamData from '../Data/data.js';

class Container extends React.Component {
    componentWillMount() {
        this.updateSelectedTeamStyle();
        this.setState({TeamData: TeamData});
    }
    constructor() {
        super();
        this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
        this.updateSelectedTeamStyle = this.updateSelectedTeamStyle.bind(this);
        this.state = {
            TeamData: TeamData
        };
    }

    updateSelectedTeam(key) {
        const TeamData = {
            ...this.state.TeamData
        }

        let selectedTeam = this.state.TeamData.teams[key];
        selectedTeam.round_64 = true;
        this.setState({TeamData});
        this.updateSelectedTeamStyle();
    }

    updateSelectedTeamStyle() {
        const ourTeam = this.state.TeamData;
        ourTeam.teams.map((team) => {
            if (team.round_64 === true) {
                console.log('team.round_64', team);
            } else {
                console.log('theyre good dogs bront');
            }
        });
    }

    render() {

        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                TeamData: this.state.TeamData,
                updateSelectedTeam: this.updateSelectedTeam
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
