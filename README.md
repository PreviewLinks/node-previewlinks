# Previewify for PHP

This is the official [Previewify](https://previewify.app) client for Node.js.

## Installation

You can install the package via NPM:

```bash
npm install @flowframe/node-previewify
```

## Usage

### Creating an instance

```js
const { Previewify } = require('@flowframe/node-previewify')

const previewify = new Previewify({ apiToken: '<YOUR_API_TOKEN>' })
```

### Methods

```js
// List sites
previewify
    .listSites()
    .then(response => response.data)

// Show site
let siteId = 1

previewify
    .showSite(siteId)
    .then(response => response.data)

// Show site's templates
let siteId = 1

previewify
    .listSiteTemplates(siteId)
    .then(response => response.data)

// Generate a direct image URL (useful for downloading and storing images yourself)
let siteId = 1
let templateId = 1
let fields = {
    'previewify:title': 'Hello from Node.js!',
    'previewify:subtitle': 'This is an example...',
}

previewify
    .downloadImage({
        siteId,
        templateId,
        fields,
    })
    .then(response => response.data)
```

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

-   [Lars Klopstra](https://github.com/flowframe)
-   [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
