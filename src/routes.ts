import {Router, Request, Response} from 'express';
import passport from 'passport';
import {userController} from './controllers/UserController';


const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.render('index');
})

routes.get('/login', (request: Request, response: Response) => {
  if(request.query.fail){
    return response.render('login', {message: "Usuário e/ou senha incorretos"});
  }else {
    return response.render('login', {message: null});
  }
})

routes.get('/home', (request: Request, response: Response) => {
  return response.render('home');
})

routes.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login?fail=true'
}))

routes.get('/register', userController.getRegisterView);

routes.post('/register', userController.registerUser)

export default routes;