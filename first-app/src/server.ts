import "reflect-metadata";
//Criação do server com o framework TypegraphQl

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolvers } from "./resolvers/appointments-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolvers],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();
  console.log(`Server running in ${url}`);
}

bootstrap();

//https://www.youtube.com/watch?v=1dz48pReq_c&t=2243s
