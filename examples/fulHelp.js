#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('../');

program
    .alias('fullHelp')
    .command('setup', '--setup--', 'system setup')
    .usage('This for usage fullHelp')
    .version('0.0.1')
    .option('-f, --foo', 'enable some foo')
    .parse(process.argv);

if (!program.args.length) program.help();