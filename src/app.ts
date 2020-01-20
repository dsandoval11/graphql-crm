import mongoose from 'mongoose';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import graphqlHTTP from 'express-graphql';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

class Server {
  private app: any;
  constructor() {
    this.app = express();
  }

  start() {
    mongoose.Promise = global.Promise;
    mongoose.connect(<string>process.env.URL_DB, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
      .then(() => {
        console.log('Conectado con la BD');
        this.initServer();
      }).catch((err: any) => {
        console.log(err);
      })
  }

  private initServer() {
    const port = process.env.PORT;
    const server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app: this.app });
    this.app.listen(port, () => {
      console.log(`Servidor iniciado en el puerto ${port}`);
    })
  }
}

export default Server