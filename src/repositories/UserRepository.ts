import IUserRepository from './IUserRepository';
import {users} from '../database';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  async save(user: User){
    user.setCreatedAt(new Date());
    user.setUpdatedAt(new Date());

    user.id = users.maxId + 1;

    const userInsert = JSON.parse(JSON.stringify(user));

    users.insert(userInsert);
    
    return user;
  }

  async findByEmail(email: string){
    const user = users.findOne({email});

    const userResponse = new User(Number(user?.id), String(user?.name), String(user?.email), String(user?.githubUsername), Number(user?.value), String(user?.password));
    return userResponse;
  }

  async findById(id: number){
    const user = users.findOne({id});

    const userResponse = new User(Number(user?.id), String(user?.name), String(user?.email), String(user?.githubUsername), Number(user?.value), String(user?.password));
    return userResponse;
  }
}

export default UserRepository;