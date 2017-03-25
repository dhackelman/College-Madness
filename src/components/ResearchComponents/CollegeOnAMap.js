import React from 'react';
// import axios from 'axios';

class CollegeOnAMap extends React.Component {



    render() {

        return (
                <div className="college__basics">
                  <div>{this.props.lat}</div>
                    <div>{this.props.lon}</div>
                </div>
        );
    }
}

export default CollegeOnAMap;
