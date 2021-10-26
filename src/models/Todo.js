const mongoose = require('mongoose') 
const todoSchema = mongoose.Schema({ // 스키마 정의 
    name: { type: String, required: true, trim: true }, 
    done: { type: Boolean, default: false}, 
    description: { type: String, required: true, trim: true } 
}) 

const Todo = mongoose.model('Todo', todoSchema) // 스키마로부터 생성된 모델 객체 
module.exports = Todo;

