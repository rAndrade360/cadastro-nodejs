import IUserRepository from './IUserRepository';
import {users} from '../database';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  async save(user: User){
    user.setCreatedAt(new Date());
    user.setUpdatedAt(new Date());

    user.id = users.maxId + 1;

    users.insert({user});
    
    return user;
  }
}

export default UserRepository;