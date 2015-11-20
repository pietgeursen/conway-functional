var h = require('virtual-dom/h')
require('./cell.css')

function render (data) {
  return h(
    '.cell ' + (data ? '.alive' : '.dead'),
    {style: {flex: '1'}}
  )
}

module.exports = render
