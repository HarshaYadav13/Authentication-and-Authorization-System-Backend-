import express from "express"
import {pool} from './dbconnection.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
app.use(express.json())

app.post('/signup', async function(req, res) {
    const  {name, email, password} = req.body

    const hashed_pass = await bcrypt.hash(password, 10)

    try {
        await pool.query("INSERT INTO newuser(name, email, hashed_password) VALUES($1, $2, $3);", [name, email, hashed_pass])
        res.status(200).json({message: "User created"});
    }catch(err) {
        res.status(400).json({error: err.message})
    }
})

app.post('/login', async function(req, res) {
    const {email, password} = req.body

    const result = await pool.query("SELECT * FROM newuser WHERE email=$1", [email])

    if(result.rows.length === 0) {
        return res.status(401).json({error: "User not found. Please signup"})
    }
    const user = result.rows[0]
    const match = await bcrypt.compare(password, user.hashed_password)

    if(!match) return res.status(401).json({error: "Incorrect password"})
    const token = jwt.sign(
        {email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )
    return res.json({message: "Login successful", token})
})

app.listen(3000, () => console.log("Server running now"))