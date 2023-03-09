import React, { useState } from "react";
import styles from "./Acordation.module.css";
import { Plus, Minus } from "phosphor-react";
import { CSSTransition } from "react-transition-group";

// @ts-ignore
export const Acordation = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  const HandleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      role="button"
      tabIndex={-1}
      className={styles.container}
      onClick={HandleClick}
      onKeyDown={HandleClick}
    >
      <div className={styles.acordation}>
        {title}
        <button className={styles.button}>
          {!open ? (
            <Plus size={32} color="#f66151" weight="bold" />
          ) : (
            <Minus size={32} color="#f66151" weight="bold" />
          )}
        </button>
      </div>

      <CSSTransition
        in={open}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames="pop"
      >
        <div>{text}</div>
      </CSSTransition>
    </div>
  );
};
