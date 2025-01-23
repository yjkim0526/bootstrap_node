const express = require("express");
const app = express();
const port = 80;

require("dotenv").config();
app.set("port", process.env.PORT || port);
// console.log(process.env.PORT);

//app.set("public", "./public");
app.use(express.static("public"));

app.listen(port, () => {
  //console.log(`서버 실행 : http://localhost:${app.get("port")}`);
  console.log(`Example app listening on port ${port}`);
});
