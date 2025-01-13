import React from "react";
import MainNavbar from "@/components/MainNavbar";
import TopNavbar from "@/components/TopNavbar";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0">
      <TopNavbar />
      <MainNavbar />
    </header>
  );
};
