// sequelize connection to database
const sequelize = require("./config");
const express = require("express");
const DepartmentRoutes = require("./routes/department");
const EmployeeRoutes = require("./routes/employee");
const app = express();

// urlencoded middleware from express
app.use(express.urlencoded({ extended: true }));
// extended means that the values can be any type

// use department routes
app.use(DepartmentRoutes);
// use employee routes
app.use(EmployeeRoutes);

// test sequelize connection
sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
