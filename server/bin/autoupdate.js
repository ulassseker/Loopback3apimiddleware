'use strict';

const app = require('../server/server');
const ds = app.datasources.postgresDs;

ds.autoupdate(['Customer'], (err) => {
    if(err){
        throw err;
    }
    console.log('Models synced!');
    ds.disconnect();
    process.exit();
});