import React from 'react';
import {Link} from 'react-router';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import Round8 from './Round8';

class RegionA1 extends React.Component {

    render() {
        return (
            <div className="region__A">
                <h1>Region A1 / East</h1>
                <Round64/>
                <Round32/>
                <Round16/>
                <Round8/>
            </div>
        );
    }
}

export default RegionA1;
