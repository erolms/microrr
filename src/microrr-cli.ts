#!/usr/bin/env node

"use strict";

import * as program from "commander";
import Logger from "./util/Logger";
const pkg = require("../package.json");

process.title = pkg.name;
const logger = new Logger().logger;

program
  .name(pkg.name)
  .version(pkg.version, "-v, --version")
  .description(pkg.description);

program.parse(process.argv);

if (program.args.length < 1) {
  program.help();
}
