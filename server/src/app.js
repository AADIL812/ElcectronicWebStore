const exress = require("express");
const cors=require("cors");
const app = exress();
const {api}=require('./routes/api');

const corsOptions = {
    origin: "https://elcectronic-web-storefrontend.vercel.app/",
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };

app.use(cors(corsOptions));
app.use(exress.json());
app.use('/',api);
module.exports = app;
