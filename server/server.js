const express = require('express');
const ngrok = require ('ngrok');
const app = express()

app.post('/dice', (req, res) => {
        const randomDice = Math.floor(Math.random()*6) + 1;
        res.send(`Dice rolled: ${randomDice}`)
})

app.get ('/test', (req, res)=> {
    res.send('Hello world');
});

app.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to backend zone!', test:'whasssuppp'});
});

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {console.log(`server started on port ${PORT}`);
ngrok.connect(PORT).then(ngrokURL =>{
    console.log(`Ngrok tunnel in: ${ngrokURL}`)
}).catch(error => {
    console.log (`Couldn't tunnel ngrok: ${error}`)
})
})