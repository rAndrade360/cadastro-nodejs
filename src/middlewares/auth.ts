import passport from 'passport';
import bcrypt from 'bcrypt';
import {Strategy as LocalStrategy} from 'passport-local';
import UserRegisterDTO from '../dtos/UserRegisterDTO';
import UserResponseDTO from '../dtos/UserResponseDTO';
import {userService} from '../services/UserService';

declare global {
  namespace Express {
    interface User extends UserResponseDTO{
      
    }
  }
}

export default (passport: passport.Authenticator) => {

  passport.serializeUser(
    (user, done) => {
      done(null, user);
    }
  )

  passport.deserializeUser(async (id, done)=>{

    try {
      const user = await userService.findById(Number(id));
      done(null, user);
    } catch (error) {
      return done(error, null);
    }

    });

    passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (email, password, done) => {
      try {
        const user = await userService.findByEmail(email);
        if(!user) return done(null, false);

        const isValid = bcrypt.compareSync(password, user.password);
        if(!isValid) return done(null, false);
        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error, false);
      }
    }))
}