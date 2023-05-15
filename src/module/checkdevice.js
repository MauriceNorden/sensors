const { mysql } = require("./mysql");

const checkdevice = (uid, type) =>{
    const query = mysql(`SELECT * FROM devices WHERE uid = '${uid}'`)[0]

    if(!query){
        const adddevice = mysql(`INSERT INTO devices (uid, type) VALUES ('${uid}', '${type}')`)
        if(!adddevice.affectedRows){
            console.log("error adding device")
        }
    }else{
        return {"data": query, "status": "ok"}
    }


}


exports.checkdevice = checkdevice;