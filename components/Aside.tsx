import React from 'react'
import styles from './Aside.module.scss'
const Aside = ({className}) => {
  return (
    <aside className={`${className} ${styles.side}`}>در دست توسعه...</aside>
  )
}

export default Aside