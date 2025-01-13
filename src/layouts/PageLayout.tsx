import React, { type ReactNode } from "react";
import { Seo } from "@/components/Seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface PageLayout {
  title: string;
  description: string;
  children: ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayout) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <div className="py-10 text-center text-white">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h2>{description}</h2>
      </div>
      <main className="my-5 p-3 lg:mx-auto lg:w-4/5 lg:p-5 bg-gray-950 text-white">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;