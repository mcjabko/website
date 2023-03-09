import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Acordation } from "@/components/Acordation";
import { CopyButton } from "@/components/CopyButton";

const TestPage = () => {
  return (
    <>
      <Navbar />
      <Acordation title="Text" text="Test" />
      <CopyButton text={"mc.mcjabko.cz"} />
      <Footer />
    </>
  );
};

export default TestPage;
