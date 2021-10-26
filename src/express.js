// var express = require('express') 
// var app = express() 
// app.listen(5000, () => { 
//     console.log('server is running on port 5000 ...') })


// var express = require('express') // node_modules 내 express 관련 코드를 가져온다 
// var app = express() 

// app.get('/hello', (req, res) => { // URL 응답 테스트 
//    res.send('hello world !') }) 
    
// app.listen(5000, () => { // 5000 포트로 서버 오픈 
//    console.log('server is running on port 5000 ...') 
// })


// var express = require('express') // node_modules 내 express 관련 코드를 가져온다 
// var app = express() 

// app.get('/hello', (req, res) => { // URL 응답 테스트 
//     res.send('hello world !') 
// }) 
// app.use( (req, res, next) => { // 사용자가 요청한 페이지가 없는 경우 에러처리 
//     res.status(404).send("Sorry can't find page") }) 
// app.listen(5000, () => { // 5000 포트로 서버 오픈 
//    console.log('server is running on port 5000 ...') 
// })


// const e = require('express')
// var express = require('express') // node_modules 내 express 관련 코드를 가져온다 
// var app = express() 

// app.get('/hello', (req, res) => { // URL 응답 테스트 
//     res.send('hello world !') 
// }) 
// app.use( (req, res, next) => { // 사용자가 요청한 페이지가 없는 경우 에러처리 
//    res.status(404).send("Sorry can't find page") 
// }) 
// app.use( (err, req, res, next) => { // 서버 내부 오류 처리 
//    console.error(err.stack) 
//    res.status(500).send("something is broken on server !") 
// }) 
// app.listen(5000, () => { // 5000 포트로 서버 오픈 
//    console.log('server is running on port 5000 ...') 
// })


// const points = [3,5];
// const app = {}
// app.doubleNums = (porints) =>{
//     return points.map(p =>{
//         return p*p;
//     })
//     return s;
// }
// app.sq = (s) => {
//     return Math.sprt(s)
// }
// const pipeline = [app.doubleNums,app.sum,app.sq]

// const result=app.sq(app.sum(app.doubleNums(points)))
// console.log(result)


var express = require('express') // node_modules 내 express 관련 코드를 가져온다 
var app = express() 
var cors = require('cors')
var logger = require('morgan')
var mongoose = require('mongoose')



//  var corsOptions = { // CORS 옵션 
//     origin: 'http://localhost:3000', 
//     credentials: true 
// } 

// app.use(cors(corsOptions)) // CORS 설정 
app.use('/static', express.static(__dirname + '/public'))
app.use(cors())
app.use(express.json()) // request body 파싱
app.use(logger('tiny')) // Logger 설정

// app.get('/users/:name/comments', (req, res, next) => {
//     if(req.params.name !== "syleemomo"){
//         res.status(401).send('Your are not authroized to this site')
//     }
//     next()
// }, (req, res) => {
//     res.send("this is page to update your comments!")
// })

// app.get("/users/contact", (req, res) => { 
//     res.send("contact page !")
// })

// app.get('/chance', (req, res, next) => {
//     if(Math.random() < 0.5) return next()
//     res.send('first one')
// })
// app.get('/chance', (req, res) => {
//     res.send('secound one')
// })
  
// app.get('/fruits/:name', 
//     (req, res, next) => { 
//         if (req.params.name !== "apple") return next() 
//         res.send('[logic 1] you choose apple for your favorite fruit !') 
//     }, 
//     (req, res, next) => { 
//         if (req.params.name !== "banana") return next() 
//         res.send('[logic 2] you choose banana for your favorite fruit !') 
//     }, 
//     (req, res) => {
//         res.send(`[logic 3] you choose ${req.params.name} for your favorite fruite !`)
//     })

//     app.post('/users', (req, res) => {
//         console.log(req.body.newUser)
//         res.json(`new user - ${req.body.newUser.name}`)
// })
  
// app.get('/shirts', (req, res) => {
//     res.send(`feature => color : ${req.query.color} / size => ${req.query.size}`)
// })

// app.get('/hello', (req, res) => {
//     res.send(`<html>
//                 <head>
//                 </head>    
//                 <body>
//                     <h1>Hello world !<h1>
//                     <input type="button" value="Submit"/>
//                 </body>
//             </html>`)
// })

// app.get('/hello', (req, res) => {
//     res.json({ user: "syleemomo" , msg: "hello!"})
// })

// app.get('/google', (req, res) => {
//     res.redirect("https://google.com")
// })

// app.get('/static', (req, res) => {
//     res.render('index')
// })

// app.get('/home', (req, res) => {
//     res.redirect('/static/index.html')
// })

app.get('/hello', (req, res) => {
    // console.log(__dirname)
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/home', (req, res) => {
    // console.log(__dirname)
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/detail', (req, res) => {
    // console.log(__dirname)
    res.sendFile(__dirname + '/public/home.html')
})

app.put('/users/:id', (req, res) => {
    console.log(req.body.updateUserInfoToUpdate)
    // 데이터베이스에 새로운 사용자 생성
    res.send(
    // 데이터베이스에서 id 에 해당하는 사용자 정보 조회 후 업데이트
        `user ${req.params.id} updated with payload ${
        req.body.updateUserInfoToUpdate.name
        }`
    )
})

app.delete('/users/:id', (req, res) => { 
    // 데이터베이스에서 id 에 해당하는 사용자 조회 후 제거 
    res.send(`user ${req.params.id} removed !`) 
})    

app.use( (req, res, next) => { // 사용자가 요청한 페이지가 없는 경우 에러처리 
    res.status(404).send("Sorry can't find page") 
}) 

app.use( (err, req, res, next) => { // 서버 내부 오류 처리 
    console.error(err.stack)  
    res.status(500).send("something is broken on server !") 
})

app.listen(5000, () => { // 5000 포트로 서버 오픈 
    console.log('server is running on port 5000 ...') 
})

