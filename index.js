/*Tools: code editor, browser, command line utility, 
application and server utility, API platform
*/
const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('This is the music app main page');
});

const genres = [
    {name:'Pop'},
    {name:'Hip Hop'},
    {name:'Rap'},
    {name:'Classical'},
    {name:'Rock'},
    {name:'Jazz'},
    {name:'Blues'},
    {name:'Electronic'},
];
//=========== ROUTES FOR HTTP GET REQUESTS ==========
app.get('/api/genres',(req,res)=>{
    res.send(genres);
});

app.get('/api/courses/:name',(req,res)=>{
    const genre = genres.find(c=>c.name === (req.params.name));
    if(!genre){
        res.status(404).send("THe genre with the given name was not found");
        return
    }
    res.send(genre);
});

app.listen(4000,()=>{
    console.log('Listening on port 3000 ...')
});

//=========== ROUTES FOR HTTP POST REQUESTS ==========




//=========== ROUTES FOR HTTP PUT REQUESTS ==========




//=========== ROUTES FOR HTTP DELETE REQUESTS ==========

