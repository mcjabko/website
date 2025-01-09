import { Acordation } from "@/components/Acordation";
import faqs from "@/data/faq";
import PageLayout from "@/layouts/PageLayout";
import { type NextPage } from "next";
import React from "react";

const FaqPage: NextPage = () => {
  return (
    <PageLayout
      title="FAQ"
      description="Nevíš si s něčím rady? Tak tady možná najdeš odpověď, pokud ne, tak se nás neboj kontaktovat!"
    >
      <div className="shadow-lg lg:p-10">
        {faqs &&
          faqs.map((item, id) => {
            const { question, answer } = item;
            return <Acordation key={id} title={question} text={answer} />;
          })}
      </div>
    </PageLayout>
  );
};

export default FaqPage;
