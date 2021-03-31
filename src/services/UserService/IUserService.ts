import UserRegisterDTO from '../../dtos/UserRegisterDTO';
import UserResponseDTO from '../../dtos/UserResponseDTO';
export default interface IUserService {
  save(dto: UserRegisterDTO): Promise<UserResponseDTO>;
}