import Big from 'big.js';
import { Response } from "express";
import { ResponseService } from "../core/service/response.service";
import { PrediksiModel } from "./prediksi.model";

class PrediksiController {
  public static async prediksi(req: any, res: Response) {
    const sex = req.body.sex
    const kota_asal = req.body.kota_asal
    const jml_ajuan_cuti = req.body.jml_ajuan_cuti
    const jml_tunggakan = req.body.jml_tunggakan
    const usia = req.body.usia
    const beasiswa = req.body.beasiswa
    const marital = req.body.marital
    const jml_aktivitas_kemahasiswaan = req.body.jml_aktivitas_kemahasiswaan
    const jml_prestasi = req.body.jml_prestasi
    const ips1 = req.body.ips1
    const ips2 = req.body.ips2
    const ips3 = req.body.ips3
    const ips4 = req.body.ips4

    const totalCount: number = await PrediksiModel.estimatedDocumentCount()
    const ontimeCount: number = await PrediksiModel.find({ label: "1" }).count()
    const lateCount: number = await PrediksiModel.find({ label: "2" }).count()

    const ontimeProbability: number = ontimeCount / totalCount
    const lateProbability: number = lateCount / totalCount

    function toFixedNumber(num: number, digits: number) {
      var pow = Math.pow(10, digits);
      return Math.round(num * pow) / pow;
    }
    Big
    const sexOntimProbability = (((await PrediksiModel.find({ sex, label: "1" }).count()) / ontimeCount))
    const sexLateProbability = ((await PrediksiModel.find({ sex, label: "2" }).count()) / lateCount)

    const cityOntimProbability = (((await PrediksiModel.find({ kota_asal, label: "1" }).count()) / ontimeCount))
    const cityLateProbability = (((await PrediksiModel.find({ kota_asal, label: "2" }).count()) / lateCount))

    const cutiOntimProbability = (((await PrediksiModel.find({ jml_ajuan_cuti, label: "1" }).count()) / ontimeCount))
    const cutiLateProbability = (((await PrediksiModel.find({ jml_ajuan_cuti, label: "2" }).count()) / lateCount))

    const tunggakanOntimProbability = ((await PrediksiModel.find({ jml_tunggakan, label: "1" }).count()) / ontimeCount)
    const tunggakanLateProbability = (await PrediksiModel.find({ jml_tunggakan, label: "2" }).count()) / lateCount

    const ageOntimProbability = ((await PrediksiModel.find({ usia, label: "1" }).count()) / ontimeCount)
    const ageLateProbability = (await PrediksiModel.find({ usia, label: "2" }).count()) / lateCount

    const beasiswaOntimProbability = ((await PrediksiModel.find({ beasiswa, label: "1" }).count()) / ontimeCount)
    const beasiswaLateProbability = (await PrediksiModel.find({ beasiswa, label: "2" }).count()) / lateCount

    const maritalOntimProbability = ((await PrediksiModel.find({ marital, label: "1" }).count()) / ontimeCount)
    const maritalLateProbability = (await PrediksiModel.find({ marital, label: "2" }).count()) / lateCount

    const activityOntimProbability = ((await PrediksiModel.find({ jml_aktivitas_kemahasiswaan, label: "1" }).count()) / ontimeCount)
    const activityLateProbability = (await PrediksiModel.find({ jml_aktivitas_kemahasiswaan, label: "2" }).count()) / lateCount

    const prestasiOntimProbability = ((await PrediksiModel.find({ jml_prestasi, label: "1" }).count()) / ontimeCount)
    const prestasiLateProbability = (await PrediksiModel.find({ jml_prestasi, label: "2" }).count()) / lateCount

    const ips1OntimProbability = ((await PrediksiModel.find({ ips1, label: "1" }).count()) / ontimeCount)
    const ips1LateProbability = (await PrediksiModel.find({ ips1, label: "2" }).count()) / lateCount

    const ips2OntimProbability = ((await PrediksiModel.find({ ips2, label: "1" }).count()) / ontimeCount)
    const ips2LateProbability = (await PrediksiModel.find({ ips2, label: "2" }).count()) / lateCount

    const ips3OntimProbability = ((await PrediksiModel.find({ ips3, label: "1" }).count()) / ontimeCount)
    const ips3LateProbability = (await PrediksiModel.find({ ips3, label: "2" }).count()) / lateCount

    const ips4OntimProbability = ((await PrediksiModel.find({ ips4, label: "1" }).count()) / ontimeCount)
    const ips4LateProbability = (await PrediksiModel.find({ ips4, label: "2" }).count()) / lateCount

    const elementOntimeProbability = sexLateProbability * cityLateProbability * cutiLateProbability * tunggakanLateProbability * ageLateProbability * beasiswaLateProbability * maritalLateProbability * activityLateProbability * prestasiLateProbability * ips1LateProbability * ips2LateProbability * ips3LateProbability * ips4LateProbability
    const elementLateProbability = sexLateProbability * cityLateProbability * cutiLateProbability * tunggakanLateProbability * ageLateProbability * beasiswaLateProbability * maritalLateProbability * activityLateProbability * prestasiLateProbability * ips1LateProbability * ips2LateProbability * ips3LateProbability * ips4LateProbability

    const finalOntimeProbability = elementOntimeProbability * ontimeProbability
    const finalLateProbability = elementLateProbability * lateProbability

    const result = finalOntimeProbability > finalLateProbability ? "ONTIME" : "LATE"
    ResponseService.success(
      res,
      {
        totalCount,
        ontimeProbability,
        lateProbability,
        sexOntimProbability,
        sexLateProbability,
        cityOntimProbability,
        cityLateProbability,
        cutiOntimProbability,
        cutiLateProbability,
        tunggakanOntimProbability,
        tunggakanLateProbability,
        ageOntimProbability,
        ageLateProbability,
        beasiswaOntimProbability,
        beasiswaLateProbability,
        maritalOntimProbability,
        maritalLateProbability,
        activityOntimProbability,
        activityLateProbability,
        prestasiOntimProbability,
        prestasiLateProbability,
        ips1OntimProbability,
        ips1LateProbability,
        ips2OntimProbability,
        ips2LateProbability,
        ips3OntimProbability,
        ips3LateProbability,
        ips4OntimProbability,
        ips4LateProbability,
        elementOntimeProbability,
        elementLateProbability,
        finalOntimeProbability,
        finalLateProbability,
        result
      }, 'Berhasil melakukan prediksi', 'SUCCESS')
  }
}

export { PrediksiController };

