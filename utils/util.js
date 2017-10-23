function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function myLogin(username, password) {
  var header

  wx.request({
    url: 'http://run.hbut.edu.cn/Account/LogOnForJson?Mobile=1&UserName=1310200128&Password=1310200128&Role=Student',
    dataType: 'application/json',
    success: function (res) {
      console.log(res.header),
      console.log(res.data)

      header = res.header;
    },
    fail: function (res) {
      console.log(res)
    }
  })

  return header
}

function getGrade(username, password) {
  wx.request({
    url: '',
  })
}