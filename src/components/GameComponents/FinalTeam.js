import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';

class FinalTeam extends React.Component {

    render() {

        let teams = this.props.searchWins(this.props.TeamData, 6);
        let teamFinal = null;
        teams.forEach((team) => {
            if (team.wins === 6) {
                teamFinal = team;
            } else {
                console.log('Error in Final Round ForEach loop');
            }
        })

        if (teamFinal === null) {
            return null;
        }

        return (
            <div>
                <div className="round_1__container">
                    <img className="team__logo-final" src={TeamLogo} alt="Team Logo"></img>
                    <h1 key={teamFinal.id} className="team__name">{teamFinal.name}</h1>
                </div>
            </div>
        );
    }
}

export default FinalTeam;
