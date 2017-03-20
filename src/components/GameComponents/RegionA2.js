import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';
// Rounds 4, 2 & Win in region A1
import SignWest from './SignWest';
import {filterByRegion} from '../../helper.js';

class RegionA2 extends React.Component {

    render() {
        const teams = filterByRegion("West", this.props.TeamData.teams);

        return (
            <div className="region__A2">
                <Round64 update={this.props.update} TeamData={teams}></Round64>
                <Round32 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round32>
                <Round16 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round16>
                <Round8 update={this.props.update} searchWins={this.props.searchWins} TeamData={teams}></Round8>

                <SignWest/>
            </div>
        );

    }
}

export default RegionA2;
