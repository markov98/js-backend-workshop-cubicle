const app = require('express')();

const { PORT, DBURL } = require('./config/constConfig');

// Initializing app
require('./config/expressConfig')(app);
require('./config/routes')(app);

// Connecting to DB
require('./config/dbConfig')(DBURL)
    .then(() => { console.log('Connected to DB!') })
    .catch((err) => console.log(err));

app.listen(PORT, console.log(`Listening on port ${PORT}...`));