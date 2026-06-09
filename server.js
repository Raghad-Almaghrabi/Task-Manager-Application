const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());             
app.use(express.urlencoded({ extended: true })); 

app.use("/api/tasks", require("./routes/taskRoutes.js")); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});