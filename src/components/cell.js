var h = require('virtual-dom/h')
var sheetify = require('sheetify')
var classNames = require('classnames')

var prefix = sheetify('./cell.css')

function render (data) {
  // TODO find a way to remove this wrapper div
  // while still using sheetify
  return h('div', {
    className: prefix
  }, [
    h('div', {
      className: classNames(['cell', {
        alive: !!data, dead: !data
      }])
    })
  ])
}

module.exports = render
