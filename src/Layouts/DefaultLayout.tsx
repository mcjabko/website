import React, { ReactNode } from "react";
import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const DefaultLayout = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
