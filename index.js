/*
 * {{minify}}
 * https://github.com/jonschlinkert/handlebars-helper-minify
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

// node_modules
var minifyHTML = require('html-minifier').minify;
var _          = require('lodash');

var minify = function(str, options) {
  try {
    return minifyHTML(str, _.extend({
      collapseBooleanAttributes: false,
      collapseWhitespace: true,
      removeAttributeQuotes: false,
      removeCDATASectionsFromCDATA: false,
      removeComments: false,
      removeCommentsFromCDATA: false,
      removeEmptyAttributes: false,
      removeEmptyElements: false,
      removeOptionalTags: false,
      removeRedundantAttributes: false,
      useShortDoctype: false
    }, options));
  } catch (err) {
    console.warn(err);
  }
};

module.exports.register = function(Handlebars, options, params) {
  var opts = options.minify || {};

  Handlebars.registerHelper('minify', function (options) {
    options = _.extend(options, opts, options.hash || {});
    return new Handlebars.SafeString(minify(options.fn(this), options));
  });
};
