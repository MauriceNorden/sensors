const changeRange = (req, res) => {
    const { deviceid, value } = req.body;
    const query = mysql(`UPDATE devices SET range = '${value}' WHERE ID = '${deviceid}'`);
    return { status: "ok", data: query };



    const query = mysql(`SELECT MIN(ID) AS lowvalue, MAX(ID) AS highvalue
FROM datalog
WHERE deviceid = ${deviceid};`)[0]
}