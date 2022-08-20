const fs = require('fs');

let jsonData = fs.readFileSync('data.json');
let data = JSON.parse(jsonData);


// result of --'s  meeting this hive account level is -- and avg
function getHive(hiveID){
    let result
    data.forEach(info => {
        if(hiveID == info.name){
            let objectValue = Object.values(info.levels)
            let revers = objectValue.reverse()
            let avg = 0
            for(let i = 0; i <= 5; i++){
                avg += +revers[i]
            }
            objectValue.reverse()
            result = `Результат ${objectValue.length} встречи ${hiveID}  учетной записи уровень ${objectValue[objectValue.length - 1]} и средний уровень ${Math.round(avg / 6)}`
        }
    })
    return result
}

function isExist(hiveID){
    let exist = false
    data.forEach(info => {
        if(hiveID == info.name){
            exist = true
        }
    })

    return exist
}


module.exports = {
    getHive,
    isExist
}