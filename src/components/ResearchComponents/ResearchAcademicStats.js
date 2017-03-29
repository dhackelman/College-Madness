import React from 'react';
import {Link} from 'react-router';

class ResearchAcademicStats extends React.Component {



    render() {
      const school = this.props.school;
      const site = "http://" + this.props.school.url;


        return (
                <div className="college__basics">
                    <h2>{school.school_name}</h2>
                      <div className="is-flex">
                        <div className="info__full_container">

                          <div className="info__container-avo">
                          <h3 className="info__title-avo">Average SAT Overall</h3>
                            <p className="info__info">{school.average_sat_overall}</p>
                          </div>
                          <div className="info__container-avo">
                          <h3 className="info__title-avo">Average SAT Math</h3>
                            <p className="info__info">{school.average_sat_math}</p>
                          </div>
                          <div className="info__container-avo">
                          <h3 className="info__title-avo">Average SAT Reading</h3>
                            <p className="info__info">{school.average_sat_critical_reading}</p>
                          </div>
                          <div className="info__container-avo">
                          <h3 className="info__title-avo">Admission Rate</h3>
                            <p className="info__info">{school.admission_rate}%</p>
                          </div>
                          <div className="info__container-avo">
                          <h3 className="info__title-avo">Learn More</h3>
                            <p className="info__info"><Link to={site} target="_blank" alt={school.name}>{school.url}</Link></p>
                          </div>
                        </div>
                        <div className="info__mascot_container">
                          <div className="info__mascot_circle">
                            <div className="college__logo">
                                <img src={school.school_image_url} alt="Mascot"/>
                            </div>
                          </div>
                        </div>
                      </div>

                </div>
        );
    }
}

export default ResearchAcademicStats;
