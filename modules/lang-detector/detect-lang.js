var franc = require('franc')

function detect(text) {
    //var lang = franc(text)
    // var lang = franc(text, {minLength: 3})
    //var lang = franc.all(text)
    var lang = franc.all(text, {whitelist: ['eng', 'spa', 'ben']})
    //var lang = franc.all(text, {blacklist: ['src', 'glg']})
    var bestLangCode = lang[0][0]

    return {text: text, bestMatch: bestLangCode, lang: lang}
}

module.exports= {
    detect: detect
}