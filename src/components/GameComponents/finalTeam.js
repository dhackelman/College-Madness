import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';

class Team extends React.Component {

    render() {
        if (this.props.team === null) {
            return null;
        }
        let ourKey = this.props.team.id;

        return (
            <div>
                <div ref={(team) => this.activeTeam = team} onClick={(e) => this.selectTeam(e, ourKey)} className={`team__container ${this.props.id}`}>
                    <FaInfoCircle className="team__info" size={30}/>
                    <img className="team__logo" src={TeamLogo} alt="Team Logo"></img>
                    <span className="team__seed">{this.props.team.seed}</span>
                    <span className="team__name">{this.props.team.abbrev}</span>
                    <span className="team__wins">{this.props.team.wins}</span>
                </div>
            </div>
        );
    }
}

export default Team;
