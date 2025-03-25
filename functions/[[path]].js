import { createPagesFunctionHandler } from "@react-router/cloudflare";

import * as build from "../build/server/index"

export const onRequest = createPagesFunctionHandler({
  build
//   mode: process.env.NODE_ENV,
//   getLoadContext: (request, context) => {
//     return {
//       env: context.env,
//       request,
//       context,
//     };
//   },
});