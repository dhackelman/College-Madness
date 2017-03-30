import React from 'react';

class Inbox extends React.Component {

    render() {
      const index = this.props.index;

        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Student Messsages</p>
            <ul className="inbox__messages">
              {this.props.submssions.map((thing)=> {
                return <li className="inbox__single" key={thing.submission_id}>
                  <p>{thing.input}</p>
                  <div className="button__holder">
                    <button onClick={()=>{this.props.updateSubmssionScore(true, thing.submission_id)}} className={thing.submission_id === 0 ? "is-hidden" : "inbox__pass kippBtn"}>Great Job!</button>
                    <button onClick={()=>{this.props.updateSubmssionScore(false, thing.submission_id)}} className={thing.submission_id === 0 ? "is-hidden" : "inbox__fail kippBtn"}>Try Again</button>
                  </div>
                  <div className={thing.status ?  "overlay" :"transparent"}>
                    <p>Feedback Given.</p>
                  </div>
                </li>
              })}
            </ul>
            <div className={{index} === 0 ?  "inbox__overlay" : "is-hidden"}>
              <p  className={ {index} ===0 ?  "default__instruction": "is-hidden"}>Please select a student to begin.</p>
          </div>
        </div>
        );
    }
}

export default Inbox;
