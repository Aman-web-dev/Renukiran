const express = require('express');
const port = 5000;
const app = express();
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => res.send('server is running'));
app.listen(port, () => console.log(`server is running on ${port}`))