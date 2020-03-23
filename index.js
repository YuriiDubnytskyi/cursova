const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jsonParser = express.json();

const userScheme = new Schema({name: String, surname: String, score: Number}, {collection: "userData"});
const User = mongoose.model("User", userScheme);


mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

app.use(express.static(path.join(__dirname, 'react-demo/build')));



app.post("/add", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userSurname = req.body.surname;
    const user = new User({name: userName,surname: userSurname, score: 0});

    user.save(function(err){
        if(err) return console.log(err);
        res.send(user);
    });

});


app.get("/find/:surname/:name",function(req, res){

    const userName = req.params.name;
    const userSurname = req.params.surname;
    console.log(userSurname);
    console.log(req.body)
    console.log("here")
    User.findOne({surname:userSurname,name:userName}, function(err, user){
        if(err) return console.log(err);
        console.log(user);
        res.send(user);
    });
});

app.put("/update", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userSurname = req.body.surname;
    const score = req.body.score;
    const newUser = {name: userName,surname:userSurname,score:score};

    User.findOneAndUpdate({surname:userSurname,name:userName}, newUser, {new: true}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
});

app.get("/users", function(req, res){
    User.find({}, function(err, users){
        if(err) return console.log(err);
        res.send(users)
    });
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
