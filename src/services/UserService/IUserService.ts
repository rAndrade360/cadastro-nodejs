import UserRegisterDTO from '../../dtos/UserRegisterDTO';
import UserResponseDTO from '../../dtos/UserResponseDTO';
import UserResponseLoginDTO from '../../dtos/UserResponseLoginDTO';
export default interface IUserService {
  save(dto: UserRegisterDTO): Promise<UserResponseDTO>;
  findByEmail(email: string): Promise<UserResponseLoginDTO>;
  findById(id: number): Promise<UserResponseDTO>;
}