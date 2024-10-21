import express from "express";
const app = express();


app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("src"));

app.get('/', (req, res) => {
    res.render('login', {body: "Prueba pug"});
})

app.listen(3000, () => console.log("Listening on port 3000"));