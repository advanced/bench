var express = require('express'),
    app = express();

app.get('/',function(req,res){
    res.send('hi');
});

app.listen(3200);