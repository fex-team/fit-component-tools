import fs from 'fs'
import lodash from 'lodash'
import defaultConfig from './default'

const cfgs = []
fs.readdirSync(__dirname).map(filename => {
    "use strict";
    if (filename === 'index.js') {
        return false
    }
    try {
        const cfg = require('./' + filename);
        if (lodash.isPlainObject(cfg)) {
            cfgs.push(cfg);
        }
    } catch(e) {}
});

cfgs.push(defaultConfig);

const config = lodash.defaultsDeep.apply(lodash, cfgs);
export default config