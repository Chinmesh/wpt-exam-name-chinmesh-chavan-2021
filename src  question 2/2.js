const express = require("express");
const res = require("express/lib/response");
const app = express();


app.get("/", (req, res) => {

    res.json({ title: "hrllloee" });
});

app.post("/1", (req, res) => {
    console.log(req.query);

    res.json({ title: "hrllloeeww" });
});



//http://localhost:4000
app.listen(4000, () => console.log(
    "server starter"
));


