import { api } from "@/utils/api";

export const OnlinePlayers = ({ ip, port }: { ip: string; port: number }) => {
    const { data: onlinePlayer } = api.onlinePlayers.get.useQuery({
      ip,
      port,
    });
    return <>{onlinePlayer || 0}</>;
  };