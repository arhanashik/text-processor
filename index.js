var express = require('express')
var bodyParser = require('body-parser')
var langDetector = require('./modules/lang-detector/detect-lang')
var classifier = require('./modules/text-classifier/classifier')
var trainer = require('./modules/text-classifier/trainer')
var app = express()

const PORT = 1337

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/*
* check the language of a given text
* method: post
* input: text
* output: {text: , bestMatch: , lang: }
*/
app.post('/check-lang', function (req, res){
    let text = req.body.text

    res.end(JSON.stringify(langDetector.detect(text)))
})

/*
* train the bot with example sentences and the tag for it
* method: post
* change the training set in modules/text-classifier/trainer.js file
*/
app.post('/train', function (req, res){
    trainer.train().then(function(result) {
        res.end(JSON.stringify({result: result}))
    }, function(err) {
        res.end(JSON.stringify({err: err}))
    })
})

/*
* check the class of a sentence
* method: post
* input: text
* output: {text: , class: }
*/
app.post('/classify', function (req, res){
    let text = req.body.text

    classifier.classify(text).then(function(result) {
        console.log('class: ', result)
        res.end(JSON.stringify({class: result}))
    }, function(err) {
        console.log('err: ', err)
        res.end(JSON.stringify({error: err}))
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})