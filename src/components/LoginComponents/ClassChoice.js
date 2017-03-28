import React from 'react';

class ClassChoice extends React.Component {

    render() {
        return (
            <div>
              <li onClick={this.updateHomeroom} key={classes.id}>{classes.name}</li>;
            </div>
        );
    }
}

export default ClassChoice;
