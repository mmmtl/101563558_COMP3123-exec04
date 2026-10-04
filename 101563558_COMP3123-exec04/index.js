const express = require("express")
const app = express()

const SERVER_PORT = process.env.PORT || 2000

// Middleware
app.use("/static", express.static("public/instruction.html"))

app.use(express.json())

app.use(express.urlencoded({extended: true}))


//-------------------------------------------

app.get("/hello", (request, response) => {
    response.send("Hello Express JS")
})

app.get("/user", (request, response) => {
    const first = request.query.first
    const last = request.query.last

    response.json({
        first_name: first,
        last_name: last
    })
})

app.post("/user/:first/:last", (request, response) => {
    const first = request.params.first
    const last = request.params.last

    response.json({
        first_name: first,
        last_name: last
    })
})

app.post("/users", (request, response) => {
    const users = request.body

    response.json(users)
    
})

//-----------------------------------------

app.listen(SERVER_PORT, () => {
    console.log("Server is running in port " + SERVER_PORT)
})