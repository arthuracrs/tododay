const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.RUN_MODE == 'dev') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    logging: false
  });
}

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;