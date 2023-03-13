import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Hero } from "@/components/Hero";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Domů" description="Vše co potřebuješ vědět o serveru">
      <div className="min-h-screen bg-slate-800 bg-[url('/hero.webp')] bg-cover bg-blend-soft-light lg:p-10">
        <Hero />
        <FeatureList features={features} />
      </div>
    </DefaultLayout>
  );
};

export const FeatureList = ({ features }: { features: Feature[] }) => {
  return (
    <div className="flex flex-wrap content-center items-center justify-center p-10 lg:flex-nowrap">
      {features.map((feature) => {
        return <Feature {...feature} />;
      })}
    </div>
  );
};

export const Feature = ({ title, description, icon }: Feature) => {
  return (
    <div className="bg-slate-700 bg-opacity-40 p-5 text-white lg:mx-3">
      <h2 className="text-center text-3xl lg:text-4xl">{icon}</h2>
      <h3 className="mb-3 text-center text-2xl font-black lg:text-3xl">
        {title}
      </h3>
      <p className="lg:text-xl">{description}</p>
    </div>
  );
};

const features: Feature[] = [
  {
    icon: "🤑",
    title: "Non P2W",
    description:
      "Na serveru není žádný P2W obsah, takže nemusíš být bohatý aby sis mohl užít hru.",
  },
  {
    icon: "🚔",
    title: "Admin Team",
    description:
      "Admim Team ti rád pomůže s řešením tvých problém ať už na serveru nebo na discordu.",
  },
  {
    icon: "🖥️",
    title: "Zázemí",
    description:
      "Všechny naše herní servey jsou provozováný na naších vlastních serverech v ČR.",
  },
];

export default Home;
