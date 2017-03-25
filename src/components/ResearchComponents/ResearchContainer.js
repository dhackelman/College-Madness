import React from 'react';
import axios from 'axios';
import ResearchStart from './ResearchStart';
import ResearchForm from './ResearchForm';
import CollegePrograms from './CollegePrograms';
import ResearchAcademicStats from './ResearchAcademicStats';

class ResearchContainer extends React.Component {
  constructor() {

    super();

    this.addStart = this.addStart.bind(this);
    this.addAcademic = this.addAcademic.bind(this);
    this.addSpecial = this.addSpecial.bind(this);

    this.state = {
      Schools: [],
      showStart: true,
      showAcademic: false,
      showSpecial: false
    };
  }
  componentWillMount() {
    axios.get("https://kipp-madness-api.herokuapp.com/teams/1.json")
      .then((response) =>{
        this.setState({Schools:response.data});
      });
    }


    addStart() {
      this.setState({showStart: true});
      this.setState({showAcademic: false});
      this.setState({showSpecial: false});
    }
    addAcademic() {
      this.setState({showStart: false});
      this.setState({showAcademic: true});
      this.setState({showSpecial: false});
    }
    addSpecial() {
      this.setState({showStart: false});
      this.setState({showAcademic: false});
      this.setState({showSpecial: true});
    }



    render() {
      const start = this.state.showStart ? <ResearchStart className="research__initial" school={this.state.Schools}/> : '';
      const academic = this.state.showAcademic ? <ResearchAcademicStats className="research__initial" school={this.state.Schools}/> : '';
      const programs = this.state.showSpecial ? <CollegePrograms className="research__initial" school={this.state.Schools}/> : '';

        return (
            <div>
                <nav className="research__nav">
                    <ul>
                        <li className="research__nav__item" onClick={this.addStart}>Start Here!</li>
                        <li className="research__nav__item" onClick={this.addAcademic}>Academic Stats</li>
                        <li className="research__nav__item" onClick={this.addSpecial}>Special Programs</li>
                        {/*<li className="research__nav__item">Watch & Learn</li>*/}
                    </ul>
                </nav>
                <div className="research__container">
                  {start}
                  {academic}
                  {programs}
                  <ResearchForm className="research__form" />
                </div>
            </div>
        );
    }
}

export default ResearchContainer;
