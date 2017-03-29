import React from 'react';
import { Link } from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class FinalChamp extends React.Component {

    render() {
      // const collegeSpecificResearch = "research/" + this.props.teams[0].id;
      console.log(this.props.teams.team.name);
        return (
          <div className="team__container final__team">
          <FaInfoCircle className="team__info" size={30}/>
            <img className="team__logo" src="https://kipp-madness.herokuapp.com/bball-placeholder.png"></img>
            <span className="team__seed">{this.props.teams.team ? this.props.teams.team : ''}</span>
            <span className="team__name">{this.props.teams.team}</span>
          </div>
        );
    }
}

export default FinalChamp;
