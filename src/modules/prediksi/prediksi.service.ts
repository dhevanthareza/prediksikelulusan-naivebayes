import { PrediksiModel } from "./prediksi.model"

class PrediksiService {
  public static async prediksi(payload: any) {
    const sex = payload.sex
    const kota_asal = payload.kota_asal
    const jml_ajuan_cuti = payload.jml_ajuan_cuti
    const jml_tunggakan = payload.jml_tunggakan
    const usia = payload.usia
    const beasiswa = payload.beasiswa
    const marital = payload.marital
    const jml_aktivitas_kemahasiswaan = payload.jml_aktivitas_kemahasiswaan
    const jml_prestasi = payload.jml_prestasi
    const ips1 = payload.ips1
    const ips2 = payload.ips2
    const ips3 = payload.ips3
    const ips4 = payload.ips4

    const totalCount: number = await PrediksiModel.estimatedDocumentCount()
    const ontimeCount: number = await PrediksiModel.find({ label: "1" }).count()
    const lateCount: number = await PrediksiModel.find({ label: "2" }).count()

    const ontimeProbability: number = ontimeCount / totalCount
    const lateProbability: number = lateCount / totalCount

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

    const elementOntimeProbability = sexOntimProbability * cityOntimProbability * cutiOntimProbability * tunggakanOntimProbability * ageOntimProbability * beasiswaOntimProbability * maritalOntimProbability * activityOntimProbability * prestasiOntimProbability * ips1OntimProbability * ips2OntimProbability * ips3OntimProbability * ips4OntimProbability
    const elementLateProbability = sexLateProbability * cityLateProbability * cutiLateProbability * tunggakanLateProbability * ageLateProbability * beasiswaLateProbability * maritalLateProbability * activityLateProbability * prestasiLateProbability * ips1LateProbability * ips2LateProbability * ips3LateProbability * ips4LateProbability

    const finalOntimeProbability = elementOntimeProbability * ontimeProbability
    const finalLateProbability = elementLateProbability * lateProbability

    const result = finalOntimeProbability > finalLateProbability ? "ONTIME" : "LATE"
    return {
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
    }
  }
}

export { PrediksiService }

