
var exports = {};

if (typeof arguments !== 'undefined') {
    for (var i = 0; i < arguments.length; i++) {
        var input = readFile(arguments[i]);
        var result = minify(input);
        if (result.error) {
            print();
            throw result.error;
        }
        print(result.code);
    }
}
