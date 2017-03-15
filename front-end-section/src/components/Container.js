import React from 'react';
import TeamData from '../Data/data.js';

class Container extends React.Component {
    componentWillMount() {

        this.setState({TeamData: TeamData});
    }
    constructor() {
        super();
        // this.searchTeams = this.searchTeams.bind(this);
        this.state = {
            TeamData: TeamData
        };
    }

    render() {

        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {TeamData: this.state.TeamData});
        });

        return (
            <div className="component__container">
                {childWithProp}
            </div>
        );
    }
}

export default Container;
