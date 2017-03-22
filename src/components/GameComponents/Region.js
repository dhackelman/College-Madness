import React from 'react';
// import Round from './Round';
import Round64 from './Round64';
import Round32 from './Round32';
import Round16 from './Round16';
import SignEast from './SignEast';

class Region extends React.Component {

    render() {

      // let setRounds = [64, 32, 16, 8, 4, 2];
      // let marbles = null;
      // if (this.props.setRegion[0].region === 1) {
      //   marbles = "East";
      // }
      // if (this.props.setRegion[0].region === 2) {
      //   marbles = "West";
      // }
      // if (this.props.setRegion[0].region === 3) {
      //   marbles = "Midwest";
      // }
      // if (this.props.setRegion[0].region === 4) {
      //   marbles = "South";
      // }
      // let index = 0;
      //
      // let setupRounds = setRounds.map((round) => {
      //
      //     const roundName = round;
      //     index++;
      //     return <Round key={index} setRegion={this.props.setRegion} round={roundName} region={marbles} searchWins={this.props.searchWins} updateSelectedTeam={this.props.updateSelectedTeam}></Round>
      //     });



        return (
            <div className="region">

                              <Round64 updateSelectedTeam={this.props.updateSelectedTeam} setRegion={this.props.setRegion}></Round64>
                              <Round32 updateSelectedTeam={this.props.updateSelectedTeam} searchWins={this.props.searchWins} setRegion={this.props.setRegion}></Round32>
                              <Round16 updateSelectedTeam={this.props.updateSelectedTeam} searchWins={this.props.searchWins} setRegion={this.props.setRegion}></Round16>
                              <SignEast/>

            </div>
        );
    }
}

export default Region;
