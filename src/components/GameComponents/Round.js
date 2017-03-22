import React from 'react';
import Matchup from './Matchup';

class Round extends React.Component {

  determineRegion(teams) {
    let region = null;
    if (this.props.setRegion[0].region === 1) {
      region = this.props.setRegion;
    }
    if (this.props.setRegion[0].region === 2) {
      region = this.props.setRegion;
    }
    if (this.props.setRegion[0].region === 3) {
      region = this.props.setRegion;
    }
    if (this.props.setRegion[0].region === 4) {
      region = this.props.setRegion;
    }
    return region;
  }

  determineSeed(teams) {

  }
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
      // const setRound64 = this.props.setRegion;
      // const setRound32 = this.props.searchWins(this.props.setRegion, 1);
      // const setRound16 = this.props.searchWins(this.props.setRegion, 2);
      // const setRound8 = this.props.searchWins(this.props.setRegion, 3);
      // const setRound4 = this.props.searchWins(this.props.setRegion, 4);
      // const setRound2 = this.props.searchWins(this.props.setRegion, 5);
      // let round64 = null;
      // let round32 = null;
      // let round16 = null;
      // let round8 = null;
      // let round4 = null;
      // let round2 = null;
      // let team1 = null;
      // let team2 = null;



      // {for (var k in target){
      //   if (target.hasOwnProperty(k)) {
      //     alert("Key is " + k + ", value is" + target[k]);
      //   }
      // }}
      // let index64 = 0;
      // round64 = teams.map((team) => {
      //           index64++;
      //           return <Matchup key={index64} team1={team1} team2={team2} setRegion={this.props.setRegion} searchWins={this.props.searchWins} update={this.props.update}></Matchup>
      //   }

// NOTE:  I NEED TO RETURN 2 TEAMS BASED ON 2 THINGS --------------------
// NOTE:  REGION // SEED
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
        return (
            <div className="round_64__container">

            </div>

        );
    }
}

export default Round;
