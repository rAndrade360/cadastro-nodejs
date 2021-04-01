import { Request, Response } from "express";
import UserRegisterDTO from '../../dtos/UserRegisterDTO';
import generateHashedPassword from '../utils/generateHashedPassword';
import { userService } from "../../services/UserService";
import { UserRegisterValidator } from "../../validators/UserValidator";

class UserController {

  async getRegisterView(request: Request, response: Response) {
    return response.render('register', {message: null});
  }

  async registerUser(request: Request, response: Response) {
    const {name, email, githubUsername, value, password} = request.body;
    const hashedPassword = generateHashedPassword(password);


    try{
    await UserRegisterValidator().validate({name, email, githubUsername, value, password});
    }catch(error) {
      
      return response.render('register', {message: {field: error.path, errors: error.errors}})
    }

    const userDto = new UserRegisterDTO(name, email, githubUsername, value, hashedPassword);

    const userResponse = await userService.save(userDto);

    if(!userResponse) return response.render('register', {message: {messages: ["Não conseguimos fazer o seu cadastro. Tente novamente mais tarde!"]}})

    return response.redirect('/login');
  }
}

export default UserController;