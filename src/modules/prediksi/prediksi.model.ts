import { model, Schema } from "mongoose";

interface IPrediksi {
  nim: string,
  sex: string,
  kota_asal: string,
  jml_ajuan_cuti: string,
  jml_tunggakan: string,
  usia: string,
  beasiswa: string,
  marital: string,
  jml_aktivitas_kemahasiswaan: string,
  jml_prestasi: string,
  ips1: string,
  ips2: string,
  ips3: string,
  ips4: string,
  label: string,
}

const prediksiSchema = new Schema<IPrediksi>({
  nim: { type: String, required: true },
  sex: { type: String, required: true },
  kota_asal: { type: String, required: true },
  jml_ajuan_cuti: { type: String, required: true },
  jml_tunggakan: { type: String, required: true },
  usia: { type: String, required: true },
  beasiswa: { type: String, required: true },
  marital: { type: String, required: true },
  jml_aktivitas_kemahasiswaan: { type: String, required: true },
  jml_prestasi: { type: String, required: true },
  ips1: { type: String, required: true },
  ips2: { type: String, required: true },
  ips3: { type: String, required: true },
  ips4: { type: String, required: true },
  label: { type: String, required: true },
}, { timestamps: false })

const PrediksiModel = model<IPrediksi>('labeled_data_sets', prediksiSchema)

export { PrediksiModel, IPrediksi };

