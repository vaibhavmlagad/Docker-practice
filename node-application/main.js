const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    return res.json({ message: "Hey, this is our first nodejs application in container" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));