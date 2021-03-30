import {Router, Request, Response} from 'express';
import UserController from './controllers/UserController';

const userController = new UserController();

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.render('index');
})

routes.get('/register', userController.getRegisterView);

routes.post('/register', (request: Request, response: Response) => {
  console.log(request.body);
  return response.render('index');
})

export default routes;