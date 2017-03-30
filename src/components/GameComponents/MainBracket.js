import React from 'react';
import axios from 'axios';
import Loading from './Loading';
import Region from './Region';
import FinalFour from './FinalFour';
import Dummy4 from '../../Data/Dummy4.js';
import Dummy2 from '../../Data/Dummy2.js';
import Dummy0 from '../../Data/Dummy0.js';

class MainBracket extends React.Component {
  constructor() {
    super();
    this.filterByRegion = this.filterByRegion.bind(this);
    this.filterByWins = this.filterByWins.bind(this);
    this.filterByPredictedWins = this.filterByPredictedWins.bind(this);
    this.checkFinalFour = this.checkFinalFour.bind(this);
    // this.checkNatChamp = this.checkNatChamp.bind(this);
    this.sendBracketData = this.sendBracketData.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
    this.filterAndSetState = this.filterAndSetState.bind(this);

    this.state = {
      AllTeams: [],
      East: [],
      West: [],
      Midwest: [],
      South: [],
      FinalFour: Dummy4.user_predictions,
      NatChamp: Dummy2.user_predictions,
      Champion: Dummy0.user_predictions
    };
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("allteams", JSON.stringify(nextState.AllTeams));
  }

  updateLocalStorage() {
    localStorage.setItem("allteams", JSON.stringify(this.state.AllTeams));
  }

  filterAndSetState(allTeams) {
    const regionalBreakdown = allTeams;
    this.filterByRegion(1, regionalBreakdown);
    this.filterByRegion(2, regionalBreakdown);
    this.filterByRegion(3, regionalBreakdown);
    this.filterByRegion(4, regionalBreakdown);
    this.setState({AllTeams: regionalBreakdown});
  }

  componentDidMount() {
    // console.log('in get item');
    // let localStorageRef = localStorage.getItem("allteams");
    // if(localStorage.getItem("allteams")) {
    //   this.setState({AllTeams: localStorageRef});
    // }
    let currentUser = this.props.user;
    if(localStorage.getItem("user")) {
      currentUser = localStorage.getItem("user");
    }

    if(localStorage.getItem("allteams")) {

      // this.setState({AllTeams: JSON.parse(localStorage.getItem("allteams")) })
      this.filterAndSetState(JSON.parse(localStorage.getItem("allteams")))

    } else {    axios.get(`https://kipp-madness-api.herokuapp.com/users/${currentUser}.json`)
      .then((response) =>{
        this.filterAndSetState(response.data.user_predictions)
      });
  }

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

    filterByWins(score, data) {
        const teams = data.filter((val) => {
            return val.team.wins === score;
        });
        if (score === 4) {
            this.setState({FinalFour: teams});
        }
        if (score === 5) {
            this.setState({NatChamp: teams});
        }
        // if (score === 6) {
        //     this.setState({Champion: teams});
        // }
        return
    }

    filterByPredictedWins(score, data) {
        const teams = data.filter((val) => {
            return val.predicted_wins === score;
        });
        if (score === 4) {
            this.setState({FinalFour: teams});
        }
        if (score === 5) {
            this.setState({NatChamp: teams});
        }
        // if (score === 6) {
        //     this.setState({Champion: teams});
        // }
        return
    }

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
      event.preventDefault();
      let allTeams = this.state.AllTeams;
      let brentice = [];
      allTeams.map((team) => {
          let data = {
            "id": team.id,
            "predicted_wins": team.predicted_wins
          }
        brentice.push({"user_prediction": data});
        return brentice;
      });
      axios.put(`https://kipp-madness-api.herokuapp.com/user_predictions/batch_update`, brentice)
        .then((response) =>{
          return
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
              <img className="east__logo" src={require('../../styles/images/east.png')} alt={"KIPP Logo"}/>
              <img className="west__logo" src={require('../../styles/images/west.png')} alt={"KIPP Logo"}/>
              <img className="midwest__logo" src={require('../../styles/images/midwest.png')} alt={"KIPP Logo"}/>
              <img className="south__logo" src={require('../../styles/images/south.png')} alt={"KIPP Logo"}/>

        </div>
        );
    }
}

export default MainBracket;
