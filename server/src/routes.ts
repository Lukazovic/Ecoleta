import express from 'express';
import knex from './database/connection';

import PointsController from './app/controllers/PointsController';
import ItemsController from './app/controllers/ItemsController';

const routes = express.Router();

routes.get('/items', ItemsController.index);

routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);
routes.post('/points', PointsController.create);

export default routes;
