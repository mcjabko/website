import React, { useState } from "react";
import styles from "./Acordation.module.css";
import { Plus, Minus } from "phosphor-react";
import { Transition } from "@headlessui/react";

// @ts-expect-error JSX element no types
export const Acordation = ({ title, text }) => { 
  const [IsOpen, setIsOpen] = useState(false);
  const HandleClick = () => {
    setIsOpen(!IsOpen);
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
        <h4 className="font-bold text-xl">{title}</h4>
        <button className={styles.button}>
          {!IsOpen ? (
            <Plus size={32} color="#f66151" weight="bold" />
          ) : (
            <Minus size={32} color="#f66151" weight="bold" />
          )}
        </button>
      </div>

      <Transition
        show={IsOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <p>{text}</p>
      </Transition>
    </div>
  );
};
