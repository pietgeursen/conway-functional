var h = require('virtual-dom/h');

function render(data) {
    return h('.row', [data.toString()]);
}

module.exports = render;
