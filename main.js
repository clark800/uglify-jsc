
var exports = {};

if (typeof arguments !== 'undefined') {
    var input = '';
    for (var i = 0; i < arguments.length; i++)
        input += readFile(arguments[i]) + '\n';
    var result = minify(input, {toplevel: true});
    if (result.error)
        throw new Error(result.error.message);
    print(result.code);
}
