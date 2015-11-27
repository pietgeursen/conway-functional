var h = require('virtual-dom/h')
var sheetify = require('sheetify')
var classNames = require('classnames')

var prefix = sheetify('./cell.css')

function render (data) {
  return h('div', {
    className: classNames([prefix, 'cell', {
      alive: !!data, dead: !data
    }])
  })
}

module.exports = render
