const path = require('path');
const assign = require('object-assign');
const babelPlug = require('./fis-plugin/babel');

fis.set('project.ignore', [
    'lib/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'fis-conf.js',
    'test.js',
    'package.json',
    'README.md',
    'typings.json',
    'typings/**',
    'fis-plugin/**'
]);

fis.match('/src/(**).{ts,tsx,js,jsx}', {
    rExt: 'js',
    useSameNameRequire: true,
    parser: fis.plugin(babelPlug, {
        presets: ["es2016-node5", "stage-3"]
    }),
    release: '/$1'
});

const dev = fis.media('dev');

dev.match('/src/(**).{ts,tsx,js,jsx}', {
    rExt: 'js',
    isMod: true,
    useSameNameRequire: true,
    parser: fis.plugin(babelPlug, {
        presets: ["es2016-node5", "stage-3"],
        sourceMaps: true
    }),
    release: '/$1'
});

const production = fis.media('production');

production.match('/src/(**).{ts,tsx,js,jsx}', {
    rExt: 'js',
    isMod: true,
    useSameNameRequire: true,
    parser: fis.plugin(babelPlug, {
        presets: ["es2016-node5", "stage-3"],
        minified: true
    }),
    release: '/$1'
});