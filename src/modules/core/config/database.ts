import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()


// const sequelize = new Sequelize((config as any)[process.env.NODE_ENV].database, (config as any)[process.env.NODE_ENV].username, (config as any)[process.env.NODE_ENV].password, {
//   timezone: '+07:00',
//   dialect: (config as any)[process.env.NODE_ENV].dialect as Dialect,
//   logging: false,
//   host: (config as any)[process.env.NODE_ENV].host,
//   port: (config as any)[process.env.NODE_ENV].port,
// })

const mongooseConnect = async () => {
  await mongoose.connect('mongodb+srv://dhevanthareza:dhevan007@cluster0.zpfrp.mongodb.net/prediksikelulusan?retryWrites=true&w=majority')
  console.log('Connected to cluster0.zpfrp.mongodb.net/prediksikelulusan')
}

export { mongooseConnect }

