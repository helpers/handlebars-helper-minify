All options from [js-beautify](https://github.com/einars/js-beautify) are available in this helper, as well as a few custom options that were specially created for this helper. The helper comes with some sensible defaults (in the humble opinion of the helper creator), but it's easy to customize them if you need to. Here are are two (convenient) ways to set options:

* **options object**: pass an options object to the helper as a parameter. E.g. `{{#minify opts.obj}}`.
* **options hash**: this is an easy way to set options on the helper, and it also gives you granular control over how the helper renders content.
* **Gruntfile**: if you use both [Grunt](http://gruntjs.com/) and [Assemble](http://assemble.io), you can define options in the Assemble task options of your project's Gruntfile.


### options hash
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


### "assemble" task options
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

## option defaults

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

## Example

### Before

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

### After

```html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title></title></head><body><!-- code comment --><h1>My Blog</h1><h2>Post of the day</h2><!-- scripts --><a href="#">Read more...</a></body></html>
```