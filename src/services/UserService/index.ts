import UserRepository from '../../repositories/UserRepository';
import UserService from './UserService';

const userRepository = new UserRepository();
const userService =  new UserService(userRepository);

export {userService};
