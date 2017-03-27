import React from 'react';
import {Link} from 'react-router';
import CollegeOnAMap from './CollegeOnAMap';

class ResearchStart extends React.Component {



    render() {
      const school = this.props.school;
      const site = "http://" + this.props.school.url;
      console.log(school);
        return (
                <div className="college__basics">
                    <h2>{school.name}</h2>
                    <p>Location:<span>{school.city},{school.state}</span>
                    </p>
                    <p>Student Population:<span>{school.student_size} students</span>
                    </p>
                    <p>Cost:<span>${school.out_of_state_tuition_average}</span>
                    </p>
                    <p>Learn More: <span><Link to={site} target="_blank" alt={this.props.school.name}>{this.props.school.url}</Link></span>
                    </p>
                    <div className="college__visuals">
                      <div className="college__mape" style={{width: '100%', height: '400px'}}>
                        <CollegeOnAMap lat={school.latitude} lng={school.longitude}/>
                      </div>
                        <div className="college__logo">
                            <img src="https://static1.squarespace.com/static/54341f4be4b0ebdd5103ead3/54d3d1b2e4b09df3e6abc9a2/55e75676e4b0786e908e5ea7/1442942133747/fan-feet-carolina-unc-tarheeled-rameses.png" alt="Mascot"/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ResearchStart;
