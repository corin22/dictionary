const mongoose = require('mongoose') 
const Schema = mongoose.Schema({ // 스키마 정의 

    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    summary: { type: String, default: true},
    genre: { type: String, default: true },
    release: { type: String, required: true, trim: true },
    ISBN: { type: Number, required: true, trim: true },
}) 

const Book = mongoose.model('Book', userSchema) // 스키마로부터 생성된 모델 객체 
module.exports = bookSchema;

   
// app.get('/hello', (req, res) =>  {
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
