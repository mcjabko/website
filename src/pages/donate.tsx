import { PageLayout } from "@/layouts/PageLayout";
import { type NextPage } from "next";
import Link from "next/link";
import React from "react";

const DonatePage: NextPage = () => {
  return (
    <PageLayout
      title="Sponzor"
      description="Podpoř nás v tom co děláme a získej nějaké ty výhody."
    >
      <div className="p-3 shadow-lg lg:m-auto lg:w-6/12 lg:p-10">
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
          <p className="my-10 text-center font-semibold">
            Cena je 75Kč na měsíc nebo 150Kč na 3 měsíce
          </p>
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
  "Možnost si nastavit až 5x",
  "Rezervovaný slot",
  "Možnost psát barevně",
  "Zlatý prefix v chatu a tabu.",
  "Náš neskonalý vděk",
];

export default DonatePage;
