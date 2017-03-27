import React from 'react';
// import axios from 'axios';

class CollegeOnAMap extends React.Component {


// AIzaSyB0v8a3gjvjeM_vzDQfGgnLCu_6GNVO7Qc
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
