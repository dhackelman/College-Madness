import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {
    componentWillReceiveProps(props) {
        console.log('props --> ', props);
        // const team32 = props.searchWins();
        // let teamDataFilter = props.TeamData.filter((team) => {
        //     return team.wins !== 0;
        let newTeams = props.searchWins(props.TeamData);
        console.log('teamData', props.TeamData.team);
        console.log("here", newTeams);
    }


    render() {

        return (
            <div className="round_32__container">

            </div>
        );
    }
}

export default Round32;
