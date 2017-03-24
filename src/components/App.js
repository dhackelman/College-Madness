import React from 'react';
import Header from './Header';


class App extends React.Component {


    render() {

        const childWithProp = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
            });
        });

        return (
            <div>
                <Header/> {childWithProp}
            </div>
        );
    }
}

export default App;
