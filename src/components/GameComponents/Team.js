import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {

    selectTeam(e, key) {
        e.preventDefault();

        this.props.update(key);
        let found = false;
        let tempActive;
        const matchup = this.activeTeam.classList[1];
        const selectedMatch = document.querySelectorAll('.' + matchup);

        selectedMatch.forEach((team) => { // omg

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
        const ourKey = this.props.team.id;
        // console.log('props ', this.props);
        // NOTE: update using details from
        return (

            <div data-matchup={this.props.team.seed} ref={(team) => this.activeTeam = team} onClick={(e) => this.selectTeam(e, ourKey)} className={`team__container ${this.props.id}`}>
                <FaInfoCircle className="team__info" size={30}/>
                <img className="team__logo" src={TeamLogo} alt="Team Logo"></img>
                <span className="team__seed">{this.props.team.seed}</span>
                <span className="team__name">{this.props.team.abbrev}</span>
                <span className="team__wins">{this.props.team.wins}</span>
            </div>

        );
    }
}

export default Team;;
