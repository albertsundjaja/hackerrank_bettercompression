function betterCompression(input) {
    let pattern = /\w\d+/g

    let match = input.match(pattern)

    let dict = {}
    match.forEach((m) => {
        let chr = m.match(/\w/g)[0]
        let digit = m.match(/\d+/g)[0]
        if (!dict.hasOwnProperty(chr)) {
            dict[chr] = parseInt(digit)
        } else {
            dict[chr] += parseInt(digit)
        }
    })

    let returnVal = ''
    for (const [key, val] of Object.entries(dict)) {
        returnVal += `${key}${val}`
    }

    return returnVal
}

let inputText = 'a12b56c21d5c12'
console.log(`input: ${inputText}, output: ${betterCompression(inputText)}`)

let inputText2 = 'a12b56c21d5c12a1b4d3'
console.log(`input: ${inputText2}, output: ${betterCompression(inputText2)}`)