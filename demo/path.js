const path = require('path')

console.log(__filename)

console.log('Название файла: ', path.basename(__filename))

console.log('Название директория:', path.dirname(__filename))

console.log('Расшиение файла: ', path.extname(__filename))
//получаем объект
console.log('Parse: ', path.parse(__filename))

console.log(path.join(__dirname,'server','index.html'))