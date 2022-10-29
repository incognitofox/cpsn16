# CPS Network 16

## Installation

First, to locally host the server, you need to have `npm` installed. You can do this by first installing the `nvm` package manager with the following command
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
Then exiting and reopening your terminal and typing:
```
nvm install node
```

To host the server:
1. `npm install` to install all depedencies
2. `npm start`

## Adding a new page

To add a new page, follow the below steps:
1. Add a path to `src/App.js`. To do this, add the line `<Route path="/[endpoint]" element={<[your page] />} />`.
2. At the top of `src/App.js`, add the line `import [your page] from "./pages/[your page].js"`
3. Create a file in `src/pages` called `[your page].js`.

When in doubt, look at the other routes in `src/App.js` as an example.

## Creating the page
Suppose we are creating a page called "Page"
1. Create the function 
```
  const [
```

When in doubt, look at `src/pages/Layout.js` as an example.
