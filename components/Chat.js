import React from 'react'
import styles from './Chat.module.scss'
import Context from './Context'
import Date from './Date'
import Form from './Form'
import Msg from './Msg'

const Chat = ({className}) => {

  const Msgs = [
    { id: 3, user: 'احمد', time: '11:00 PM', text: 'این یک پیام تستی است', isMe: false, isReply: 3 },
    { id: 4, user: 'پویان', time: '11:00 AM', text: 'این یک پیام تستی است', isMe: true, isReply: 4 },
  ]

  return (
    <section id={styles.chat} className={className}>
      <div className={styles.veiw}>
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

        <Form/>
    </section>
  )
}

export default Chat