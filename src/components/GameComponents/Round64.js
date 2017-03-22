import React from 'react';
import Matchup from './Matchup';

class Round64 extends React.Component {

    render() {
        const teams = this.props.setRegion;



        let teamsCopy = [];
        teams.forEach((team) => {
            teamsCopy.push(team.team);
        })
        console.log('copy ', teamsCopy);
        teamsCopy.sort(function(a, b) {
            return parseFloat(a.seed) - parseFloat(b.seed);
        });
        return (

            <div className="round_64__container">
                {teamsCopy.map((team) => {

                    const team_1 = team;
                    const team_2 = teamsCopy.pop();
                    console.log('team 1 2 ', team_1, team_2);

                    return <Matchup key={team_1.id} id={team_1.abbrev} team1={team_1} team2={team_2} updateSelectedTeam={this.props.updateSelectedTeam}></Matchup>;
                })}

            </div>

        );
    }
}

export default Round64;
