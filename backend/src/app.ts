import express from 'express';
import { router } from './routes';
import cors from 'cors';

import './database';

class App {
  public express: express.Application

  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(router);
  }
}

const app: express.Application = new App().express 

export { app };