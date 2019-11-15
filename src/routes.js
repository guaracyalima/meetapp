import {
  Router,
} from 'express';

import UserController from './app/controllers/UserController';


// const routes = new Router(); // herda as propriedades do router do express
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/users', UserController.store);
export default routes; // exporta as rotas
