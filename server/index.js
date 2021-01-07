const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({hello: 'buddy'});

});

//1036918324009-07gff3e7cur2u6i6um93rmlddhvl8voe.apps.googleusercontent.com


const PORT = process.env.PORT || 5000;
app.listen(PORT);