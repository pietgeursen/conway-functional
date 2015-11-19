var h = require('virtual-dom/h');

function render(data) {
    return h('.cell',{style: {display: 'inline'}}, [data.toString()]);
}

module.exports = render;
