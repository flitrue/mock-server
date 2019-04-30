var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
var kline = require('../public/json/stock-kline.json');

router.get('/', function (req, res, next) {
  var code = req.query.code
  res.json(Mock.mock({
    'status': 200,
    'message': 'ok',
    'data|300': [{
      'id|+1': 1,
      'code': code,
      'open|20-30': 20,
      'high|20-30': 20,
      'low|20-30': 20,
      'close|20-30': 20,
      'vol|20-30': 20,
      'amt|20-30': 20,
      'fromNowOn|+1': 1,
      'now|+1': '@now("yyyy-MM-dd")',
      'date|+1': function () {
        let now = new Date(this.now)
        now.setTime(now.getTime() - this.fromNowOn * 24 * 60 * 60 * 1000)
        let sub = now
        var year = sub.getFullYear() < 10 ? '0' + sub.getFullYear() : sub.getFullYear()
        var month = sub.getMonth() + 1 < 10 ? '0' + sub.getMonth() : sub.getMonth()
        var day = sub.getDate() < 10 ? '0' + sub.getDate() : sub.getDate()
        return year + '-' + month + '-' + day
      }
    }]
  }))
});

router.get('/kline', function(req, res, next) {
  return res.json(kline)
})

module.exports = router;