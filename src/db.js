const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(process.env.DATABASE_URL, {

//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
//   logging: false
// });

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

//check connection (optional)
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = sequelize;