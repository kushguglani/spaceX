## Project SpaceX on React

## Available Scripts

In the project directory, you can run:

### `npm run develop`

Runs the app in the development mode.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run test:coverage:unit`

Launches the test runner in the interactive watch mode with test covergae.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

## app include below features

- Server Side Rendering by uing node server and react libraries
- react-loadable: break your app into separate routes and load each one asynchronously.
- docker file for containerization and building image
- environment specific by using env-cmd
- unit test cases of all the components with above 95% tet coverage
- snapshot testing of the component
- Function base component with react hooks like useState, useEffect etc

## Current Quirks

- There are console message saying "componentWillMount has been renamed, and is not recommended for use." due to the react-loadable package. Hopefully React will support SSR with Suspense soon, but until then react-loadable works great and the console messages should not affect your app.
- This project does not have a webpack configuration that allows for the use of `url-loader` or `file-loader` (so no `import src from 'my-img.svg'`). Instead it relies on serving static assets via the `public/` directory. See `src/components/about/About.js` for a reference on how to work with assets in your app.
