import React from 'react';

class Inbox extends React.Component {

    render() {

        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Click a student to reveal their research.</p>
            <ul className="inbox__messages">
              {this.props.submssions.map((thing)=> {
                console.log(thing);
                return <li className="inbox__single" key={thing.submission_id}>
                  <p>{thing.input}</p>
                  <div className="button__holder">
                    <button onClick={()=>{this.props.updateSubmssionScore(true, thing.submission_id)}} className={thing.submission_id === 0 ? "is-hidden" : "inbox__pass kippBtn"}>Great Job!</button>
                    <button onClick={()=>{this.props.updateSubmssionScore(false, thing.submission_id)}} className={thing.submission_id === 0 ? "is-hidden" : "inbox__fail kippBtn"}>Try Again</button>
                  </div>
                </li>
              })}
            </ul>
            <div className="overlay">
              <img src={req('http://college-madness.herokuapp.com/processed.png')}></img>
            </div>
        </div>
        );
    }
}

export default Inbox;
