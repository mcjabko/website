import React, { ReactNode } from "react";
import { DefaultLayout } from "./DefaultLayout";

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
    <DefaultLayout>
      <div className="py-10 text-center">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <h2>{description}</h2>
      </div>
      <main className="p-5 my-5 lg:w-4/5 lg:mx-auto shadow-lg">{children}</main>
    </DefaultLayout>
  );
};
