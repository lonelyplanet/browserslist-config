const assert = require('chai').assert;
const browserslist = require('browserslist');
const name = require('../package.json').name;
const config = require('../index.js');

describe(name, function() {
  it('config is an array', function() {
    assert.isArray(config, 'Config is not an array');
  });

  it('config is not empty', function() {
    assert.isNotEmpty(config, 'Config is empty');
  });

  it('works with browserslist', function() {
    const browsers = browserslist( config );

    assert.isArray(browsers, 'browsers is not an array');
    assert.isNotEmpty(browsers, 'browsers is empty');
    assert.notInclude(browsers, 'ie 9', 'browsers contains ie 9');
  });
});
