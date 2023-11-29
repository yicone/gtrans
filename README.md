## Setup
```sh
pnpm add -g netlify-cli
netlify init
```

## Test locally
```sh
pnpm dev
curl 'http://localhost:3000/.netlify/functions/engines-get-all'
```