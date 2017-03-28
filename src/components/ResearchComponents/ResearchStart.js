import React from 'react';
import {Link} from 'react-router';
import CollegeOnAMap from './CollegeOnAMap';

class ResearchStart extends React.Component {



    render() {
      const school = this.props.school;
      const site = "http://" + this.props.school.url;
        return (
                <div className="college__basics">
                    <h2>{school.school_name}</h2>
                    <p>Location:<span>{school.city},{school.state}</span>
                    </p>
                    <p>Student Population:<span>{school.student_size} students</span>
                    </p>
                    <p>Cost:<span>${school.out_of_state_tuition_average}</span>
                    </p>
                    <p>Learn More: <span><Link to={site} target="_blank" alt={this.props.school.name}>{this.props.school.url}</Link></span>
                    </p>
                    <div className="college__visuals">
                      <div id="thisFuckingMap" style={{width: '100%', height: '400px'}}>
                        <CollegeOnAMap lat={school.latitude} lng={school.longitude}/>
                      </div>
                        <div className="college__logo">
                            <img src={this.props.school.school_image_url} alt="Mascot"/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default ResearchStart;
