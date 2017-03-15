import React from 'react';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';

class RegionA2 extends React.Component {

    render() {
        return (
            <div className="region__A">
                <Round64 TeamData={this.props.TeamData}></Round64>
                <Round32 TeamData={this.props.TeamData}></Round32>
                <Round16 TeamData={this.props.TeamData}></Round16>
                <Round8 TeamData={this.props.TeamData}></Round8>
            </div>
        );
    }
}

export default RegionA2;
