'use strict';

const app = require('../server/server');
const ds = app.datasources.postgresDb;

const models = [
    "Customer",
    "Order",
    "OrderItem",
    "Item"
  ];

ds.autoupdate(models, (err) => {
    if(err){
        throw err;
    }
    console.log('Models synced!');
    ds.disconnect();
    process.exit();
});