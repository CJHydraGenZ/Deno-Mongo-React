import { Application } from "./deps.ts";

import { router } from "./router/router.ts";

const port = 8000;
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });

console.log("http://localhost:" + port);
