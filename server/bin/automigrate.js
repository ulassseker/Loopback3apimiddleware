'use strict';
const app = require('../server/server');
const ds = app.datasources.mssqlDataSource;

const models = [
  "Customer", 
//   "Order", 
//   "OrderItem", 
//   "Item", 
//   "CreditCard",
//   "User",
  // "AccessToken",
//   "ACL",
//   "RoleMapping",
//   "Role",
//   "Message"
];


ds.automigrate(models, (err) => {
  if (err) {
    throw err;
  }

  console.log('Models created');
  ds.disconnect();
  process.exit();
});

