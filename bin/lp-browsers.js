#! /usr/bin/env node
const browserslist = require('browserslist');
const config = require('../index.js');
const browsers = browserslist( config );

browsers.forEach( browser => console.log( browser ) );
