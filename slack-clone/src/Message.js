import React from 'react'
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="massage__info">
        <h4>
         {user}{" "} 
         <span className="message__timestamp">
          {new Date(timestamp?.toDate()).toUTCString()}
         </span>
        </h4>
        <p>{message}</p>
        {/* {message?.info?.text} 이런식으로도 체이닝이 가능함*/}
        {/* 아래 문장을 위에 한 문장으로 줄일 수 있음 */}
        {/* <p>{message && message.text && message.text}</p>     */}
        {/* 메시지가 있다면? 메시지에 텍스트가 있다면? then show me the message */}
      </div>        
    </div>
  )
}

export default Message;
