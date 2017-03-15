import React from 'react';
import Matchup from './Matchup';

class Round64 extends React.Component {

    render() {
        const teams = this.props.TeamData;
        let i = 1;
        console.log(this.props.TeamData);
        return (

            <div className="round_64__container">
                {teams.map((team) => {
                    if (i === 9) 
                        return;
                    const team_1 = team;
                    const team_2 = teams[teams.length - i];
                    i++;

                    return <Matchup key={team_1.id} team1={team_1} team2={team_2}></Matchup>;
                })}

            </div>

        );
    }
}

export default Round64;
