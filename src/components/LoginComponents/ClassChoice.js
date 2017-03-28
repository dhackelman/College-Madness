import React from 'react';

class ClassChoice extends React.Component {

    render() {
        return (
            <div>
              <div className="pickClass__container">
                <h1 className="pickClass__title">Please Select Class</h1>
                <ul>
                  <li className="pickClass__items" onClick={this.updateHomeroom} key={classes.id}>{classes.name}</li>;
                </ul>
              </div>

            </div>
        );
    }
}

export default ClassChoice;
