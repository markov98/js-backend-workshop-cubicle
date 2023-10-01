const {PORT, DBURL} = require('./config/constConfig');
const app = require('express')();

require('./config/expressConfig')(app);
require('./config/dbConfig')(DBURL);
require('./config/routes')(app);

app.listen(PORT, console.log(`Listening on port ${PORT}...`));