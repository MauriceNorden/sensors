const jsonHeader = new Headers();
jsonHeader.append("Content-Type", "application/json");


const getdevices = () => {
    var requestOptions = {
        method: 'GET',
        headers: jsonHeader,
        redirect: 'follow',
    };
    fetch(`/v1/devices`, requestOptions)
        .then(response => response.text())
        .then(result => handlegetdevices(result))

};

const getevents = (typeid) => {
    var requestOptions = {
        method: 'GET',
        headers: jsonHeader,
        redirect: 'follow',
    };
    fetch(`/v1/events/${typeid}`, requestOptions)
        .then(response => response.text())
        .then(result => handlegetevents(result))

};


const gettype = () => {
    var requestOptions = {
        method: 'GET',
        headers: jsonHeader,
        redirect: 'follow',
    };
    fetch(`/v1/type`, requestOptions)
        .then(response => response.text())
        .then(result => handlegettype(result))
}

const getrange = async (deviceid) => {
    var requestOptions = {
      method: 'GET',
      headers: jsonHeader,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(`/v1/range/${deviceid}`, requestOptions);
      const result = await response.text();
      return result;
    } catch (error) {
      console.error(error);
    }
  };


const changerange = (deviceid, value) => {
    var req = JSON.stringify({
        "value": value,
        "deviceid": deviceid

    });
    var requestOptions = {
        method: 'GET',
        headers: jsonHeader,
        redirect: 'follow',
        body: req,
    };
    fetch(`/v1/type`, requestOptions)
        .then(response => response.text())
        .then(result => handlegettype(result))
}

