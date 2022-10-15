import styles from './index.module.scss'
import Aside from "../components/Aside";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <>
      <Chat className={styles.chat}/>
      <Aside className={styles.aside}/>
    </>
  )
}
