import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';


class FinalChamp extends React.Component {
    render() {
      const champ = this.props.teams[0];
      const collegeSpecificResearch = "research/" + champ.team.id;
        return (
          <div className="team__container the__champ">
            <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" className={!champ.predicted_wins && this.props.round !== 'round_64' ? "is-hidden" : "team__info"}size={30}/></Link>
            <img className={!champ.team.image ? "is-hidden" : "team__logo"} src={champ.team.image} alt={champ.team.name}></img>
            <img className={champ.team.image ? "is-hidden" : "team__logo placeholder"}  src="https://kipp-madness.herokuapp.com/bball-placeholder.png" alt='basketball'></img>
            <span className="team__seed">{champ.team.seed ? champ.team.seed : ''}</span>
            <span className="team__name">{champ.team.abbrev}</span>
          </div>
        );
    }
}

export default FinalChamp;
