var natural = require('natural')
//var classifier = new natural.BayesClassifier()

function classify(text) {
    return new Promise(function(resolve, reject) {
        natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
            if(err) {
                console.log(err)
                classifier = new natural.BayesClassifier()
                reject(err)
            }
            else {
                var catagory = classifier.classify(text)
                resolve(catagory)
            }
        })
    })
}

module.exports = {
    classify: classify
}