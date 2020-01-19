import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Cliente {
    id:ID
    nombre: String
    apellido: String
    empresa: String
    emails: String
  }
  type Query {
    cliente: Cliente
  }
  input ClienteInput {
    id:ID
    nombre: String
    apellido: String
    empresa: String
    emails: String
  }
  type Mutation {
    crearCliente(input: ClienteInput): Cliente
  }
`);

export default schema