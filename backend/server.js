const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", require("./routes/taskRoutes.js"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});