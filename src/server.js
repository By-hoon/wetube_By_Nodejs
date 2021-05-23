import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.end();
}

app.get("/", handleHome);


app.listen(PORT, ()=> console.log(`Server on http://localhost:${PORT} ⚡`));