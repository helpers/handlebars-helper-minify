# {{{%= shortname %}}} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

This helper depends on and extends [js-beautify](https://github.com/einars/js-beautify). Please visit and star that project to show your support.

[Also see examples →](./EXAMPLES.md)

## Quickstart
{%= _.doc("docs-quickstart.md") %}

## Options
{%= _.doc("docs-options.md") %}

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
{%= copyright %}
{%= license %}

***

_This file was generated on {%= grunt.template.today() %}._
