import React from 'react';
import Round64 from './Round64';
// import Round32 from './Round32';
// import Round16 from './Round16';
// import Round8 from './Round8';
import {filterByRegion} from '../../helper.js';

class RegionB2 extends React.Component {

    render() {
        const teams = filterByRegion("South", this.props.TeamData.teams);

        return (
            <div className="region__B">
                <Round64 TeamData={teams}></Round64>

            </div>
        );
    }
}

export default RegionB2;
