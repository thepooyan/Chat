import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Reply.module.scss'
import { faChevronUp, faClose } from '@fortawesome/free-solid-svg-icons'

const Reply = ({getDownActive=false}) => {
    return (
        <div className={styles.wrap}>
            <span className={`${styles.getDown} ${getDownActive?styles.active:''}`}><FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon></span>
            <div className={`${styles.reply} ${styles.closed}`}>
                <div></div>
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Reply