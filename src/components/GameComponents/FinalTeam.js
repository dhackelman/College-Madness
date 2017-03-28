import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';


class FinalTeam extends React.Component {
    render() {
      const collegeSpecificResearch = "research/" + this.props.home.team.id;
        return (
          <div className="team__container" onClick={()=> {this.props.selectFour(this.props.home.team.id, this.props.away.team.id, this.props.round)}}>
            <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={30}/></Link>
            <img className="team__logo" src={this.props.home.team.image ? this.props.home.team.image : "https://s-media-cache-ak0.pinimg.com/236x/7c/aa/e9/7caae9c662662230b13d53033e4dbbfa.jpg"} alt={this.props.home.team.abbrev}></img>
            <span className="team__seed">{this.props.home.team.seed ? this.props.home.team.seed : ''}</span>
            <span className="team__name">{this.props.home.team.abbrev}</span>
          </div>
        );
    }
}

export default FinalTeam;
