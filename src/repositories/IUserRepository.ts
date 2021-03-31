import User from '../entities/User';

export default interface IUserRepository {
  save(user: User): Promise<User>;
}