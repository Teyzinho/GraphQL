import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "node:crypto";

const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query { #Buscar Algo
    users: [User!]!
  }

  type Mutation { #Alterar Algo
    createUser(name: String!): User!
  }
`;

interface User {
  id: string;
  name: string;
}

const users: User[] = [];


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      //EndPoint
      users: () => {
        return users;
      },
    },

    Mutation: {
      createUser: (parent, args, ctx) => {
        const User = {
          id: randomUUID(),
          name: args.name,
        };

        users.push(User);

        return User;
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`running on ${url}`);
});

/*
Operações no Apollo server

Query, como se fosse o "get" ele retorna algo de acordo com oque foi especificado

    query Users {
    users {
        name
        id
    }
    }

Mutation (Criação) especifica os "args" (require) da operação e o callback para o usuário

    mutation($name: String!){
        createUser(name: $name) {
            id
        }
    }

  */
