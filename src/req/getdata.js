const { mysql } = require("../module/mysql")

const getdata = (req) => {
    if(deviceid == "all"){
        const specificLog = mysql(`SELECT * FROM datalog WHERE typeid = '${req.body.typeid}' ORDER BY ID DESC LIMIT 1`)
        return {status: "ok", data: specificLog}

    }else{
        const allLogs = mysql(`SELECT * FROM datalog`)
        return {status: "ok", data: allLogs}
    }
}

exports.getdata = getdata