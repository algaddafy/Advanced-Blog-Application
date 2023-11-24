const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')


mix.postCss('resources/css/app.css', 'public/css', [
    //
]);

mix.sass('resources/sass/app.scss', 'public/css')
   .version();