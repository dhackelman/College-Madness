import React from 'react';

class Message extends React.Component {

    render() {
        return (
          <ul>
          {this.props.messages.map((user)=>{
            return <div key={user.id}className="inbox__single"><p>This is a message from {user.name}. My id is {user.id}. My homeroom is {user.classroom_id}</p><button className="inbox__pass">Pass</button><button className="inbox__fail">Fail</button></div>
            })}
          </ul>
        );
    }
}

export default Message;
