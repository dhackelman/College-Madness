import React from 'react';
// import {Link} from 'react-router';
// import Container from './Container';
import Header from './Header';
// import axios from 'axios';
import bracketData from '../Data/data.js';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            bracketData: bracketData
        };
    }
    componentWillMount() {

        console.log(bracketData);
        this.setState({bracketData});
    }

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
