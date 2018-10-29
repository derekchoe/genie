// module.exports = {
//   mongoURI:
//   "mongodb://genieflexproject:go_project_go1@ds139243.mlab.com:39243/genie",
//     secretOrKey: 'secret'
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./key_prod");
} else {
  module.exports = require("./key_dev");
}