/*
 * helper-minify
 * https://github.com/helpers/helper-minify
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Lint JavaScript
    jshint: {
      all: ['Gruntfile.js', 'index.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    /**
     * Build HTML from templates and data
     */
    assemble: {
      options: {
        flatten: true,
        layout: 'test/fixtures/layouts/default.hbs',
        helpers: ['./index.js'],
      },
      minify_defaults: {
        options: {
          minify: {
            // collapseWhitespace: false
          }
        },
        src: ['test/fixtures/*.hbs'],
        dest: 'test/actual/'
      }
    },

    /**
     * Before generating any new files,
     * remove files from previous build.
     */
    clean: {
      example: ['test/actual/*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('assemble');

  // Default tasks to be run.
  grunt.registerTask('default', ['jshint', 'clean', 'assemble', 'readme']);
};
