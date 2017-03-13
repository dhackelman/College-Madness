import React from 'react';
import {Link} from 'react-router';

class RegionA2 extends React.Component {

    render() {
        return (
            <div className="region__A">

                <h1>Region A2 / West</h1>
                <Link to='east'>Go To East Bracket</Link>
                <Link to='west'>Go To West Bracket</Link>
                <Link to='midwest'>Go To MidWest Bracket</Link>
                <Link to='south'>Go To South Bracket</Link>
            </div>
        );
    }
}

export default RegionA2;
