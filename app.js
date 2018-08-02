import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;
app.set("PORT", PORT);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(app.get("PORT"), () => console.log(`Listening on port ${PORT}`));