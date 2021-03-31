import { Request, Response } from "express";
import UserRegisterDTO from '../../dtos/UserRegisterDTO';
import generateHashedPassword from '../utils/generateHashedPassword';
import { userService } from "../../services/UserService";

class UserController {

  async getRegisterView(request: Request, response: Response) {
    return response.render('register');
  }

  async registerUser(request: Request, response: Response) {
    const {name, email, githubUsername, value, password} = request.body;
    const hashedPassword = generateHashedPassword(password);
    const userDto = new UserRegisterDTO(name, email, githubUsername, value, hashedPassword);
    const userResponse = await userService.save(userDto);
    return response.send(userResponse);
  }
}

export default UserController;