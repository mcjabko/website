import React, { useState } from "react";

export const CopyButton = ({ children }: React.PropsWithChildren) => {
  const [IsCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(children as string).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }).catch(() => {
      setIsCopied(false);
    });
  };
  return (
    <button onClick={() => handleClick()}>
      {IsCopied ? "Zkopírováno!" : children}
    </button>
  );
};
