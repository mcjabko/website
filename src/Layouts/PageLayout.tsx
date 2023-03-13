import React, { ReactNode } from "react";
import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const PageLayout = ({
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
      <div className="py-10 text-center">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h2>{description}</h2>
      </div>
      <main className="p-3 my-5 lg:mx-auto lg:w-4/5 lg:p-5">{children}</main>
      <Footer />
    </>
  );
};
