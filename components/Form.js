import React from 'react'
import styles from './Form.module.scss'

const Form = () => {
  return (
    <form className={styles.form}>
        <div contentEditable></div>
        <button>ارسال</button>
    </form>
  )
}

export default Form