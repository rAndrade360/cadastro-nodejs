import loki from 'lokijs';
import User from '../entities/User';

const userEntity = User.getKeys();

const database = new loki('./devCollab.db');


const users = database.addCollection('users', {indices: userEntity});

export {
  database,
  users
}
