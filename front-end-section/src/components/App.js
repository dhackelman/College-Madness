import React from 'react';
// import {Link} from 'react-router';
// import Container from './Container';
import Header from './Header';
import axios from 'axios';
import Data from '../Data/data.js';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
    }
    componentWillMount() {
      // let http = new XMLHttpRequest();
      // http.onreadystatechange = function() {
      //     if (http.readyState === 4 && http.status === 200) {
      //         console.log(http.response);
      //         // this.setState({data});
      //       }
      //     }
      // http.open('GET', `../Data/data.json`, true);
      // http.send();
      console.log(Data);
    }




    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {bracket: this.state.results});
        });
        return (
            <div>
                <Header/>
                  {childWithProp}
            </div>
        );
    }
}

export default App;
