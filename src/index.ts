import express, { Request, Response } from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Corriendo FULL HD 4k');
});

//Resolver
const root = {
  cliente: () => {
    return {
      id: 123124243534,
      nombre: 'David',
      apellido: 'Sandoval',
      empresa: 'sp',
      emails: 'david@gmail.com'

    }
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  //El resolver se pasa como rootValue
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => {
  console.log('SERVIDOR INICIAD, PUERTO 3000');
});