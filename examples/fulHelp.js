#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('../');

program
    .alias('fullHelp')
    .command('setup <first> [second]',  'system setup')//TODO: 无descript时，返回值是啥？
    .usage('This for usage fullHelp')
    .version('0.0.1')
    .option('-f, --foo', 'enable some foo')
    .parse(process.argv);

if (!program.args.length) program.help();