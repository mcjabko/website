import React from "react";
import { OnlinePlayers } from "@/components/OnlinePlayers";
import { CopyButton } from "@/components/CopyButton";

const TopNavbar = () => {
  return (
    <nav className="hidden bg-black p-5 text-white lg:flex">
      <div className="flex-1 text-center">
        <p className="font-bold">
          Počet hráčů online: <OnlinePlayers ip="mc.mcjabko.cz" port={25565} />{" "}
        </p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-bold">IP: <CopyButton>mc.mcjabko.cz</CopyButton></p>
      </div>
    </nav>
  );
};

export default TopNavbar;
