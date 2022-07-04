import express from 'express';
import 'reflect-metadata';
import { PrediksiRouter } from './modules/prediksi/prediksi.router';
const RouteLoader = (app: express.Application) => {
  app.use('/prediksi', PrediksiRouter);
};

export = RouteLoader;
