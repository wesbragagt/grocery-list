import type { ServerRouter } from "@/pages/api/router";
import { createReactQueryHooks } from "@trpc/react";

export const trpc = createReactQueryHooks<ServerRouter>();
