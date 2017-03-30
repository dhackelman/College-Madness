import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';


class FinalChamp extends React.Component {
    render() {
      const champ = this.props.teams[0];
      const collegeSpecificResearch = "research/" + champ.team.id;
        return (
          <div className="team__container the__champ">
            <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={30}/></Link>
            <img className={!champ.team.image ? "is-hidden" : "team__logo"} src={champ.team.image} alt={champ.team.name}></img>
            <span className="team__seed">{champ.team.seed ? champ.team.seed : ''}</span>
            <span className="team__name">{champ.team.abbrev}</span>
          </div>
        );
    }
}

export default FinalChamp;
