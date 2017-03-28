import React from 'react';
import {Link} from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
// import FaDribble from 'react-icons/lib/fa/dribble';
import Dummy from '../../Data/Dummy.js';
// import bball from '../../styles/images/bball-placeholder.png';


class Team extends React.Component {
  constructor() {
    super();

    this.state = {
        TeamFiller: null
    }
  }

  componentDidMount() {
    let data = Dummy;
    this.setState({TeamFiller: data})
    }

    render() {

      // console.log('state ', this.state.TeamFiller);
      const collegeSpecificResearch = "research/" + this.props.home.team.id;
      const newBall = ""
      // console.log('img ', this.props.home.team.image);

        return (
            <div className="team__container" onClick={()=> {this.props.selectTeam(this.props.home.team.id, this.props.away.team.id, this.props.round)}}>
                <Link to={collegeSpecificResearch}><FaInfoCircle className="team__info" size={20}/></Link>
                <img className="team__logo" src={this.props.home.team.image ? this.props.home.team.image : "https://kipp-madness.herokuapp.com/bball-placeholder.png"} alt={this.props.home.team.abbrev}></img>
                <span className="team__seed">{this.props.home.team.seed ? this.props.home.team.seed : ''}</span>
                <span className="team__name">{this.props.home.team.abbrev}</span>
            </div>
        );
    }
}

export default Team;
