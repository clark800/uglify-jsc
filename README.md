uglify-jsc
==========
This small wrapper lets you run UglifyJS without NodeJS using `jsc` which is included in OSX.

To build, run `./build`. This will clone the UglifyJS repo and concatenate the javascript libraries in the repo, along with `main.js`.

To install, run `sudo ./install`. This will install to `/usr/local/` by default.

The install script tries to create a symlink for `jsc` on OSX, but if you are on another system or this doesn't work, you will have to make sure `jsc` is installed and in your PATH.

Usage: `uglify <file>...`. The minified code is printed to stdout.
