// const section
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
// cross origin requests * The 2 above lines must remain together!

// app section
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
// uses json and url encoded
// app must be before require!

// require section
require('./config/mongoose.config');
require('./routes/product.routes')(app);
// import routes export! The app in the parantheses is for the module.exports =(app) => {}

// app.get('/', (req, res) => {
//     res.send('Hello World');
//    });
// This was just used in the beginning for testing
   
//    (Reset Server and refresh browser! Use this .get to test and make sure everything is running right!
//    Remember to code a little and test a lot!)
   

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));