import React from 'react';

class Message extends React.Component {


    render() {
        return (
          <ul className="inbox__messages">
            {this.props.iterate(this.props.messages)}
                <button className="inbox__pass">Pass</button>
                <button className="inbox__fail">Fail</button>
          </ul>
        );
    }
}

export default Message;
