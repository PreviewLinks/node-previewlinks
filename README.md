# PreviewLinks for Node.js

This is the official [PreviewLinks](https://previewlinks.io) client for Node.js.

## Installation

You can install the package via NPM:

```bash
npm install @previewlinks/node-previewlinks
```

## Usage

### Creating an instance

```js
const { PreviewLinks } = require('@previewlinks/node-previewlinks')

const previewlinks = new PreviewLinks({ apiToken: '<YOUR_API_TOKEN>' })
```

### Methods

```js
// List sites
previewlinks
    .listSites()
    .then(response => response.data)

// Show site
let siteId = 1

previewlinks
    .showSite(siteId)
    .then(response => response.data)

// Show site's templates
let siteId = 1

previewlinks
    .listSiteTemplates(siteId)
    .then(response => response.data)

// Generate a direct image URL (useful for downloading and storing images yourself)
let siteId = 1
let templateId = 1
let fields = {
    'previewlinks:title': 'Hello from Node.js!',
    'previewlinks:subtitle': 'This is an example...',
}

previewlinks
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

-   [Logan Craft](https://github.com/CraftLogan)
-   [Lars Klopstra](https://github.com/flowframe)
-   [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
