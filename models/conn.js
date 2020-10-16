const pgp = require("pg-promise")({
  query: function (e) {
    console.log("QUERY: ", e.query);
  },
});

const options = {
  host: "raja.db.elephantsql.com",
  database: "xrhbsjpi",
  user: "xrhbsjpi",
  password: "mgrvJQNjpklMXlmJxQo9gGPXs8MTCZcC",
};

const db = pgp(options);

module.exports = db;
