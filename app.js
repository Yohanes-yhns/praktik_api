const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3030;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const routeCars = require('./routes/cars.route');
app.use(routeCars);

// const optionAllow = {
//     origin: 'http://localhost:3000'
// }

app.listen(port, () => {
    console.log("Backend Praktik API berjalan di port : ",port)
})

