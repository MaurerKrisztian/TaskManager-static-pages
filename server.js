require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.port || 4044;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
