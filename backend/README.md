## Available Scripts

In order to start you can run:
### `npm install`
### `npm start`

You can provide prot with environment variable or change it in `server.js`

## Architecture

Simple `rest api` based on `koa.js` used for retrieving and storing addresses also for searching available addresses with third party api(in this case Google's Geocoding API). `google-api` is an abstraction and is used to provide actual implementation for `geocode-service`. If we need to change to another thid party api we provide another abstraction and preserve the schema of returned value.
