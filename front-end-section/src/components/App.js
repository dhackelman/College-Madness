import React from 'react';
// import {Link} from 'react-router';
// import Container from './Container';
import Header from './Header';
// import axios from 'axios';
<<<<<<< HEAD
import bracketData from '../Data/data.js';
=======


>>>>>>> b3e24ce6e77d3664fc88b6863a556a1e42eee5e4

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            bracketData: bracketData
        };
    }
<<<<<<< HEAD
    componentWillMount() {

        console.log(bracketData);
        this.setState({bracketData});
    }
=======
>>>>>>> b3e24ce6e77d3664fc88b6863a556a1e42eee5e4

    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {bracketData: this.state.bracketData});
        });
        return (
            <div>
                <Header/> {childWithProp}
            </div>
        );
    }
}

export default App;
