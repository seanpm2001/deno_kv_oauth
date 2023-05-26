// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_middleware.ts";
import * as $1 from "./routes/callback.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/signin.ts";
import * as $4 from "./routes/signout.ts";

const manifest = {
  routes: {
    "./routes/_middleware.ts": $0,
    "./routes/callback.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/signin.ts": $3,
    "./routes/signout.ts": $4,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
