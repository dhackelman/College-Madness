import React from 'react';

class RegionA1 extends React.Component {

    render() {
        return (
            <div className="region__A">
                <h1>Region A1 / East</h1>
                <Link to='east'>Go To East Bracket</Link>
                <Link to='west'>Go To West Bracket</Link>
                <Link to='midwest'>Go To MidWest Bracket</Link>
                <Link to='south'>Go To South Bracket</Link>

            </div>
        );
    }
}

export default RegionA1;
