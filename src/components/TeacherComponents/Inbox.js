import React from 'react';

class Inbox extends React.Component {

    render() {
        return (
          <div className="teacher__inbox">
            <p className="inbox__header">Room 2105</p>
            <div className="inbox__messages">
              <div className="inbox__single">
                <p>This is a message from your student. Read it and Weep.</p>
                <button className="inbox__pass">Pass</button>
                <button className="inbox__fail">Fail</button>
              </div>
              <div className="inbox__single">
                <p>This is a message from your student. Read it and Weep.</p>
                <button className="inbox__pass">Pass</button>
                <button className="inbox__fail">Fail</button>
              </div>
              <div className="inbox__single">
                <p>This is a message from your student. Read it and Weep.</p>
                <button className="inbox__pass">Pass</button>
                <button className="inbox__fail">Fail</button>
              </div>
              <div className="inbox__single">
                <p>This is a message from your student. Read it and Weep.</p>
                <button className="inbox__pass">Pass</button>
                <button className="inbox__fail">Fail</button>
              </div>
            </div>
          </div>
        );
    }
}

export default Inbox;
