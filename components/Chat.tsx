import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Chat.module.scss'
import Context from './Context'
import Date from './Date'
import Form from './Form'
import Msg from './Msg'
import Reply from './Reply'

const Chat = ({ className }) => {

  const Msgs = useSelector(state => state)

  const [scrolledOut, setScrolledOut] = useState(false);

  const scrollHandler = (e) => {
    let veiw = e.target;
    if (veiw.scrollTop >= veiw.scrollHeight - veiw.clientHeight && !scrolledOut) {
      setScrolledOut(true)
    } else {
      setScrolledOut(false)
    }
  }

  let a:number;
  a = 'sdf';


  return (
    <section id={styles.chat} className={className}>
      <div className={styles.veiw} onScroll={scrollHandler}>
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
      <Reply getDownActive={scrolledOut} />
      <Form />
    </section>
  )
}

export default Chat