"use strict";
const app = require("../server/server");
const ds = app.datasources.postgresDb;

const models = [
  "Customer",
  "Order",
  "OrderItem",
  "Item"
];

ds.automigrate(models, (err) => {
  if (err) {
    throw err;
  }

  console.log("Models created");
  ds.disconnect();
  process.exit();
});
