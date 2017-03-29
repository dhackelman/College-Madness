import React from 'react';

class Inbox extends React.Component {


    render() {

        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Room 2105</p>
            <ul className="inbox__messages">

              {this.props.submssions.map((thing)=> {
                return <li className="inbox__single" key={thing.submission_id}>
                <div className={thing.status ?  "overlay" :"transparent"}>
                    <img className={thing.status ? "message__processed" : "is-hidden"} src="https://kipp-madness.herokuapp.com/processed.png"></img>
                </div>
                  <p>{thing.input}</p>
                  <div className="button__holder">
                    <button onClick={()=>{this.props.updateSubmssionScore(true, thing.submission_id)}} className={thing.submission_id === 0 ? "is-hidden" : "inbox__pass kippBtn"}>Great Job!</button>
                    <button onClick={()=>{this.props.updateSubmssionScore(false, thing.submission_id)}} className={thing.submission_id === 0 ? "is-hidden" : "inbox__fail kippBtn"}>Try Again</button>
                  </div>

                </li>
              })}
            </ul>

          </div>
        );
    }
}

export default Inbox;
