var addDays = require("date-fns/addDays");

let dateTime = new Date();

let result = addDays(
  new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
  100
);

const express = require("express");

const OP = express();

OP.get("/", (request, response) => {
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = OP;

