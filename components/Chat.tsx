import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Chat.module.scss'
import Context from './Context'
import Date from './Date'
import Form from './Form'
import Msg from './Msg'
import Reply from './Reply'

const Chat = ({ className }) => {

  const Msgs = useSelector(state => state)

  const veiw = useRef();
  const [scrolledOut, setScrolledOut] = useState(false);

  const scrollHandler = (e) => {
    let veiw = e.target;
    if (veiw.scrollTop >= veiw.scrollHeight - veiw.clientHeight && !scrolledOut) {
      setScrolledOut(true)
    } else {
      setScrolledOut(false)
    }
  }

  const scrollChatUp = ():void => {
    veiw.current.scrollTo(0,0);
  }
  const scrollChatDown = ():void => {
    veiw.current.scrollTop = veiw.current.scrollHeight;
  }

  return (
    <section id={styles.chat} className={className}>
      <div className={styles.veiw} onScroll={scrollHandler} ref={veiw}> 
        <Context />

        <Date>1400/03/26</Date>

        {Msgs.map(item => {

          let isReply = false;
          if (item.isReply) {
            isReply = { id: item.isReply, user: Msgs.find(i => i.id === item.isReply).user }
          }

          return <Msg key={item.id} id={item.id} user={item.user} time={item.time} isReply={isReply} isMe={item.isMe}>{item.text}</Msg>
        })}
      </div>
      <Reply getDownActive={scrolledOut} scrollChatDown={scrollChatUp}/>
      <Form scrollChatDown={scrollChatDown}/>
    </section>
  )
}

export default Chat