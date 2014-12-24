# Tappifications

Tappifications is a toaster notification library that can be used to easily promote content or notify users on your site.

## Getting Started

Install all dependencies then run `gulp` in the command line to open the `index.html` example in your browser.

```
npm install
bower install
gulp
```

## Usage

Three types of notifications are available

### info

```javascript
$.tappification({
    type: 'info',
    message: 'Your info message goes here!',
    callToActionText: 'Click on me',
    callToActionUrl: 'http://www.tapptv.com/'
});
```

![info](media/info.jpg)

### warning

```javascript
$.tappification({
    type: 'warning',
    message: 'Your warning message goes here!',
    callToActionText: 'watch out!',
    callToActionUrl: 'http://www.tapptv.com/'
});
```

![warning](media/warning.jpg)

### danger

```javascript
$.tappification({
    type: 'warning',
    message: 'Your danger message goes here!',
    callToActionText: 'something went wrong',
    callToActionUrl: 'http://www.tapptv.com/'
});
```

![danger](media/danger.jpg)

## Dependencies

* jQuery <= 2.x.x

* Font-Awesome >= 4.2.0

## Including It In Your Project

Import the css and js and you're good to go!

```html

<link rel="stylesheet" type="text/css" href="dist/tappifications.css">

<script type="text/javascript" src="dist/tappifications.js">
```

## License

The MIT License (MIT)

Copyright (c) 2014 tapptv.com
