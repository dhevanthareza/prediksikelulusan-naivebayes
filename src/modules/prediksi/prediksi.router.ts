import { Router } from "express";
import { PrediksiController } from "./prediksi.controller";

const PrediksiRouter = Router()

PrediksiRouter.post('/', PrediksiController.prediksi)

export { PrediksiRouter };
