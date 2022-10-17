import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Msg.module.scss'

type PropsType = {id: number, isMe: boolean, children:any, time: string, user:string, isReply: {id:number, user:string}|undefined}
const Msg = ({id, isMe=true, children, time, user, isReply=undefined}:PropsType) => {
  return (
    <div className={isMe?styles.me:styles.others} id={id.toString()}>
        <div className={styles.icon} data-user={user}></div>
        <div className={styles.content} data-time={time}>
            <span>{children}</span>
            <FontAwesomeIcon icon={faReply}></FontAwesomeIcon>
            {isReply && <a href={`#${isReply.id}`}>{isReply.user}</a>}
        </div>
    </div>
  )
}

export default Msg