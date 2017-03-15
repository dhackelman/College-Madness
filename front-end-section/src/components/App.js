import React from 'react';
// import {Link} from 'react-router';
// import Container from './Container';
import Header from './Header';

class App extends React.Component {
    constructor() {
        super();

        this.state = {};
    }
    render() {
        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {});
        });
        return (
            <div>
                <Header/> {childWithProp}
            </div>
        );
    }
}

export default App;
