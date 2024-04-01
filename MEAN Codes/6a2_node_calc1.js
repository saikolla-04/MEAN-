// File name: 6a2_node_calc1.js
/*This is a calc1 module. These exported Functions should be 
imported to external module. In this case are imported into 6a2_node_calc2.js
*/
exports.add = function (x, y) {
    return x + y;
};
exports.sub = function (x, y) {
    return x - y;
};
exports.mult = function (x, y) {
    return x * y;
};
exports.div = function (x, y) {
    return x / y;
};

