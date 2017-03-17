import React from 'react';
import Matchup from './Matchup';

class Round32 extends React.Component {

    render() {
        const teams = this.props.TeamData;

        return (
            <div className="round_32__container">
                {teams.map((team) => {

                    const team_1 = team;
                    const team_2 = teams.pop();

                    return <Matchup key={team_1.id} id={team_1.abbrev} team1={team_1} team2={team_2} update={this.props.update}></Matchup>;
                })}
            </div>
        );
    }
}

export default Round32;
