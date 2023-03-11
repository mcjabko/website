import { PageLayout } from "@/Layouts/PageLayout";
import { NextPage } from "next";
import React from "react";

interface Benefit {
  command: string;
  description: string;
}

const DonatePage: NextPage = () => {
  return (
    <PageLayout
      title="Sponzor"
      description="Podpoř nás v tom co děláme a získej nějaké ty výhody."
    >
      <div className="m-auto w-6/12 p-10 shadow-lg">
        <h3 className="text-center text-2xl font-bold">Výhody</h3>
        <ul className="list-item text-justify">
          {benefits.map((item, id) => {
            return (
              <li key={id} className="my-3 text-lg">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </PageLayout>
  );
};

const benefits: string[] = [
  "/pos - Blok který právě držíš v ruce na tvoji hlavu.",
  "/sethome - Možnost si nastavit home. (5x)",
  "/sit - Můžeš si kdekoliv sednout.",
  "/glow - Nikde se nestratíš",
  "/suffixy - Vyber si ten který se ti nejvíce libí",
  "Rezervovaný slot",
  "Možnost psát barevně (chat, cedulky, knížky)",
  "Zlatý prefix v chatu a tabu.",
  "Náš neskonalý vděk",
];

export default DonatePage;
