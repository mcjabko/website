import React from "react";
import Image from "next/image";

export const Logo = ({width=64, height=64}: {width: number, height: number}) => {
  return <Image src="/logo.png" alt="Logo" width={width} height={height} />;
};
