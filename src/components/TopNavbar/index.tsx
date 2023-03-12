import React from "react";
import { OnlinePlayers } from "@/components/OnlinePlayers";

export const TopNavbar = () => {
  return (
    <nav className="flex bg-black p-5 text-white">
      <div className="flex-1 text-center">
        <p className="font-bold">
          Počet hráčů online: <OnlinePlayers ip="mc.mcjabko.cz" port={25565} />{" "}
        </p>
      </div>
      <div className="flex-1 text-center">
        <p className="font-bold">IP: mc.mcjabko.cz</p>
      </div>
    </nav>
  );
};


