
export const EnvConfiguration = () => ({

  environment: process.env.NODE_ENV || 'development',
  mongodb: process.env.MONGODB || 'mongodb://localhost:27017/pokenest',
  port: process.env.PORT || 3002,
})
