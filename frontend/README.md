## Available Scripts

In order to start you can run:
### `npm install`
### `npm start`
### `npm test`

Note you need to run the backend first, and in `package.json` set `proxy` to the actual address of the backend

## Architecture

The app consists of smart components(container) and dummy components.
Smart components use redux store which enables seamless communication between components and with backend altough for this simple project we could just use `setState`.

In `Map.js` `GoogleMap` component is used to render google maps based on `LatLong` but we can always change it to something else easley(for example bing maps)

There is only one reducer but as application grows we can split them into multiple reducers and combine them while creating a store.

