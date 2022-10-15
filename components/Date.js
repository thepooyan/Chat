import React from 'react'
import styles from './Date.module.scss'

const Date = ({children}) => {
  return (
    <div className={styles.date}>{children}</div>
  )
}

export default Date