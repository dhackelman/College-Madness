import React from 'react';
import {Link} from 'react-router';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {

    render() {

        return (
            <div className="team__container" onClick={()=> {this.props.selectTeam(this.props.home.team.id, this.props.away.team.id, this.props.round, this.props.home.team.region)}}>
                <Link to="/research/"><FaInfoCircle className="team__info" size={30}/></Link>
                <img className="team__logo" src={this.props.home.team.image} alt={this.props.home.team.abbrev}></img>
                <span className="team__seed">{this.props.home.team.seed ? this.props.home.team.seed : ''}</span>
                <span className="team__name">{this.props.home.team.abbrev}</span>
            </div>

        );
    }
}

export default Team;
