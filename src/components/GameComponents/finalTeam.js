import React from 'react';
import TeamLogo from '../../styles/images/teamLogo.png';

class FinalTeam extends React.Component {

    render() {

        console.log('props ', this.props);
        let teams = this.props.searchWins(this.props.TeamData, 6);
        let teamFinal = null;
        console.log('teams ', teams);
        teams.forEach((team) => {
            if (team.wins === 6) {
                teamFinal = team;
            } else {
                console.log('Error in Final Round ForEach loop');
            }
            console.log('final Team ', teamFinal);
        })
        console.log('final Team out ', teamFinal);

        if (teamFinal === null) {
            console.log('null ? ', teamFinal);
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
