import { api } from "@/utils/api";
import React from "react";

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

const OnlinePlayers = ({ ip, port }: { ip: string; port: number }) => {
  const { data: onlinePlayer, refetch } = api.onlinePlayers.get.useQuery({
    ip,
    port,
  });
  setInterval(() => {
    refetch();
  }, 50000);
  return <>{onlinePlayer}</>;
};
