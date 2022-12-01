const express = require('express');
const cors = require('cors');
const prot = process.env.PORT || 5000;

const app = express();


// Middle ware
app.get('/', async (req, res) => {
    res.send('Demo Portal is running On 5000')
});


app.listen(prot, () => console.log(`This prot is running on ${prot}`))