import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
// import Round16 from './Round16';
// import Round8 from './Round8';
import {filterByRegion} from '../../helper.js';

class RegionA1 extends React.Component {

    render() {
        const teams = filterByRegion("East", this.props.TeamData.teams);
        // const teams = filterByRegion("West", this.props.TeamData.teams);
        // const teams = filterByRegion("MidWest", this.props.TeamData.teams);
        // const teams = filterByRegion("South", this.props.TeamData.teams);
        teams.forEach((team) => {
            // console.log('team in for', team.abbrev);
        });
        console.log('region a teams', teams);

        return (
            <div className="region__A">

                <Round64 update={this.props.updateSelectedTeam} TeamData={teams}></Round64>
                <Round32 update={this.props.updateSelectedTeam} searchWins={this.props.searchWins} TeamData={teams}></Round32>

            </div>
        );
    }
}

export default RegionA1;
