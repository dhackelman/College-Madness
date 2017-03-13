import React from 'react';

class RegionB1 extends React.Component {

    render() {
        return (
            <div className="region__B">

                <h1>Region B1 / MidWest</h1>
                <Link to='east'>Go To East Bracket</Link>
                <Link to='west'>Go To West Bracket</Link>
                <Link to='midwest'>Go To MidWest Bracket</Link>
                <Link to='south'>Go To South Bracket</Link>
            </div>
        );
    }
}

export default RegionB1;
