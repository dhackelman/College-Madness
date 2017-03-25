import React from 'react';
import axios from 'axios';
import ResearchStart from './ResearchStart';
import ResearchForm from './ResearchForm';
import CollegePrograms from './CollegePrograms';
import ResearchAcademicStats from './ResearchAcademicStats';

class ResearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      Schools: []
    };
  }
  componentWillMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/teams/1.json")
      .then((response) =>{
        this.setState({Schools:response.data});
      });
    }

    render() {
        return (
            <div>
                <nav className="research__nav">
                    <ul>
                        <li className="research__nav__item">Start Here!</li>
                        <li className="research__nav__item">Academic Stats</li>
                        <li className="research__nav__item">Special Programs</li>
                        <li className="research__nav__item">Watch & Learn</li>
                    </ul>
                </nav>
                <div className="research__container">
                  <ResearchStart className="research__initial" school={this.state.Schools}/>
                  <ResearchAcademicStats className="research__initial" school={this.state.Schools}/>
                  <CollegePrograms className="research__initial" school={this.state.Schools}/>
                  <ResearchForm className="research__form" />
                </div>
            </div>
        );
    }
}

export default ResearchContainer;
