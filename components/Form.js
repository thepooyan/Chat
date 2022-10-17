import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addMsg } from '../redux/MsgActions';
import styles from './Form.module.scss'

const Form = ({scrollChatDown}) => {

  const txtRef = useRef();
  const dispatch = useDispatch();

  const submitMsg = (e) => {
    e.preventDefault();
    let txt = txtRef.current.innerHTML;
    txt = txt.replace(/<br\/>$/, '')
    txt = txt.replace(/<br\/?>/, '\n')
    
    dispatch(addMsg('Me', '11:45 am', txt, true))
    txtRef.current.innerHTML = '';
    setTimeout(() => {
      scrollChatDown()
    }, 0);
  }

  const keyDownHandler = (e) => {
      if (e.keyCode == 13 && !e.shiftKey) {
        submitMsg(e);
      }
  }

  return (
    <form className={styles.form} onSubmit={submitMsg} onKeyDown={keyDownHandler}>
        <div contentEditable ref={txtRef}></div>
        <button type='submit'>ارسال</button>
    </form>
  )
}

export default Form