
import { type ServerStatus } from "@/types/serverStatus";
import { useQuery } from "@tanstack/react-query";

export const OnlinePlayers = ({ ip, port }: { ip: string; port: number }) => {
  const { data: onlinePlayer, isLoading, error } = useQuery<ServerStatus>({
    queryKey: ["onlinePlayers"],
    queryFn: () => fetch(`https://api.mcstatus.io/v2/status/java/${ip}:${port}`).then((res) => res.json()),
  });
  if (error) return <span>Error</span>
  if (isLoading) return <span>...</span>
  return <span>{onlinePlayer?.players?.online || 0}</span>;
};
