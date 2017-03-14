import React from 'react';
// import axios from 'axios';
import {Link} from 'react-router';
import Header from './Header';

class App extends React.Component {
    constructor() {
        super();

        // this.loadAPI = this.loadAPI.bind(this);
        // SCHOOL API KEY :: &api_key=5AUZ58bvM6D6xLNAwhGWhO2eW2du22mS5uK28YR9
        // get initial state
        this.state = {
            loadAPI: {},
            results: []
        }
    }

    //     componentDidMount() {
    //         axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=5AUZ58bvM6D6xLNAwhGWhO2eW2du22mS5uK28YR9`).then(results => {
    //             console.log('results', results);
    //
    //             this.setState({results});
    //         });
    // } End componentDidMount

    render() {
        return (
            <div>
                <Header/>
                <h1>Welcome to KIPP Madness</h1>
                <h1>header one</h1>
                <h2>header two</h2>
                <h3>header three</h3>
                <h4>header four</h4>
                <h5>header five</h5>
                <h6>header six</h6>
                <Link to='bracket'>Go To Bracket</Link>
            </div>
        );
    }
}

export default App;
