const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(express.json());

app.use(express.static('public'));

app.use(cors({ origin: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.use('/novunotification', require("./routes/novuroute"));

app.use((req, res, next) => {

    res.status(400).json({
        status: 1,
        message: "404 No routes found"
    })

})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Notification Dashboard app listening at http://localhost:${port}`))

