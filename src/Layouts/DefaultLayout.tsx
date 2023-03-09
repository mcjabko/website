import React, { PropsWithChildren } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
