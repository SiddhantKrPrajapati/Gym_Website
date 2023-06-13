const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
  }));

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'Your Slogan Here'};
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
    nam = req.body.name;
    age = req.body.age;
    pack = req.body.pack;
    ano = req.body.ano;
    
    let outputtowrite = `the name of client is: ${nam}, age is: ${age}, package: ${pack}, Adhar number: ${ano}`;
    fs.writeFileSync('output.txt', outputtowrite);
    const params = {'title': 'Your Slogan Here'};
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
