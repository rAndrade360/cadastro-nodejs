import 'dotenv/config';
import express from 'express';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import auth from './middlewares/auth';
import routes from './routes';


class App {
  app: express.Application

  constructor(){
    this.app = express();
    this.middlewares();
  }

  middlewares(){
    this.app.use(helmet());
    auth(passport);
    this.app.use(session({
      secret: String(process.env.SESSION_SECRET),
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 30 * 60 * 1000 }//30min
    }));

    this.app.use(cookieParser());

    this.app.use(express.urlencoded({extended: false}))
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(routes);
  }

  init(){
    const port = process.env.PORT || 3333;
    this.app.listen(port);
  }
}

export default App;