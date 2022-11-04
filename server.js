const express = require("express");
const app = express();
const PORT = 8000;

app.use('/StyleSheets/SASS',express.static('StyleSheets/SASS'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})