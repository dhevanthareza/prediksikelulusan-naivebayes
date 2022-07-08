import { Response } from "express";
import { ResponseService } from "../core/service/response.service";
import { PrediksiModel } from "./prediksi.model";
import { PrediksiService } from "./prediksi.service";

class PrediksiController {
  public static async prediksi(req: any, res: Response) {
    const data = await PrediksiService.prediksi(req.body)
    return ResponseService.success(res, data, "SUCCESS")
  }
  public static async validation(req: any, res: Response) {
    let truePositif = 0;
    let falsePositif = 0;
    let trueNegatif = 0;
    let falseNegatif = 0;
    const splicedData = await PrediksiModel.find();
    await Promise.all(splicedData.map(async (data) => {
      const hasilPrediksi = await PrediksiService.prediksi(data)
      if (data.label == "1" && hasilPrediksi.result == "ONTIME") {
        truePositif += 1
      }
      if (data.label == "2" && hasilPrediksi.result == "ONTIME") {
        falsePositif += 1
      }
      if (data.label == "2" && hasilPrediksi.result == "LATE") {
        trueNegatif += 1
      }
      if (data.label == "1" && hasilPrediksi.result == "LATE") {
        falseNegatif += 1
      }
    }))
    return ResponseService.success(res, {
      truePositif,
      falsePositif,
      trueNegatif,
      falseNegatif
    }, "SUCCESS")
  }
}

export { PrediksiController };

