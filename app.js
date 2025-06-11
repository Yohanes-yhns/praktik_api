const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3030;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine','ejs');

const routeCars = require('./routes/cars.route');
const routeOrders = require('./routes/orders.route');
const routeViews = require('./routes/views.routes');
app.use(routeCars);
app.use(routeOrders);
app.use(routeViews);
// const optionAllow = {
//     origin: 'http://localhost:3000'
// }

app.use(cors());

app.listen(port, () => {
    console.log("Backend Praktik API berjalan di port : ",port)
})

