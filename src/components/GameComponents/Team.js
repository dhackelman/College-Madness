import React from 'react';
import {Link} from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
// import bball from '../../styles/images/bball-placeholder.png';


class Team extends React.Component {
  constructor() {
    super();
    this.state = {
      Dummy: false
    }
  }


    render() {
      const img = this.state.Dummy ? <img className="team__logo" src={this.props.home.team.image}></img> : <img className="team__logo placeholder" src="https://kipp-madness.herokuapp.com/bball-placeholder.png" alt='basketball'></img>;

      const collegeSpecificResearch = "research/" + this.props.home.team.id;

      // console.log('img ', this.props.home.team.image);

        return (
            <div className="team__container" onClick={()=> {this.props.selectTeam(this.props.home.team.id, this.props.away.team.id, this.props.round)}}>
                <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={20}/></Link>
                {img}
                <span className="team__seed">{this.props.home.team.seed ? this.props.home.team.seed : ''}</span>
                <span className="team__name">{this.props.home.team.abbrev}</span>
            </div>
        );
    }
}

export default Team;
