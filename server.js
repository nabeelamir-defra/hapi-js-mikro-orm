import Hapi from "@hapi/hapi";

import controllers from "./controller/index.js";

import { MikroORM, RequestContext } from "@mikro-orm/postgresql";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  const orm = await MikroORM.init({
    entities: ["./model/**.js"],
    dbName: "rcr_api",
    host: "localhost",
    user: "postgres",
    password: "password",
    port: "5432",
  });

  server.ext("onRequest", (request, h) => {
    request.em = orm.em.fork();
    return h.continue;
  });

  server.route(controllers);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
