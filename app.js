var express         = require("express"),
    path            = require("path"),
    jade            = require("jade"),
    mongodb         = require("mongodb"),
    http            = require("http"),

    router          = require("./router/index"),

    app             = express(),
    server          = app.listen(3000),
    io              = require("socket.io").listen(server);


app.set("views", path.join(__dirname + "/layout"));
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname + "/public")));

app.get("/", router);

io.on("connection", function(socket){
  console.log("connected");
});
