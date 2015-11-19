var h = require('virtual-dom/h');
var cell = require('./cell');

function render(data) {
    return h('#board', 
       data.map((row)=>{
           return row.map((c)=>{return cell(c)})}) 
        );
}

module.exports = render;
