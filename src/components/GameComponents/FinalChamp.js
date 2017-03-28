import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class FinalChamp extends React.Component {

    render() {
      const collegeSpecificResearch = "research/" + this.props.teams[0].id;
        return (
          <div className="team__container">
            <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={30}/></Link>
            <img className="team__logo" src={this.props.teams[0].team.image ? this.props.home.team.image : "https://kipp-madness.herokuapp.com/bball-placeholder.png"} alt={this.props.teams[0].team.abbrev}></img>
            <span className="team__seed">{this.props.teams[0].team.seed ? this.props.teams[0].team.seed : ''}</span>
            <span className="team__name">{this.props.teams[0].team.abbrev}</span>
          </div>
        );
    }
}

export default FinalChamp;
