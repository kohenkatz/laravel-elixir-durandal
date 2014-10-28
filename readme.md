## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-durandal');

elixir(function(mix) {
   mix.durandal();
});
```

This will scan your `/jsapp` directory for all files.

If you'd like to output to a different directory than the default `public/app`, then you may override this as well.

```
mix.durandal("app.js", "public/js/foo/bar/");
```

**TODO**: Changing the place where this task looks so you can specify other root locations or so you can use traceur.

## Thanks

 - [JeffreyWay](https://github.com/JeffreyWay) for his implementation of [laravel-elixir-stylus](https://github.com/JeffreyWay/laravel-elixir-stylus) which I used as a template for this implementation (as well as for all of his other Laravel work!)
 - [welldone software](http://welldone-software.com/) for their implementation of [gulp-durandal](https://github.com/welldone-software/gulp-durandal)
