const express = require("express");
const Pusher = require("pusher");
require("./db/mongoose");
Pusher

const testRoute = require("./routes/test_route");

const app = express();
const port = process.env.PORT || 3000;

const pusher = new Pusher({
  appId: "1477740",
  key: "2366ef70bcd1edb9a846",
  secret: "b250d84538233955a897",
  cluster: "mt1",
  useTLS: true
});


app.use(express.json());
app.use(testRoute);

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
