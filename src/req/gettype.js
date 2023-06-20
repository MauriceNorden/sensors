const { mysql } = require("../module/mysql");

const gettype = (req) => {
const query = mysql(`SELECT * FROM devicetype;`)

return {"status": "ok", "data": query}
}


exports.gettype = gettype;