import React from 'react';

class ResearchAcademicStats extends React.Component {



    render() {
      const school = this.props.school;
        return (
                <div className="college__basics">
                    <h2>{school.name}</h2>
                    <p>Average SAT Overall:<span>{school.average_sat_overall}</span>
                    </p>
                    <p>Average SAT Math:<span>{school.average_sat_math} students</span>
                    </p>
                    <p>Average SAT Reading:<span>${school.average_sat_critical_reading}</span>
                    </p>
                    <p>Admission Rate: <span>{school.admission_rate}</span>
                    </p>
                </div>
        );
    }
}

export default ResearchAcademicStats;
