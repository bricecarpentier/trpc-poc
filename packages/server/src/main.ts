import { AppRouter } from "./AppRouter.js";
import { Server } from "./Server.js";

function main() {
  console.log("[SERVER] starting...");
  const server = Server(AppRouter());
  const { port } = server.listen(3000);
  console.log("[SERVER] started!");
}

main();
