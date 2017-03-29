import React from 'react';
// import ball from '../../styles/images/loading_ball.png';

class Loading extends React.Component {



    render() {
        return (
            <div className="loading__container">
              <img className="loading-ball" src={require('../../styles/images/loading_ball.png')} alt={"basketball"}></img>
            </div>
        );
    }
}

export default Loading;
