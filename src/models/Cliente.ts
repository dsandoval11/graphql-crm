import { Schema, model } from 'mongoose';

const ClienteSchema = new Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  emails: Array,
  edad: Number,
  tipo: String,
  pedidos: Array
}, {
  timestamps: true
});

export default model('cliente', ClienteSchema);