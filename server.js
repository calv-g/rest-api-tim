var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

var Image = require('./models/image');

var db = mongoose.connect('mongodb://localhost:27017/images',{useNewUrlParser:true, useUnifiedTopology:true });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(request, response){
    Image.deleteMany({}, function(err){
        if(err){
            throw err;
        }

        var image = new Image();
        var imgPath = request.body.path;
        image.img.data = fs.readFileSync(imgPath);
        image.img.contentType = "image/png";

        image.save(function(err, newImage){
            if(err){
                throw err;
            }
            response.contentType(newImage.img.contentType);
            response.send(newImage.img.data);
            console.log("image added");
        });
    });
});

app.get('/', function (request, response) {
    Image.find({}, function (err, image) {
        if (err){
            throw err;
        }

        if(image.length === 0){
            response.status(500).send("Could not retrieve image!");
            console.log("image not found!");
        }
        else{
            response.contentType(image[0].img.contentType);
            response.send(image[0].img.data);
        }
    });
});

app.listen(3000, function (err) {
    console.log('server listening on 3000');
});
