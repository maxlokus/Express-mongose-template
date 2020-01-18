const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

async function start() {
    try {
        await mongoose.connect("", { useNewUrlParser: true, useFindAndModify: false });
    } catch (e) {
        console.log("mongoose connecte error:", e);
    }
}

start();

app.listen(PORT, () => {
    console.log("server is running...");
});
