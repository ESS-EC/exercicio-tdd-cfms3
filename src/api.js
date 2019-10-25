const express = require('express')
const app = express()
const port = 8080

app.get('/converterTemperatura', (req, res) => {

  let temp = parseFloat(req.query.valor);
  
  if (req.query.de == 'C') {
    if (req.query.para == 'C') {
      let ans = temp;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else if (req.query.para == 'F') {
      let ans = temp * 9 / 5 + 32;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else if (req.query.para == 'K') {
      let ans = temp + 273.15;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else {
      res.json({
        valor: -1,
        status: 500
      });
    }
  } else if (req.query.de == 'F') {
    if (req.query.para == 'C') {
      let ans = (temp - 32) * 5 / 9;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else if (req.query.para == 'F') {
      let ans = temp
      res.json({
        valor: ans,
        status: "ok"
      });
    } else if (req.query.para == 'K') {
      let ans = (temp - 32) * 5 / 9 + 273.15;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else {
      res.json({
        valor: -1,
        status: 500
      });
    }
  } else if (req.query.de == 'K') {
    if (req.query.para == 'C') {
      let ans = temp - 273.15;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else if (req.query.para == 'F') {
      let ans = (temp - 273.15) * 9 / 5 + 32;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else if (req.query.para == 'K') {
      let ans = temp;
      res.json({
        valor: ans,
        status: "ok"
      });
    } else {
      res.json({
        valor: -1,
        status: 500
      });
    }
  } else {
    res.json({
      valor: -1,
      status: 500
    });
  }
});

app.listen(port)
console.log("Listening on port: " + port)

module.exports = app;
