import {Router, Request, Response} from 'express';
import passport from 'passport';
import authenticationMiddleware from './middlewares/authentication';
import {userController} from './controllers/UserController';


const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.render('index');
})

routes.get('/register', userController.getRegisterView);

routes.post('/register', userController.registerUser)

routes.get('/login', (request: Request, response: Response) => {
  if(request.query.fail){
    return response.render('login', {message: "Usuário e/ou senha incorretos"});
  }else if(request.query.rejected) {
    return response.render('login', {message: "Você precisa fazer login"});
  }else {
    return response.render('login', {message: null});
  }
})

routes.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login?fail=true'
}))

routes.get('/home',  authenticationMiddleware, (request: Request, response: Response) => {
  return response.render('home');
})

routes.get('/logout', authenticationMiddleware, (request: Request, response: Response) => {
  request.session.destroy(function (err) {
    console.log(err)
  })
  return response.redirect('/login')
})



export default routes;