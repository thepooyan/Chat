import React from 'react'
import styles from './Reply.module.scss'

const Reply = ({getDownActive=false}) => {
    return (
        <div className={styles.wrap}>
            <span className={`${styles.getDown} ${getDownActive?styles.active:''}`}>D</span>
            <div className={`${styles.reply} ${styles.closed}`}>
                <div></div>
                <i>close</i>
            </div>
        </div>
    )
}

export default Reply