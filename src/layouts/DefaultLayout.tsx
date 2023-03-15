import React, { type ReactNode } from "react";
import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface DefaultLayout {
  title: string;
  description: string;
  children: ReactNode;
}

export const DefaultLayout = ({
  title,
  description,
  children,
}: DefaultLayout) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
