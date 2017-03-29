import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import Region from './Region';
import FinalFour from './FinalFour';
import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';

class MainBracket extends React.Component {
  constructor() {
    super();
    this.filterByRegion = this.filterByRegion.bind(this);
    // this.filterByWins = this.filterByWins.bind(this);
    // this.filterByPredictedWins = this.filterByPredictedWins.bind(this);
    this.checkFinalFour = this.checkFinalFour.bind(this);
    // this.checkNatChamp = this.checkNatChamp.bind(this);
    this.sendBracketData = this.sendBracketData.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);

    this.state = {
      AllTeams: [],
      East: [],
      West: [],
      Midwest: [],
      South: [],
      FinalFour: Dummy4.user_predictions,
      NatChamp: Dummy2.user_predictions,
      Champion: []
    };
  }

  componentWillUpdate(nextProps, nextState) {
    // localStorage.setItem("east", JSON.stringify(nextState.East));
    // localStorage.setItem("west", JSON.stringify(nextState.West));
    // localStorage.setItem("midwest", JSON.stringify(nextState.Midwest));
    // localStorage.setItem("south", JSON.stringify(nextState.South));
    localStorage.setItem("allteams", JSON.stringify(nextState.AllTeams));

  }

  updateLocalStorage() {
    localStorage.setItem("allteams", JSON.stringify(this.state.AllTeams));
  }

  componentDidMount() {
    let localStorageRef = localStorage.getItem("allteams");
    // if(localStorageRef) {
    //   console.log('in localStorageRef if');
    //   this.setState({AllTeams: JSON.parse(localStorageRef)});
    //   console.log('get item after if ', localStorage.getItem("allteams"));
    // }

    // const localStorageRefEast = localStorage.getItem("east");
    // if(localStorageRefEast) {
    //   console.log('in localStorageRef east');
    //   this.setState({East: JSON.parse(localStorageRefEast)});
    // }
    // const localStorageRefWest = localStorage.getItem("west");
    // if(localStorageRefWest) {
    //   console.log('in localStorageRef west');
    //   this.setState({West: JSON.parse(localStorageRefWest)});
    // }
    // const localStorageRefMid = localStorage.getItem("midwest");
    // if(localStorageRefMid) {
    //   console.log('in localStorageRef mid');
    //   this.setState({Midwest: JSON.parse(localStorageRefMid)});
    // }
    // const localStorageRefSouth = localStorage.getItem("south");
    // if(localStorageRefSouth) {
    //   console.log('in localStorageRef south');
    //   this.setState({South: JSON.parse(localStorageRefSouth)});
    // }

    let currentUser = this.props.user;
    if(localStorage.getItem("user")) {
      currentUser = localStorage.getItem("user");
    }

    axios.get(`https://kipp-madness-api.herokuapp.com/users/${currentUser}.json`)
      .then((response) =>{
        const regionalBreakdown = response.data.user_predictions;
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
            return val.team.region === region;
        });
        if (region === 1) {
            this.setState({East: teams});
        }
        if (region === 2) {
            this.setState({West: teams});
        }
        if (region === 3) {
            this.setState({Midwest: teams});
        }
        if (region === 4) {
            this.setState({South: teams});
        }
        return
    }

    sendBracketData(event) {
      let currentId = this.props.user;
      event.preventDefault();

      let allTeams = this.state.AllTeams;
      let brentice = [];
      allTeams.map((team) => {
          let data = {
            "id": team.id,
            "predicted_wins": team.predicted_wins
          }
        brentice.push({"user_prediction": data});

      });
      console.log('in send bracket data', brentice);
      axios.put(`https://kipp-madness-api.herokuapp.com/user_predictions/batch_update`, brentice)
        .then((response) =>{
          console.log(response);
        });

    }

    render() {
      if (!this.state.AllTeams.length) {
        return (<div className="loadingball__container"><h1>Loading...</h1><Loading/></div>);
      }

        return (
            <div className="component__container">
              <Region local={this.updateLocalStorage} filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.East} allTeams={this.state.AllTeams}/>
              <Region local={this.updateLocalStorage} filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.West} allTeams={this.state.AllTeams}/>
              <Region local={this.updateLocalStorage} filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.Midwest} allTeams={this.state.AllTeams} />
              <Region local={this.updateLocalStorage} filter={this.filterByPredictedWins} check={this.checkFinalFour} teams={this.state.South} allTeams={this.state.AllTeams}/>
              <FinalFour teams={this.state.FinalFour} sendBracketData={this.sendBracketData} two={this.state.NatChamp} one={this.state.Champion} allTeams={this.state.AllTeams}/>
            </div>
        );
    }
}

export default MainBracket;
