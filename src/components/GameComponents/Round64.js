import React from 'react';
import Matchup from './Matchup';

class Round64 extends React.Component {

    render() {
        const teams = this.props.TeamData;
        let teamsCopy = [];
        teams.forEach((team) => {
            teamsCopy.push(team);
        })

        console.log('teamscopy yo ', teamsCopy);
        // let i = 0;
        // console.log('prps TeamData --> ', teams);
        return (

            <div className="round_64__container">
                {teamsCopy.map((team) => {
                    // if (i >= 8)
                    //     return;
                    const team_1 = team;
                    const team_2 = teamsCopy.pop();

                    // console.log('in map', teams);
                    // i++;
                    return <Matchup key={team_1.id} id={team_1.abbrev} team1={team_1} team2={team_2} update={this.props.update}></Matchup>;
                })}

            </div>

        );
    }
}

export default Round64;
