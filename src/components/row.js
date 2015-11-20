var h = require('virtual-dom/h')
var cell = require('./cell')

function render (data) {
  return h(
    '.row',
    {style: {display: 'flex'}},
    data.map((c) => {
      return cell(c)
    }))
}

module.exports = render
