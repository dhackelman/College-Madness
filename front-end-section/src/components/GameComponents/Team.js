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
    }

    styleChosenTeams(e, a) {
        e.preventDefault();
        console.log(a);
        a.classList.toggle('team__selected');
        let teams = document.querySelectorAll('.team__container');
        let unSelectedTeams = document.querySelectorAll('[data-id="0"]');
        console.log(unSelectedTeams);
    }

    render() {
        const ourKey = this.props.team.id;

        return (

            <div ref={(team) => this.activeTeam = team} onClick={(e) => this.selectTeam(e, ourKey)} className="team__container">
                <FaInfoCircle className="team__info" size={30}/>
                <img className="team__logo" src={TeamLogo} alt="Team Logo"></img>
                <span className="team__seed">{this.props.team.seed}</span>
                <span data-id={this.props.team.wins} className="team__name">{this.props.team.abbrev}</span>
                <button onClick={(e) => this.styleChosenTeams(e, this.activeTeam)}></button>
            </div>

        );
    }
}

export default Team;
