var h = require('virtual-dom/h');

function render(data) {
    return h('.cell', [data.toString()]);
}

module.exports = render;
