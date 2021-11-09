# Users CRUD App

This is the demo app for the Front-End Talk about Data Fetching.

## Project Anatomy

This is a monorepo managed by Yarn Workspaces, containing 2 apps:

- Server – a Node.js app that provides the data
- Client – a Next.js app that consumes the data

## Project Setup

Run `yarn` from the project root directory to install all dependencies.

### Server App

Run `yarn workspace @fetalks-data-fetching/server start` from the project root directory to start the server.

#### Customize the server

You can edit the `json-server.json` file inside the `packages/server` folder to customize the server. Refer to the [`json-server` documentation](https://github.com/typicode/json-server) for more information.

### Client App

Run `yarn workspace @fetalks-data-fetching/client dev` from the project root directory to start the client dev server.

#### Customize the API endpoint

To customize the endpoint of the server that provides the APIs used by the client app, create an `.env` file inside the `packages/client` folder containing the `NEXT_PUBLIC_JSON_SERVER_URL` environment variable with the desired URL.
