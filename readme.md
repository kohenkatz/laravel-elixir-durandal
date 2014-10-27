## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-durandal');

elixir(function(mix) {
   mix.durandal();
});
```

This will scan your `resources/assets/durandal` directory for all files.

If you'd like to output to a different directory than the default `public/app`, then you may override this as well.

```
mix.stylus("app.js", "public/js/foo/bar/");
```
