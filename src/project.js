var express = require('express')
var app = express()
var cors = require('cors')
var logger = require('morgan')
var mongoose = require('mongoose')
var routes = require('./src/routes')

var corsOptions = {
    origin: 'http://localhost:5000',
    credentials: true
}
const CONNECT_URL = 'mongodb://localhost:27017/syleemomo'
mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("mongodb connected ..."))
  .catch(e => console.log(`failed to connect mongodb: ${e}`))

app.use(cors(corsOptions))
app.use(express.json())
app.use(logger('tiny'))

app.use("/api", routes)

app.get('/hello', (req, res) => {
    res.send('project!')
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



// const mongoose = require('mongoose') 
// const todoSchema = mongoose.Schema({ // 스키마 정의 
//     title: { type: String, required: true, trim: true },
//     author: { type: String, required: true, trim: true },
//     summary: { type: String, default: true},
//     genre: { type: String, default: true },
//     release: { type: String, required: true, trim: true },
//     ISBN: { type: Number, required: true, trim: true },
// }) 

// const Book = mongoose.model('Book', userSchema) // 스키마로부터 생성된 모델 객체 
// module.exports = book;


// var express = require('express')
// var app = express()
// var cors = require('cors')
// var logger= require('mongoose')
// var routes = require('./src/routes')

// app.use(cors())
// app.use(express.json())
// app.use(logger('tiny'))

// app.use('/api', routes)

// app.get('/hello', (req, res) => {
//     res.send('hello world!')
// })
 
// app.get('/books') , (req, res) =>{
//     res.send('all book list')
// }

// app.get('/books/:id') , (req, res) =>{
//     res.send('all book list')
// }

// app.post('/books/') , (req, res) =>{
//     res.send('all book list')
// }

// app.put('/books/:id') , (req, res) =>{
//     res.send('all book list')
// }

// app.delete('/books/:id') , (req, res) =>{
//     res.send('all book list')
// }

// app.use( (req, res, next) => { // 사용자가 요청한 페이지가 없는 경우 에러처리 
//     res.status(404).send("Sorry can't find page") 
// }) 

// app.use( (err, req, res, next) => { // 서버 내부 오류 처리 
//     console.error(err.stack)  
//     res.status(500).send("something is broken on server !") 
// })

// app.listen(5000, () => { // 5000 포트로 서버 오픈 
//     console.log('server is running on port 5000 ...') 
// })


// const mongoose = require('mongoose')
// const todo = require('./Book')

// const userSchema = mongoose.Schema({
//     title: { type: String, required: true, trim: true },
//     author: { type: String, required: true, trim: true },
//     summary: { type: String, default: true},
//     genre: { type: String, default: true },
//     release: { type: String, required: true, trim: true },
//     ISBN: { type: Number, required: true, trim: true },
// })

// module.exports = bookSchema;
