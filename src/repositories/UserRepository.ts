import db from '../database/db';
import IUserRepository from './IUserRepository';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  async save(user: User){
    user.setCreatedAt(new Date());
    user.setUpdatedAt(new Date());
    return user;
  }
}

export default UserRepository;