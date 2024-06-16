import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = process.env.PORT || 8000;

  app.use(express.json());

  const grahqlServer = new ApolloServer({
    typeDefs: ``,
    resolvers: {},
  });

  await grahqlServer.start();

  app.get("/", (req, res) => {
    res.json({ message: "Server is running ^_^" });
  });

  app.use('/graphql', expressMiddleware(grahqlServer));

  app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
  });
}

init();
