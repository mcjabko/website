import { type NextPage } from "next";
import DefaultLayout from "@/layouts/DefaultLayout";
import { Hero } from "@/components/Hero";
import { DiscordBanner } from "@/components/DiscordBanner";
import { FeatureList } from "@/components/Features";
import features from "@/data/features";


const Home: NextPage = () => {
  return (
    <DefaultLayout title="Domů" description="Vše co potřebuješ vědět o serveru">
      <div className="bg-gray-900 py-10">
        <Hero />
        <FeatureList features={features} />
      </div>
      <DiscordBanner />
    </DefaultLayout>
  );
};



export default Home;
