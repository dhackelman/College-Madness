import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {
    selectTeam(e, key) {
        e.preventDefault();
        console.log('event key ', e, key);
        // this.activeTeam.classList.toggle('team__selected');
        // this.props.team.round_64 = true;

        this.props.update(key);
    }

    render() {
        const ourKey = this.props.team.id;
        console.log('check duke ', this.props.team.round_64);
        return (

            <div ref={(team) => this.activeTeam = team} onClick={(e) => this.selectTeam(e, ourKey)} className="team__container">
                <FaInfoCircle className="team__info" size={30}/>
                <img className="team__logo" src={TeamLogo} alt="Team Logo"></img>
                <span className="team__seed">{this.props.team.seed}</span>
                <span className="team__name">{this.props.team.abbrev}</span>
            </div>

        );
    }
}

export default Team;
