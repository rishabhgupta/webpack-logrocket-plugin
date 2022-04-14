# Logrocket Webpack Plugin

A webpack plugin acting as an interface to [Logrocket CLI](https://github.com/LogRocket/logrocket-cli)

## Installation
`webpack-logrocket-plugin` requires at least webpack 4 or greater.

Using npm:

```npm install webpack-logrocket-plugin --save-dev```

Using yarn:

```yarn add webpack-logrocket-plugin --dev```

## Usage
```
const WebpackLogrocketPlugin = require('webpack-logrocket-plugin);

const config = {
  plugins: [
    new WebpackLogrocketPlugin({
      path: '',         
      release: '',     
      apiKey: '',      
      urlPrefix: '', 
    }),
  ],
};
```

### Options
|Option     |Type    |Required   |Description 
|-----------|--------|-----------|-----------
|path       |`string`|required   | One or more paths that Sentry CLI should scan recursively for sources. It will upload all .map files and match associated .js files.
|release    |`string`|required   | Unique identifier for the release.
|apikey     |`string`|required   | Logrocket API Key, used to communicate with logrocket.
|urlPrefix  |`string`|optional   | URL prefix to add to the beginning of all filenames. Defaults to ~/ but you might want to set this to the full URL. This is also useful if your files are stored in a sub folder. eg: url-prefix '~/static/js'.

Check official logrocket cli [documentation](https://docs.logrocket.com/docs/stacktraces#section-uploading-source-maps-to-logrocket) to understand above options.