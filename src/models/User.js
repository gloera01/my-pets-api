import { Schema, model } from 'mongoose';
// paginate
import Pet from './Pet';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: false,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    required: false,
  },
  active: {
    type: Boolean,
    required: false,
    default: true,
  },
  pets: [Pet],
});

export default model('User', UserSchema);
