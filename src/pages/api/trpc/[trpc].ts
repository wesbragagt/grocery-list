import * as trpcNext from "@trpc/server/adapters/next";

import { serverRouter } from "../router";
import { createContext } from "../context";

export default trpcNext.createNextApiHandler({
  router: serverRouter,
  createContext,
});
