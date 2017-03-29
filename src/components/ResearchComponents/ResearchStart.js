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
                  <div className="is-flex">
                    <div className="info__full_container">

                      <div className="info__container">
                      <h3 className="info__title">Location</h3>
                        <p className="info__info">{school.city},{school.state}</p>
                      </div>
                      <div className="info__container">
                      <h3 className="info__title">Student Population</h3>
                        <p className="info__info">{school.student_size}</p>
                      </div>
                      <div className="info__container">
                      <h3 className="info__title">Cost</h3>
                        <p className="info__info">{school.out_of_state_tuition_average}</p>
                      </div>
                      <div className="info__container">
                      <h3 className="info__title">Learn More</h3>
                        <p className="info__info"><Link to={site} target="_blank" alt={this.props.school.name}>{this.props.school.url}</Link></p>
                      </div>
                    </div>
                    <div className="info__mascot_container">
                      <div className="info__mascot_circle">
                        <div className="college__logo">
                            <img src={this.props.school.school_image_url} alt="Mascot"/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3>Where is the "{school.school_name}" located?</h3>
                    <div className="college__visuals">

                      <div className="college__visuals-map" style={{width: '80%', height: '300px'}}>
                        <CollegeOnAMap lat={this.props.school.latitude} lng={this.props.school.longitude}/>
                      </div>
                    </div>
                </div>
        );
    }
}

export default ResearchStart;
