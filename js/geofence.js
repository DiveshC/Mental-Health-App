const request = require('request')

const options = {
    url: "https://api.radar.io/v1/geofences/5e2c89b9e31f080050b9ee37",
    headers :{
        Authorization: "prj_test_sk_d5140d190303bdf5a7f94b0f424c3623cd1c1179"
    }

}

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
    }
  }
   
  request(options, callback);