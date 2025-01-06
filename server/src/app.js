const exress = require("express");

const app = exress();
const {api}=require('./routes/api');
app.use(exress.json());
app.use('/',api);
module.exports = app;
