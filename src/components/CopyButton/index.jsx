import React, { useState } from "react";
import styles from "./CopyButton.module.css";

// @ts-ignore
export const CopyButton = ({ text }) => {

  const [IsCopied, setIsCopied] = useState(false);
  const handleClick = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <button onClick={handleClick} className={styles.copy_button}>
      {IsCopied ? "Zkopírováno!" : text}
    </button>
  );
};
