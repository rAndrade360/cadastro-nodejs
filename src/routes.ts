import {Router, Request, Response} from 'express';
import {userController} from './controllers/UserController';


const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.render('index');
})

routes.get('/register', userController.getRegisterView);

routes.post('/register', userController.registerUser)

export default routes;