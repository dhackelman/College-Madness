import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';


class FinalTeam extends React.Component {
    render() {
      const collegeSpecificResearch = "research/" + this.props.home.team.id;
        return (
          <div className="team__container" onClick={()=> {this.props.selectFour(this.props.home.team.id, this.props.away.team.id, this.props.round)}}>
            <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={30} className={!champ.predicted_wins && this.props.round !== 'round_64' ? "is-hidden" : "team__info"}/></Link>
            <img className={!this.props.home.team.image ? "is-hidden" : "team__logo"} src={this.props.home.team.image} alt={this.props.home.team.name}></img>
            <img className={this.props.home.team.image ? "is-hidden" : "team__logo placeholder"}  src="https://kipp-madness.herokuapp.com/bball-placeholder.png" alt='basketball'></img>
            <span className="team__seed">{this.props.home.team.seed ? this.props.home.team.seed : ''}</span>
            <span className="team__name">{this.props.home.team.abbrev}</span>
          </div>
        );
    }
}

export default FinalTeam;
