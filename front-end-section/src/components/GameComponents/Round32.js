import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {
    componentWillReceiveProps(props) {
        console.log('props --> ', props);
        // const team32 = props.searchWins();
        // let teamDataFilter = props.TeamData.filter((team) => {
        //     return team.wins !== 0;
    }

    // }
    // componentWillUpdate(props, state) {
    //     console.log('state ', state);
    // }
    render() {

        return (
            <div className="round_32__container"></div>
        );
    }
}

export default Round32;
