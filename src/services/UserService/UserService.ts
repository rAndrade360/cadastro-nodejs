import IUserRepository from '../../repositories/IUserRepository';
import IUserService from './IUserService';
import UserRegisterDTO from '../../dtos/UserRegisterDTO';
import UserResponseDTO from '../../dtos/UserResponseDTO';
import User from '../../entities/User';

class UserService implements IUserService {

  constructor(private UserRepository: IUserRepository ){}

  async save(dto: UserRegisterDTO) {
    let user = new User(null, dto.getName(), dto.getEmail(), dto.getGithubUsername(), dto.getValue(), dto.getPassword());
    user = await this.UserRepository.save(user);
    return new UserResponseDTO(user);
  }
}

export default UserService;