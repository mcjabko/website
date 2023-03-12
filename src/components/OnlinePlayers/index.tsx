import { api } from "@/utils/api";

export const OnlinePlayers = ({ ip, port }: { ip: string; port: number }) => {
    const { data: onlinePlayer, refetch } = api.onlinePlayers.get.useQuery({
      ip,
      port,
    });
    setInterval(() => {
      refetch();
    }, 50000);
    return <>{onlinePlayer}</>;
  };