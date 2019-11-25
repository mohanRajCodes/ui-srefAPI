const express = require ('express');
const app = new express();

app.use(express.static(__dirname+ "/"));

app.get("/",function(req,res){
res.sendFile(__dirname + "/public/home.html");
});

app.get("/add/:a/:b",function(req,res){

    var num1 = parseInt(req.params.a);
    var num2 = parseInt(req.params.b);

    var result = num1 + num2;

    console.log(num1,num2,result);
    //res.sendStatus(200)
    res.send(" " + result);
})

app.get("/multiply/:a/:b",function(req,res){

    var num1 = parseInt(req.params.a);
    var num2 = parseInt(req.params.b);

    var result = num1 * num2;

    console.log(num1,num2,result);
    //res.sendStatus(200)
    res.send(" " + result);
})

app.listen(2800,function(){

console.log("Server running in port 2800");

})