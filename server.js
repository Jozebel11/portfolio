const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.static(__dirname + '/StyleSheets'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})