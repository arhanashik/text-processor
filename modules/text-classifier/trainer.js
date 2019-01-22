var natural = require('natural')
var classifier = new natural.BayesClassifier()

function train() {
    classifier.addDocument('messi is awesome', 'football')
    classifier.addDocument('music is awesome', 'music')
    classifier.addDocument('ronaldo is the best', 'football')
    classifier.addDocument('Football is the best game ever', 'football')
    classifier.addDocument(['horror', 'movie', 'dance', 'party'], 'entertainment')
    classifier.addDocument('I love music', 'music')
    classifier.addDocument('This is the best song I ever heard', 'music')
    classifier.addDocument('Atif aslam is rock', 'music')
    //classifier.addDocument(['I love music', '', ''], 'music')
    
    return new Promise(function(resolve, reject) {
        classifier.train()

        classifier.save('classifier.json', function(err, classifier) {
            if(err) {
                console.log(err)
                reject(err)
            } else {
                console.log('classifier trained and saved')
                resolve('classifier trained and saved')
            }
        })
    })
}

module.exports = {
    train: train
}