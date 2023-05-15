const { checkdevice } = require("../module/checkdevice")
const { mysql } = require("../module/mysql")

const logdata = (req) => {

    const check = checkdevice(req.body.uid, req.body.type)

    if(check.status == "ok"){
        console.log(check)
        mysql(`INSERT INTO datalog (deviceid, typeid, value) VALUES ('${check.data.ID}', '${req.body.type}', '${req.body.value}');`)
    }else{
        return {status: "error"}
    }
    console.log(req.body)
    return {status: "ok"}
}


exports.logdata = logdata