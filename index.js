const express = require('express')
const app = express()

const port = 3000;

// start server at port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


//make GET call
app.get('/foo', function(req, res) {
    res.json({ "foo": "bar" });
});


// to make x-www-form-urlencoded on postman request 
app.use(express.urlencoded({
    extended: true
}));



// Make POST call 
app.post('/bar', function(req, res) {
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo);
});