import React from "react";

export const Logo = ({width="64", height="64"}: {width: string, height: string}) => {
  return <img src="https://mcjabko-images.s3.eu-central-1.amazonaws.com/logo.png" alt="Logo" width={width} height={height} />;
};
