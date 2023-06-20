const { mysql } = require("../module/mysql")

const getrange = (deviceid) => {

const query = mysql(`SELECT MIN(ID) AS lowvalue, MAX(ID) AS highvalue
FROM datalog
WHERE deviceid = ${deviceid};`)[0]


return {"status": "ok", "data": query}
}



exports.getrange = getrange

