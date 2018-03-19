#!/usr/bin/env node

'use strict';

let program = require('commander');
const pkg = require('../package.json');

process.title = pkg.name;

program
  .name(pkg.name)
  .version(pkg.version, '-v, --version')
  .description(pkg.description);

program.parse(process.argv);

if (program.args.length < 1) {
  program.help();
}
