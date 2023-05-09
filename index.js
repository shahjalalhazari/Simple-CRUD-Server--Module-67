const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Our CRUD server is running");
});


app.listen(port, () => {
    console.log(`Our CRUD server is running on ${port}`);
})
