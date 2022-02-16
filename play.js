// const fs = require('fs')

// // Reading data from file
// const dataBuffer = fs.readFileSync('notes.json')
// console.log('Buffer Data')
// console.log(dataBuffer)
// // converting buffer data to string
// const jsonData = dataBuffer.toString()
// console.log('Buffer data after conversion to JSON data')
// console.log(jsonData)

// // converting json data to JS object
// const data = JSON.parse(jsonData)
// console.log('Data after converting to JavaScript Object')
// console.log(data)
// // console.log(dataB/uffer)

const a = [2,2,4,5,6,2,7,8,2,9]

console.log('before')
console.log(a)
a.forEach((Element)=>
{
    if(Element === 2)
    {
        a.remove(Element)
    }
})
console.log('after ..........')
console.log(a)