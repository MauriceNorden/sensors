const { mysql } = require("./mysql");

const checkeventrigger = () => {
    while(true) {
  const response = mysql(`SELECT * FROM devices`);
  const results = response.map((item) => {
    const getlatest = mysql(`SELECT dateadded FROM datalog WHERE deviceid = ${item.ID} ORDER BY dateadded DESC;`)[0];
    const currenttime = new Date().getTime(); 
    const databasetime =  Date.parse(getlatest.dateadded)
    const twoMinutesAgo = currenttime - (2 * 60 * 1000); 
    if (databasetime <! twoMinutesAgo) {
 

    const latest = mysql(`SELECT * FROM datalog WHERE deviceid = ${item.ID} ORDER BY dateadded DESC;`)[0];
    const trigger = mysql(`SELECT * FROM eventtrigger WHERE deviceid = ${item.ID}`)[0];

    if (latest >= trigger.begin && latest <= trigger.end) {
      return `{"data": "Statement triggered. value: ${latest.value} date: ${latest.dateadded}", "status": "ok}`;
    } else {
      return `{"data": "Statement not triggered. value: ${latest.value} date: ${latest.dateadded}", "status": "ok"}`;
    }
}
  });
  return results[0];
    }
};

exports.checkeventrigger = checkeventrigger;