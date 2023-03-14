import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { ServerStatus } from "@/server/api/interfaces/ServerStatus";



export const OnlinePlayerRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ ip: z.string(), port: z.number() }))
    .query(async ({ input }) => {
      const fetchOnlinePlayers = await fetch(
        `https://mcapi.us/server/status?ip=${input.ip}&port=${input.port}`
      );
      if (fetchOnlinePlayers.ok) {
        const onlinePlayers = await fetchOnlinePlayers.json() as ServerStatus;
        return onlinePlayers.players.now || 0;
      }
    }),
});
