import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';


class FinalTeam extends React.Component {

    render() {


      const collegeSpecificResearch = "research/" + this.props.home.team.id;
      console.log('final team ', this.props);
        return (
          <div className="team__container" onClick={()=> {this.props.selectFour(this.props.home.team.id)}}>
            <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={30}/></Link>
            <img className="team__logo" src={this.props.home.team.image} alt={this.props.home.team.abbrev}></img>
            <span className="team__seed">{this.props.home.team.seed ? this.props.home.team.seed : ''}</span>
            <span className="team__name">{this.props.home.team.abbrev}</span>
          </div>
        );
    }
}

export default FinalTeam;
