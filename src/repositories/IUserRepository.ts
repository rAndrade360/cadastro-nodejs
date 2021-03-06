import User from '../entities/User';

export default interface IUserRepository {
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: number): Promise<User>;
}