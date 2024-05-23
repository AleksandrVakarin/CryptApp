//  deploy: cd.. (go to CryptApp): npm init -y (creating new package.json in foulder CryptApp)
// npm install express
// cd frontend (go to frontend): npm run build
// cd..(go to CryptApp): node server.js

const express = require('express')
const app = express()
const port = 80

app.use(express.static('frontend/dist')) // path to dist

app.listen(port, () => console.log('Server has been startednon port 80 ...'))