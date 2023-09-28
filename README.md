# dir-tree-logger

**dir-tree-logger**  is a simple utility for logging directory structures to the console. It is based on TypeScript precompiled to JavaScript.

## Installation

You can install **dir-tree-logger** using npm:

```bash
npm install dir-tree-logger
```

## Usage
To use dir-tree-logger, follow these steps:

1. Import the module into your project:

```javascript
const logger = require('dir-tree-logger');
```

2. Initialize the logger by providing the base path and optionally a list of directories to exclude:

```javascript
logger.initialize('./ruta-base', ['node_modules', 'carpeta-omitida']);
```
3. Run your application to view the directory structure log in the console.

```javascript
const logger = require('dir-tree-logger');
```

4. Initialize the logger to log the directory structure in './my-directory'
```javascript
logger.initialize('./mi-directorio', ['node_modules']);
```

5. Run your application

## Contribuir
If you'd like to contribute to this project, we welcome collaborations! Feel free to open an issue or submit a pull request.

## Licencia
This project is under the MIT License.

## Contacto
For questions or comments, you can contact Franky Melero on LinkedIn.