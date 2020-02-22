const express = require ('express');
const cors = require('cors');
const twilio = require('twilio');


const client = new twilio (accountSid, authToken)

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})


app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;

    client.messages.create({
        body: textmessage,
        to: "+254" + recipient, 
        from: '+18133286720'
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))
