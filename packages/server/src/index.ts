import { AppRouter } from "./AppRouter.js";
import { Server } from "./Server.js";

export type { AppRouter } from "./AppRouter.js";
export { UserId } from "./domain/UserId.js";

function main() {
  const server = Server(AppRouter());
  return server.listen(3000);
}

main();
