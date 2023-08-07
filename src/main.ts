// Import the framework and instantiate it
import Fastify from "fastify";

async function app() {
  const fastify = Fastify({
    logger: true,
  });

  // Declare a route
  fastify.get("/", async function handler(_, reply) {
    reply.header("Content-Type", "text/html");
    return `
      <!DOCTYPE html>
      <head></head>
      <body>
        <h1>Hello World!</h1>
      </body>
    `;
  });

  if (import.meta.env.PROD) {
    await fastify.listen({ port: 3000, host: "0.0.0.0" });
  }

  return fastify;
}

export const viteNodeApp = app();
