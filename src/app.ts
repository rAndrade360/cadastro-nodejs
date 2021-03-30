import express from 'express';
import path from 'path';
import routes from './routes';


class App {
  app: express.Application

  constructor(){
    this.app = express();
    this.middlewares();
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: false}))
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.use(routes);
  }

  init(){
    const port = process.env.PORT || 3333;
    this.app.listen(port);
  }
}

export default App;