const exress = require("express");
const cors=require("cors");
const app = exress();
const {api}=require('./routes/api');

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions));
app.use(exress.json());
app.use('/',api);
module.exports = app;
