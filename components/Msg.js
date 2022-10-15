import React from 'react'
import styles from './Msg.module.scss'

const Msg = ({id, isMe=true, children, time, user, isReply=false}) => {
  return (
    <div className={isMe?styles.me:styles.others} id={id}>
        <div className={styles.icon} data-user={user}></div>
        <div className={styles.content} data-time={time}>
            <span>{children}</span>
            <i>R</i>
            {isReply && <a href={`#${isReply.id}`}>{isReply.user}</a>}
        </div>
    </div>
  )
}

export default Msg