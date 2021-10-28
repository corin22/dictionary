const express = require('express')
const WordRouter = express.Router()

const Word = require('../../models/Word')

WordRouter.route('/(:word)?').get( async (req, res) => {
    let words = []
    const { word } = req.params
    const queries = word.split(',')
    console.log(queries)

    if(word !== "undefined" && word !== undefined){
        console.log(queries)
        try{
            console.log('단어 쿼리...')
            // words = await Word.find({ r_des: {$in: [
            //     {$regex: "법규"},
            //     {$regex: "계속"}
            // ]}})
            // words = await Word.find({ r_word: word}) // 데이터베이스에서 쿼리로 단어를 검색
            // words = await Word.find({ r_word: { $regex: `^${word}`}}) // 데이터베이스에서 검색어로 시작하는 단어를 검색
            // words = await Word.find({ r_word: { $regex: `${word}$`}}) // 데이터베이스에서 검색어로 끝나는 단어를 검색
            // words = await Word.find({ r_des: { $regex: `${word}`}}) // 

            words = await Word.find({ 
                $or: [
                    {r_word: {$regex: `${word}`}},
                    {r_des: {$regex: `${word}`}}
                ]
            }).sort({"_id": -1})
            // .limit(6) // -1 : 최신순(내림차순), 1: 과거순(오름차순)
        }catch(e){
            console.log(e)
        }
        
    }else{
        console.log(word)
        console.log(`word database: ${Word}`)
        // 데이터베이스에서 전체 단어 검색
        try{
            words = await Word.find()
        }catch(e){
            console.log(e)
        }
        
    }
    res.json({status: 200, words})
})

module.exports = WordRouter