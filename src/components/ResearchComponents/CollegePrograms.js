import React from 'react';

class CollegePrograms extends React.Component {



    render() {
      const school = this.props.school;
        return (
                <div className="college__basics">
                    books and shit! <a href={this.props.school.url}></a>
                </div>
        );
    }
}

export default CollegePrograms;
