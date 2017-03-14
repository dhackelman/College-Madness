import React from 'react';
import {Link} from 'react-router';
import Round64 from './Round64';

class RegionA1 extends React.Component {

    render() {
        return (
            <div className="region__A">
                <h1>Region A1 / East</h1>
                <Round64></Round64>
            </div>
        );
    }
}

export default RegionA1;
