const express = require("express");
const app = express();

require("dotenv").config();

app.use('/StyleSheets/SASS',express.static('StyleSheets/SASS'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})


app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running, you better catch it!");
  });