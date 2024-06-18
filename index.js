const express = require("express")
const { connection, UserModel } = require("./db")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.get("/users", async (req, res) => {
    try {
        const users = await UserModel.find()
        res.send(users)
    } catch (err) {
        console.log("err", err)
    }

})

app.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.send("User has been registered")

    } catch (error) {
        console.log("error", error)

    }

})

app.patch("update/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await UserModel.findByIdAndUpdate({ _id: ID }, payload)
        res.send("User has been Updated")

    } catch (err) {
        console.log(err)
    }
})
app.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id
    try {
        await UserModel.findByIdAndDelete({ _id: ID })
        res.send("User has been Deleted")

    } catch (err) {
        console.log(err)
    }
})

app.listen(3000, async () => {
    try {
        await connection
        console.log("connected to db")
    }
    catch (err) {
        console.log(err)
    }
    console.log("Server is running on port 3000")
})