const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.text())
app.use(express.json());
app.use(cors({ origin: true }));

app.use((err, req, res, next) => {

    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).json({ status: 1, message: "put a valid request body" }); // Bad request
    }

});

app.use( 

    (req, res, next) => {
        req.body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        next()
    }

)

app.use('/novunotification', require("./routes/novuroute"));

app.use((req, res, next) => {

    res.status(400).json({
        status: 1,
        message: "404 No routes found"
    })

})

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Notification Dashboard app listening at http://localhost:${port}`))

