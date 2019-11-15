import {
  Router,
} from 'express';

import UserController from './app/controllers/UserController';


const routes = new Router(); // herda as propriedades do router do express
routes.get('/', UserController.miolo);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
export default routes; // exporta as rotas
