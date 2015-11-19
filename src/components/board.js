var h = require('virtual-dom/h')
var row = require('./row')

function render (data) {
  return h(
    '#board',
    data.map((r) => {
      return row(r)
    })
  )
}

module.exports = render
