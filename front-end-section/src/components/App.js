import React from 'react';
// import {Link} from 'react-router';
// import Container from './Container';
import Header from './Header';
// import axios from 'axios';



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
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
