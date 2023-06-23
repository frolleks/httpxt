# httpxt

A fast web framework.

## Usage

```js
// CommonJS
const httpxt = require("httpxt");
// ESM
import httpxt from "httpxt"

const app = httpxt();

app.get("/", async (req, res) => {
  res.end("Hello world!")
});

app.listen(3000, async () => {
  console.log("Server is up!")
});
```

## Installation

To install httpxt, run one of the following commands:

```sh
# npm
npm i httpxt

# yarn
yarn add httpxt

# pnpm
pnpm add httpxt
```