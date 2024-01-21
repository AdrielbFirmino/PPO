require("dotenv").config()

const express = require("express")
const cors = require("cors");
const userRoute = require("./src/routes/user.route")

const port = process.env.PORT;

const app = express();
const connectDatabase = require("./config/db.js")

connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors({credentials: true, origin: "http://localhost:5173"}))

app.use(express.json())
app.use("/user", userRoute);

require("./config/db.js");

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});