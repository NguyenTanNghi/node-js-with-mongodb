module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "sapassword",
  PORT: 3308,
  DB: "hoidanit",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
