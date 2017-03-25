import React from 'react';
import {Link} from 'react-router';

class CollegePrograms extends React.Component {



    render() {

      const site = "http://" + this.props.school.url;
        return (
                <div className="college__basics">
                  <Link to={site} target="_blank" alt={this.props.school.name}>{this.props.school.url}</Link>

              </div>
        );
    }
}

export default CollegePrograms;
