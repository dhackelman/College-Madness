import React from 'react';

class Message extends React.Component {

    render() {
        return (
          <ul className="inbox__messages">
          {this.props.messages.map((user)=>{
            return <li className="inbox__single" key={user.submission_id}><p>{user.input}</p><button className="inbox__pass">Pass</button><button className="inbox__fail">Fail</button></li>
            })}
          </ul>
        );
    }
}

export default Message;
