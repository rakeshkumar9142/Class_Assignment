function add(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a+b;
}
function sub(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a-b;
}
function mul(a,b) {
    a = parseInt(a);
    b = parseInt(b);
    return a*b;
}
function div(a,b) {
    if(b == 0) {
        throw new Error('we can not divide by zero,please change a value of b.')
    }
}

module.exports = {add,sub,mul,div};