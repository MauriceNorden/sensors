const { mysql } = require("../module/mysql")

const getdata = (req) => {

        const specificLog = mysql(`SELECT datalog.*, devices.name AS devicename
        FROM datalog
        JOIN devices ON datalog.deviceid = devices.ID WHERE datalog.typeid = '${req}' ORDER BY ID`)



        return {status: "ok", data: specificLog}
}

exports.getdata = getdata