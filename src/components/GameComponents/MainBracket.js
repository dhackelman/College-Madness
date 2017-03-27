import React from 'react';
import Region from './Region';
import FinalFour from './FinalFour';
import axios from 'axios';
import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';

class MainBracket extends React.Component {
  constructor() {
    super();
    this.filterByRegion = this.filterByRegion.bind(this);
    // this.filterByWins = this.filterByWins.bind(this);
    // this.filterByPredictedWins = this.filterByPredictedWins.bind(this);
    this.checkFinalFour = this.checkFinalFour.bind(this);
    this.checkNatChamp = this.checkNatChamp.bind(this);

    this.state = {
      AllTeams: [],
      East: [],
      West: [],
      Midwest: [],
      South: [],
      FinalFour: Dummy4.user_predictions,
      // Four: Dummy4.user_predictions,
      NatChamp: Dummy2.user_predictions,
      Champion: []
    };
  }
  componentDidMount() {

    console.log('user ? ', this.state.CurrentUser);
    const currentUser = this.state.CurrentUser || 2;

    axios.get(`https://kipp-madness-api.herokuapp.com/users/${currentUser}.json`)
      .then((response) =>{
        console.log(response);
        const regionalBreakdown = response.data.user_predictions;
        // console.log('what up ', response.data.user_predictions);
        this.filterByRegion(1, regionalBreakdown);
        this.filterByRegion(2, regionalBreakdown);
        this.filterByRegion(3, regionalBreakdown);
        this.filterByRegion(4, regionalBreakdown);
        this.setState({AllTeams: regionalBreakdown});
        // for actual wins // vvv
        // this.filterByWins(4, regionalBreakdown);
        // this.filterByWins(5, regionalBreakdown);
        // this.filterByWins(6, regionalBreakdown);
      });
    }

    checkFinalFour(arg1, arg2) {
      let FinalFour = [...this.state.FinalFour];

      if (arg1 === 1) {
        FinalFour[0] = arg2;
      }
      if (arg1 === 2) {
        FinalFour[1] = arg2;
      }
      if (arg1 === 3) {
        FinalFour[2] = arg2;
      }
      if (arg1 === 4) {
        FinalFour[3] = arg2;
      }

      this.setState({FinalFour});
    }

    checkNatChamp(arg1, arg2) {
      // let NatChamp = [...this.state.NatChamp];
      // console.log('pre-set', NatChamp);
      // if (arg1 === 1 || arg1 === 2) {
      //   NatChamp[0] = arg2;
      // }
      // if (arg1 === 3 || arg1 === 4) {
      //   NatChamp[1] = arg2;
      // }
      console.log('main');
      // this.setState({NatChamp});
    }


    // filterByWins(score, data) {
    //     const teams = data.filter((val) => {
    //         return val.team.wins === score;
    //     });
    //     if (score === 4) {
    //         this.setState({FinalFour: teams});
    //     }
    //     if (score === 5) {
    //         this.setState({NatChamp: teams});
    //     }
    //     if (score === 6) {
    //         this.setState({Champion: teams});
    //     }
    //     return
    // }
    //
    // filterByPredictedWins(score, data) {
    //     const teams = data.filter((val) => {
    //         return val.predicted_wins === score;
    //     });
    //     if (score === 4) {
    //         this.setState({FinalFour: teams});
    //     }
    //     if (score === 5) {
    //         this.setState({NatChamp: teams});
    //     }
    //     if (score === 6) {
    //         this.setState({Champion: teams});
    //     }
    //     return
    // }

    filterByRegion(region, data) {
        const teams = data.filter((val) => {
          // return val.team.region === region;
            return val.team.region === region;
        });
        if (region === 1) {
            this.setState({East: teams});
        }
        if (region === 2) {
            this.setState({West: teams});
            // console.log('teams reg 2 west ', teams);
        }
        if (region === 3) {
            this.setState({Midwest: teams});
            // console.log('teams reg 3 midwest ', teams);

        }
        if (region === 4) {
            this.setState({South: teams});
            // console.log('teams reg 4 south ', teams);
        }
        // console.log('teams ', teams);
        return
    }

    render() {
      if (!this.state.AllTeams.length) {
        return (<h1>Loading</h1>);
      }
      console.log('render', this.state.FinalFour);


        return (
            <div className="component__container">
              <Region filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.East} allTeams={this.state.AllTeams}/>
              <Region filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.West} allTeams={this.state.AllTeams}/>
              <Region filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.Midwest} allTeams={this.state.AllTeams} />
              <Region filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.South} allTeams={this.state.AllTeams}/>
              <FinalFour teams={this.state.FinalFour} check={this.checkNatChamp} two={this.state.NatChamp} one={this.state.Champion} allTeams={this.state.AllTeams}/>

            </div>
        );
    }
}

export default MainBracket;
