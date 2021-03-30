import { Request, Response } from "express";

class UserController {
  public async getRegisterView(request: Request, response: Response) {
    return response.render('register');
  }

  public async registerUser(request: Request, response: Response) {
    console.log(request.body);
    return response.render('index');
  }
}

export default UserController;