const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express();

app.use(cors());

app.listen(port, () => console.log('Server is up and listen to port ' + port));

