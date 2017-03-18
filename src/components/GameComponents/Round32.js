import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        let newTeams = props.searchWins(props.TeamData);
        console.log("here", newTeams);
        this.setState({round32Teams: newTeams});
    }

    render() {

        return (
            <div className="round_32__container"></div>
        );
    }
}

export default Round32;
