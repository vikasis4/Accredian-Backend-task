const express = require('express');
const cors = require('cors');

/////////////////////////// INITIALIZE /////////////////////////////

const data_route = require('./routes/data');

const app = express();

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.json({ status: "Yes Server Is Working ", date: new Date().toLocaleString() })
})

///////////////////////////////
app.use('/api', data_route);

app.listen(port, "0.0.0.0", () => {
    console.log("Server is Listening at port : " + port);
});