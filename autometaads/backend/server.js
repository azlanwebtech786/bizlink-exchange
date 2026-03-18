const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const adsRoute = require("./routes/ads");
app.use("/ads", adsRoute);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
