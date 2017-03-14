import React from 'react';
import {Link} from 'react-router';
import Round64 from './Round64';

class RegionA1 extends React.Component {

    render() {
        return (
            <div className="region__A">

                <Round64/>
                <div className="bracket__connect64-32"></div>
            </div>
        );
    }
}

export default RegionA1;
