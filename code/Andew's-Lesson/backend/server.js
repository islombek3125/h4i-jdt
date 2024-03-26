const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Import the routes from the 'routes.js' module. These are defined routes for the application.
const routes = require('./routes');
// Tell the app to use the imported routes for any requests at the root path.
app.use('/', routes);


app.listen(port,() => {
    console.log(`server running on port ${port}`)
})