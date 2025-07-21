const express = require("express");
const app = express();

var users = [{
    name: "harkirat",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);
    res.json(johnKidneys); // Add response to client
})

// Add error handling for port in use
const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(`Error starting server: ${err.message}`);
        return;
    }
    console.log(`Server running on port ${port}`);
});