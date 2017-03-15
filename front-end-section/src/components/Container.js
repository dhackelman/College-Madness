import React from 'react';
import TeamData from '../Data/data.js';

class Container extends React.Component {
    componentWillMount() {
        this.searchTeams('East');
        this.setState({data: TeamData});
    }
    constructor() {
        super();
        this.searchTeams = this.searchTeams.bind(this);
        this.state = {
            data: []
        };
    }

    searchTeams(arg) {
        for (let i = 0; i < TeamData.teams.length; i++) {
            if (TeamData.teams[i].region === arg) {
                console.log(TeamData.teams[i]);
            }
        }
    }

    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {data: this.state.data});
        });

        return (
            <div className="component__container">
                {childWithProp}
            </div>
        );
    }
}

export default Container;
