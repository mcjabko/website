import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const OnlinePlayerRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ ip: z.string(), port: z.number() }))
    .query(async ({ input }) => {
      const fetchOnlinePlayers = await fetch(
        `https://mcapi.us/server/status?ip=${input.ip}&port=${input.port}`
      );
      if (fetchOnlinePlayers.ok) {
        const onlinePlayers = await fetchOnlinePlayers.json();
        return onlinePlayers.players.now || 0;
      }
    }),
});
