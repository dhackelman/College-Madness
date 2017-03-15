import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';
// import {searchTeams} from '../../helper.js';

class RegionB1 extends React.Component {

    render() {
        return (
            <div className="region__B">
                <Round8 TeamData={this.props.TeamData}></Round8>
                <Round16 TeamData={this.props.TeamData}></Round16>
                <Round32 TeamData={this.props.TeamData}></Round32>
                <Round64 TeamData={this.props.TeamData}></Round64>
            </div>
        );
    }
}

export default RegionB1;
