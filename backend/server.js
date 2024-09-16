const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors")
const colors = require('colors');
const connectDb = require("./utils/dbSetup");
const { PORT } = require("./utils/envData");
const { authRoutes, roomRoutes } = require("./routes");
const bodyParser = require('body-parser');
const app = express();

const path = require("path");

app.get('/', (req, res) => {
    res.send("hello from  the server!");
})
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173',"http://localhost:5174"]
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/auth', authRoutes);
app.use('/room', roomRoutes);

connectDb();

app.listen(PORT, () => {
    console.log("Server is listening at port".yellow.bold, PORT);
});