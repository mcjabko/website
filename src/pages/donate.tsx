import { PageLayout } from "@/layouts/PageLayout";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const DonatePage: NextPage = () => {
  return (
    <PageLayout
      title="Sponzor"
      description="Podpoř nás v tom co děláme a získej nějaké ty výhody."
    >
      <div className="shadow-lg p-3 lg:m-auto lg:w-6/12 lg:p-10">
        <div className="my-5">
          <h3 className="text-center text-2xl font-bold">Výhody</h3>
          <ul>
            {benefits.map((item, id) => {
              return (
                <li key={id} className="my-3 text-lg">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-3">
          <h3 className="text-center text-2xl font-bold">
            Jak sponzora zakoupit?
          </h3>
          <ol>
            <li>
              Na našem discordu si vytvoříš tiket (
              <Link className="font-bold" href="https://discord.mcjabko.cz">
                Klikni zde
              </Link>
              )
            </li>
            <li>
              Do něj uvedeš nasledují na kolik dní (30 nebo 90) a tvoje jméno a
              příjmení (případně jméno a příjmení účtu ze kterého budou peníze
              poslány)
            </li>
            <li>Pošleme ti fakturu</li>
            <li>Fakturu uhradíš (Doporučujeme QR kód přímo na faktuře)</li>
            <li>Sponzor ti bude aktivován co nejdříve</li>
          </ol>
        </div>
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
