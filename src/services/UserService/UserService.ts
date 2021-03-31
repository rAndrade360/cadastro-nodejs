import IUserRepository from '../../repositories/IUserRepository';
import IUserService from './IUserService';
import UserRegisterDTO from '../../dtos/UserRegisterDTO';
import UserResponseDTO from '../../dtos/UserResponseDTO';
import User from '../../entities/User';
import UserResponseLoginDTO from '../../dtos/UserResponseLoginDTO';

class UserService implements IUserService {

  constructor(private UserRepository: IUserRepository ){}

  async save(dto: UserRegisterDTO) {
    let user = new User(null, dto.getName(), dto.getEmail(), dto.getGithubUsername(), dto.getValue(), dto.getPassword());
    user = await this.UserRepository.save(user);
    return new UserResponseDTO(user);
  }

  async findByEmail(email: string){
    const user = await this.UserRepository.findByEmail(email);
    return new UserResponseLoginDTO(user);
  }

  async findById(id: number){
    const user = await this.UserRepository.findById(id);
    return new UserResponseDTO(user);
  }
}

export default UserService;