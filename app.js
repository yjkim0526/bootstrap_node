const express = require("express");
const port = 3300;
const app = express();

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`서버 실행 : http://localhost:${port}`);
});
