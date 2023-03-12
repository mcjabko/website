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
      <div className="h-screen bg-slate-800 bg-[url('https://cdn.discordapp.com/attachments/529330434182742026/1084545318101729311/2023-03-12_19.35.02.png')] bg-cover p-10 bg-blend-soft-light">
        <Hero />
        <FeatureList features={features} />
      </div>
    </DefaultLayout>
  );
};

export const FeatureList = ({ features }: { features: Feature[] }) => {
  return (
    <div className="flex content-center items-center justify-center p-10">
      {features.map((feature) => {
        return <Feature {...feature} />;
      })}
    </div>
  );
};

export const Feature = ({ title, description, icon }: Feature) => {
  return (
    <div className="bg-slate-700 bg-opacity-40 p-5 text-white">
      <h2 className="text-center text-4xl">{icon}</h2>
      <h3 className="mb-3 text-center text-3xl font-black">{title}</h3>
      <p className="text-xl">{description}</p>
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
