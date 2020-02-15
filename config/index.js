require('dotenv').config();


const config = {
  dev: process.env.NODE_ENV != 'production',
  port: process.env.PORT || 3000,
  PORT: process.env.PORT,
  cors: process.env.CORS,
  
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DR_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,

  authJwtSecret: process.env.AUTH_JWT_SECRET,
  defaulAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaulUserPassword: process.env.DEFAULT_USER_PASSWORD,
  AuthJwtSecret: process.env.AUTH_JWT_SECRET,
  PublicApiKeytoken: process.env.PUBLIC_API_KEY_TOKEN,
  AdminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN
}

module.exports = {
  config,
} 
