import React from 'react';

class Inbox extends React.Component {

    render() {
        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Room 2105</p>
            <ul className="inbox__messages">
              {this.props.submssions.map((thing)=> {
                return <li className="inbox__single" key={thing.submission_id}><span>{thing.school_name}</span><p>{thing.input}</p><button onClick={()=>{this.props.updateSubmssionScore(true, thing.submission_id)}} className="inbox__pass">Pass</button><button onClick={()=>{this.props.updateSubmssionScore(false, thing.submission_id)}} className="inbox__fail">Fail</button></li>
              })}
            </ul>

          </div>
        );
    }
}

export default Inbox;
