import React, { useState } from "react";
import styles from "./CopyButton.module.css";

// @ts-ignore
export const CopyButton = ({ children }: React.PropsWithChildren) => {
  const [IsCopied, setIsCopied] = useState(false);
  const handleClick = async () => {
    await navigator.clipboard.writeText(children as string);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <button onClick={handleClick}>
      {IsCopied ? "Zkopírováno!" : children}
    </button>
  );
};
