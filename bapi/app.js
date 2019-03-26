import express from 'express';
import axios from 'axios';

require('dotenv').config();
var cors = require('cors')
const app = express();
var parser = require('xml2json');

app.use(cors())

app.get('/v1/employees/directory', (req, res) => {
  axios.get('https://api.bamboohr.com/api/gateway.php/switchmediaau/v1/employees/directory', {
    auth: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  })
    .then(xml => {
      return JSON.parse(parser.toJson(xml.data));
    })
    .then(json => {
      const employees = json.directory.employees.employee;

      return employees.map(employee => {
        const out = { "id": employee.id };

        employee.field.forEach(field => {
          if (field["$t"] !== undefined) {
            out[field["id"]] = field["$t"];
          }
        });

        return out;
      })
    })
    .then(json => {
      res.status(200).send(
        json
      );
      return;
    })
    .catch(function (error) {
      console.log(error);
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});