# Tappifications

> Because we need another jquery notifications library...

## About 

Tappifications is a toaster notification library that can be used to easily promote content or notify users on your site.

## Getting Started

Install all dependencies then run `gulp` in the command line to open the `index.html` example in your browser.

```
npm install
bower install
gulp
```

## Usage

```
$.tappification({
    type: 'info',
    message: 'Your message goes here!',
    callToActionText: 'Click on me',
    callToActionUrl: 'http://www.tapptv.com/'
});
```

## Dependencies

* jQuery <= 2.x.x

* Font-Awesome >= 4.2.0

## Including It In Your Project

Import the css and js and you're good to go!

```
html

 <link rel="stylesheet" type="text/css" href="dist/tappification.min.css">

 <script type="text/javascript" src="dist/tappification.min.js">
```

## Look and Feel

Currently three flavors of notifications are available

### info

![info](media/info.jpg)

### warning

![warning](media/warning.jpg)

### danger

![danger](media/danger.jpg)

## License

The MIT License (MIT)

Copyright (c) 2014 tapptv.com

