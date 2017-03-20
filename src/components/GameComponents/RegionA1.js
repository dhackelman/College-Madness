import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
// import Round8 from './Round8';
// import Round4 from './Round4';
// import Round2 from './Round2';
// import RoundWin from './RoundWin';
import SignEast from './SignEast';

import {filterByRegion} from '../../helper.js';

class RegionA1 extends React.Component {

    render() {

        const teams = filterByRegion("East", this.props.TeamData.teams);
        const finalFour = this.props.TeamData.teams;

        return (
            <div className="region__A1">
                <Round64 update={this.props.update} TeamData={teams}></Round64>
                <Round32 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round32>
                <Round16 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round16>
                <SignEast/>
            </div>
        );
    }
}

export default RegionA1;
