import React from 'react'
import styles from './Context.module.scss'

const Context = () => {
    return (
        <div className={styles.contextPlaceholder}>
            <ul className={styles.context}>
                <li className={styles.strict} id={styles.delete}>حذف پیام</li>
                <li className={styles.strict} id={styles.edit}>ویرایش</li>
                <li id={styles.reply}>پاسخ</li>
            </ul>
        </div>
    )
}

export default Context