import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {
    selectTeam(e, source) {
        e.preventDefault();
        console.log(this.activeTeam);
        this.activeTeam.classList.toggle('team__selected');

    }

    render() {

        return (

            <div ref={(team) => this.activeTeam = team} className="team__container" onClick={(e) => this.selectTeam(e, this)}>
                <FaInfoCircle className="team__info" size={30}/>
                <img className="team__logo" src={TeamLogo} alt="Team Logo"></img>
                <span className="team__seed">{this.props.team.seed}</span>
                <span className="team__name">{this.props.team.abbrev}</span>
            </div>

        );
    }
}

export default Team;
