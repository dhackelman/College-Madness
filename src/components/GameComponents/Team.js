import React from 'react';
import {Link} from 'react-router';
import TeamLogo from '../../styles/images/teamLogo.png';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {

    selectTeam(e, key, myRegion) {
        e.preventDefault();

        this.props.updateSelectedTeam(key, myRegion);
        console.log('xxxxxxxxxxx', this.props.team.region);
        let found = false;
        let tempActive;
        const matchup = this.activeTeam.classList[1];
        const selectedMatch = document.querySelectorAll('.' + matchup);

        selectedMatch.forEach((team) => {

            if (!found) {
                if (this.activeTeam === team && !team.classList.contains('team__selected')) {
                    tempActive = document.querySelector(`.${matchup}.team__selected`);
                    // console.log('activeTeam --> ', this.activeTeam);
                    if (tempActive) {
                        tempActive.classList.remove('team__selected');
                    }
                    this.activeTeam.classList.add('team__selected');
                    found = true;
                } else if (this.activeTeam === team && team.classList.contains('team__selected')) {
                    team.classList.remove('team__selected');
                    found = true;
                } else if (this.activeTeam !== team && !this.activeTeam.classList.contains('team__selected')) {
                    tempActive = document.querySelector(`.${matchup}.team__selected`);
                    if (tempActive) {
                        tempActive.classList.remove('team__selected');
                    }
                    this.activeTeam.classList.add('team__selected');
                    found = true;
                }
            }
        });
    }

    render() {
        if (this.props.team === null) {
            return null;
        }
        let ourKey = this.props.team.id;
        let myRegion = null;
        if(this.props.team.region === 1) {
          myRegion = 1;
        }
        if(this.props.team.region === 2) {
          myRegion = 2;
        }
        if(this.props.team.region === 3) {
          myRegion = 3;
        }
        if(this.props.team.region === 4) {
          myRegion = 4;
        }

        return (
            <div>
                <div ref={(team) => this.activeTeam = team} onClick={(e) => this.selectTeam(e, ourKey, myRegion)} className={`team__container ${this.props.id}`}>
                    <Link to="/research"><FaInfoCircle className="team__info" size={30}/></Link>
                    <img className="team__logo" src={this.props.team.image} alt={this.props.team.abbrev}></img>
                    <span className="team__seed">{this.props.team.seed}</span>
                    <span className="team__name">{this.props.team.abbrev}</span>
                </div>
            </div>
        );
    }
}

export default Team;
