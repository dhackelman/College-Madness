import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {
    selectTeam(e, key) {
        e.preventDefault();
        // console.log('event key ', e, key);
        // this.activeTeam.classList.toggle('team__selected');
        // this.props.team.round_64 = true;

        this.props.update(key);
        let found = false;
        let tempActive;
        const matchup = this.activeTeam.classList[1];
        console.log('matchup --> ', matchup);
        const selectedMatch = document.querySelectorAll('.' + matchup);
        console.log('selectedMatch', selectedMatch);
        // this.activeTeam.classList.toggle('team__selected');

        selectedMatch.forEach((team) => { // omg
            if (!found) {
                if (this.activeTeam === team && !team.classList.contains('team__selected')) {
                    tempActive = document.querySelector(`.${matchup}.team__selected`);
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

    styleChosenTeams(e, a) {
        e.preventDefault();
        // console.log(this.activeTeam);
        // this.activeTeam.classList.add('team__selected');
        const selectedMatch = document.querySelectorAll('.' + this.activeTeam.classList[1]);

        // a.classList.toggle('team__selected');
        // let teams = document.querySelectorAll('.team__container');
        // let unSelectedTeams = document.querySelectorAll('[data-id="0"]');
        // console.log(unSelectedTeams);
    }

    render() {
        const ourKey = this.props.team.id;

        return (

            <div ref={(team) => this.activeTeam = team} onClick={(e) => this.selectTeam(e, ourKey)} className={`team__container ${this.props.id}`}>
                <FaInfoCircle className="team__info" size={30}/>
                <img className="team__logo" src={TeamLogo} alt="Team Logo"></img>
                <span className="team__seed">{this.props.team.seed}</span>
                <span data-id={this.props.team.wins} className="team__name">{this.props.team.abbrev}</span>
            </div>

        );
    }
}

export default Team;
