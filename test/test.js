/*global require:true */
/**
 * Handlebars Helpers: Markdown
 * http://github.com/helpers/handlebars-helper-markdown
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// Node.js
var assert = require('assert');
var path   = require('path');
var fs     = require('fs');

// node_modules
var Handlebars = require('handlebars');
require('../index.js').register(Handlebars, {
  // markdown: {
  //   cwd: 'test/fixtures'
  // }
});




describe('{{minify}}', function() {
  it('Should convert foo to bar, then baz.', function() {
    var source = '{{#minify}}# h1 Heading{{/minify}}';
    var template = Handlebars.compile(source);
    var content = template();
    assert.equal(normalizeResults(content), '<h1>h1 Heading</h1>');
  });

  it('Should do foo, bar and baz with an externally defined template.', function() {
    var source = fixtures('index.hbs');
    var template = Handlebars.compile(source);
    var content = template();
    assert.equal(normalizeResults(content), normalizeResults('a b c'));
  });
});


/**
 * The path to test fixtures
 * @param  {Function} filepath  Calculated path to test fixtures.
 * @return {String}             The full path to the specified file.
 * @example: fixtures('foo.md') => test/fixtures/foo.md
 */
var fixtures = function(filepath) {
  return fs.readFileSync(path.join.bind(null, __dirname, 'fixtures')(filepath).replace(/\\/, '/'), 'utf8');
};


/**
 * Normalize whitespace in results
 * @param  {String} str
 * @return {String}
 */
var normalizeResults = function(str) {
  return str.replace(/\n|\r/g, '\n').replace(/\t/g, ' ');
}
