//  deploy: cd.. (go to CryptApp): npm init -y (creating new package.json in foulder CryptApp)
// npm install express
// cd frontend (go to frontend): npm run build
// cd..(go to CryptApp): node server.js
// create .gitignore
// go to gitHub create new repository
// CryptApp: git init , git add . , git commit -m "" , git push -u .....  ,
// npm node server.js (browser: http://localhost:80)


const express = require('express')
const app = express()
const port = 80

app.use(express.static('frontend/dist')) // path to dist

app.listen(port, () => console.log('Server has been startedn on port 80 ...'))

// cloud host: terminal: apt udate, apt install git, sudo apt install build-essential checkinstall libssl-dev,
// terminal: wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | sudo bash
// terminal: . .bashrc , nvm ls-remote , nvm install 20.12.2(only for this app) , 
// terminal: git clone https://github.com/AleksandrVakarin/CryptApp.git
// terminal: cd CryptApp: npm install , cd frontend: npm install
// terminal: npm run build,
// cd .. (go to CryptApp)
// npm install -g pm2
// pm2 start server.js