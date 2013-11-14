# {{minify}} [![NPM version](https://badge.fury.io/js/handlebars-helper-minify.png)](http://badge.fury.io/js/handlebars-helper-minify) 

> {{minify}} handlebars helper.

This helper depends on and extends [js-beautify](https://github.com/einars/js-beautify). Please visit and star that project to show your support.

[Also see examples →](./EXAMPLES.md)

## Quickstart
In the root of your project, run the following in the command line:

```bash
npm i handlebars-helper-minify --save-dev
```



## Options
All options from [js-beautify](https://github.com/einars/js-beautify) are available in this helper, as well as a few custom options that were specially created for this helper. The helper comes with some sensible defaults (in the humble opinion of the helper creator), but it's easy to customize them if you need to. Here are are two (convenient) ways to set options:

* **options object**: pass an options object to the helper as a parameter. E.g. `{{#minify opts.obj}}`.
* **options hash**: this is an easy way to set options on the helper, and it also gives you granular control over how the helper renders content.
* **Gruntfile**: if you use both [Grunt](http://gruntjs.com/) and [Assemble](http://assemble.io), you can define options in the Assemble task options of your project's Gruntfile.


#### options hash
By design, options define here will override options defined anywhere else. This approach also provides granular control over options, allowing you to defined different options on multiple instances of the helper in the same file.

Example:

```handlebars
{{#minify removeComments="true"}}
  {{> header }}
{{/minify}}
{{#minify removeEmptyElements="true"}}
  {{> body }}
{{/minify}}
{{#minify removeComments="true"}}
  {{> footer }}
{{/minify}}
```


#### "assemble" task options
The helper can be used without [Grunt](http://gruntjs.com/) or [Assemble](http://assemble.io). But if you happen to use these two awesome tools you can define options for the helper in your Gruntfile in the `minify` sub-options for Assemble:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      minify: {
        removeAttributeQuotes: false
      }
    },
    files: {}
  }
});
```

Options defined in the Assemble task can be viewed as custom "global" defaults, which can be overridden by options defined in the options hash.

### option defaults

```js
{
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
}
```

### Example

#### Before

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>

    <!-- code comment -->
    <h1>My Blog</h1>
    <h2>Post of the day</h2>

    <!-- scripts -->
    <a href="#">Read more...</a>
  </body>
</html>
```

#### After

```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><!-- code comment --><h1>My Blog</h1><h2>Post of the day</h2><!-- scripts --><a href="#">Read more...</a></body></html>
```


## Contributing
Please see the [Contributing to Assemble](http://assemble.io/contributing) guide for information on contributing to this project.

## Author

**Jon Schlinkert**

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)

## Related Projects and Links

+ [handlebars-helpers](https://github.com/assemble/handlebars-helpers)
+ [helpers](https://github.com/helpers): some great handlebars helpers that we decided not to include in the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) project, most likely because the code footprint was too big or the helper wasn't generic enough.

## License
Copyright (c) 2013 Jon Schlinkert, contributors.
Released under the MIT license

***

_This file was generated on Thu Nov 14 2013 03:45:59._
