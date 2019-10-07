<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->

    </head>
    <body>
    <div id="app" class="content">
        <App></App>
    </div>

        <script src="{{ mix('js/app.js') }} "></script>
        <script src="{{ mix('css/app.css') }} "></script>

    </body>
</html>
