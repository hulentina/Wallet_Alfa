const fs = require('fs')
const {math} = require("@tensorflow/tfjs");
export default function nearby(lat_1, lon_1) {
    fs.readFile('./csvjson.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
        }
        var data = JSON.parse(jsonString)
        var res = [['', 100000], ['', 100000], ['', 100000], ['', 100000], ['', 100000]]
        for (var i = 0; i < data.length; i++) {
            var distance = Math.sqrt((lat_1-data[i].lat)**2+(lon_1-data[i].lon)**2)
            for (var i_1 = 0; i_1 < res.length; i_1++){
                if (distance <= res[i_1][1]){
                    for (var i_2 = i_1; i_2 < res.length-1; i_2++){
                        res[i_2] = res[i_2+1]
                    }
                    res[i_1] = [data[i].name, distance]
                    i_1 = 5
                }
            }
        }
        console.log(res)
        return res;
    })
}

// nearby(55.740664072240676, 37.68154709690829)
