import ClienteModel from '../models/Cliente';

export const resolvers = {
  Query: {
    getClientes: (root: any, { limite }: any) => {
      return ClienteModel.find().limit(limite);
    },
    getCliente: (root: any, { id }: any) => {
      return new Promise((resolve, reject) => {
        ClienteModel.findById(id, (err, cliente) => {
          if (err) reject(err)
          else resolve(cliente)
        })
      })
    }
  },
  Mutation: {
    crearCliente: (root: any, { input }: any) => {
      const nuevoCliente = new ClienteModel({
        nombre: input.nombre,
        apellido: input.apellido,
        empresa: input.empresa,
        emails: input.emails,
        edad: input.edad,
        tipo: input.tipo,
        pedidos: input.pedidos,
      });
      nuevoCliente.id = nuevoCliente._id;
      return new Promise((resolve, reject) => {
        nuevoCliente.save((err) => {
          if (err) reject(err)
          else resolve(nuevoCliente)
        });
      });
    },
    actualizarCliente: (root: any, { input }: any) => {
      return new Promise((resolve, reject) => {
        ClienteModel.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, cliente) => {
          if (err) reject(err)
          else resolve(cliente)
        })
      });
    },
    eliminarCliente: (root: any, { id }: any) => {
      return new Promise((resolve, reject) => {
        ClienteModel.findOneAndRemove({ _id: id }, (err, cliente) => {
          if (err) reject(err)
          else resolve(cliente)
        });
      });
    }
  }
}