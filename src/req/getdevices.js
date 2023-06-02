const { mysql } = require("../module/mysql");

const getdevices = (req) => {
const query = mysql(`SELECT devices.*, devicetype.name AS typename
FROM devices
JOIN devicetype ON devices.type = devicetype.ID;`)


return {"status": "ok", "data": query}
}

exports.getdevices = getdevices;