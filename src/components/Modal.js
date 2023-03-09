import React from "react"
import * as styles from "../styles/modal.module.css"
import { CSSTransition } from "react-transition-group"

export default function Modal({ active, title, text }) {
  const HandleClose = () => {
    active = false
  }
  return (
    <CSSTransition in={active} timeout={300} unmountOnExit classNames="pop">
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <button onClick={HandleClose} className={styles.close}>
            X
          </button>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    </CSSTransition>
  )
}
