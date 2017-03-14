import React from 'react';
import Team from './Team';

class Matchup extends React.Component {

    render() {
        return (

            <div className="matchup__container">
                <Team/>
                <Team/>
            </div>

        );
    }
}

export default Matchup;
