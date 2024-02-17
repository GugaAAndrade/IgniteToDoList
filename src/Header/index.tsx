import styles from './styles.module.scss';
import rocket from "../assets/rocket.svg"
import todo from "../assets/todo.svg"

export function Header() {
  return (
   <header className={styles.header}>
        <img src={rocket} alt="ToDo Logo" />
        <img src={todo} className={styles.logoText} alt="ToDo Logo" />
        
   </header>
  )
}