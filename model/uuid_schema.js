const mongoose = require("mongoose")
const schema = mongoose.Schema




function Token() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return ((c == 'x' ? r : (r & 0x1 | 0x6)));
  });
  return "OKB-" + uuid.substring(0, 4);
}
function Coupon() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return ((c == 'x' ? r : (r & 0x1 | 0x6))).toString(16);
  });
  return uuid.substring(0, 8);
}

var trackPassSchema = new schema({

  name: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  Token: { type: String, unique: true, default: Token },
  Coupon: { type: String, unique: false, default: Coupon }


});


const uuidDB = mongoose.model("uuidDB", trackPassSchema)

module.exports = uuidDB;