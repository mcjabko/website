import React, { PropsWithChildren } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header/>
      {children}
      <Footer />
    </>
  );
};
