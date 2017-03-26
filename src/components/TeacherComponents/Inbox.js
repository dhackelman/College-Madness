import React from 'react';

class Inbox extends React.Component {

    render() {
      console.log('p', this.props);
      console.log('s', this.props.submssions);
        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Room 2105</p>
            <ul className="inbox__messages">
              {this.props.submssions.map((thing)=> {
                return <li key={thing.submission_id}>{thing.input}  <button className="inbox__pass">Pass</button><button className="inbox__fail">Fail</button></li>
              })}
            </ul>

          </div>
        );
    }
}

export default Inbox;
