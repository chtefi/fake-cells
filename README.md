[![build status](https://img.shields.io/travis/chtefi/fake-cells/master.svg?style=flat-square)](https://travis-ci.org/chtefi/fake-cells) [![Coverage Status](https://coveralls.io/repos/chtefi/fake-cells/badge.svg?branch=master&service=github)](https://coveralls.io/github/chtefi/fake-cells?branch=master)


Draw some fake cells at the end of a `<table>` according to the dimensions of
the existing cells.

### API

Have a DOM such as :

```html
<div id="container">
	<table id="table" cellspacing="0">
	  <thead>
	      <tr>
	          <th>Country</th>
	          <th>Company</th>
	          <th>Phone</th>
	          <th>Id</th>
	      </tr>
	  </thead>
	  <tbody>
	      <tr>
	          <td>Congo, the Democratic Republic of the</td>
	          <td>Sociis Natoque Institute</td>
	          <td>04 26 51 32 21</td>
	          <td>BA6824E0-527E-F99E-9A5F-7BBDA3E3A679</td>
	      </tr>
	    	...
	  </tbody>
	</table>
</div>
```

When you call :

```javascript
import fakeCells from 'fake-cells';

fakeCells({
	containerId: '#container',
	tableId: '#table'
});
```

That will happen a `<canvas>` after the `<table>` that will simulate fake cells
at the end of the table. (instead of having empties `<tr><td>`)

### Example

```shell
cd examples/simple
npm install
npm run start
```

Go to `http://localhost:3000`.

### Commands

```
Lifecycle scripts included in fake-cells:
  test
    karma start
  prepublish
    npm run lint && npm run test && npm run clean && npm run build && npm run build:umd

available via `npm run-script`:
  clean
    rimraf lib dist
  build
    babel src --out-dir lib
  build:umd
    webpack src/index.js dist/fake-cells.js && set NODE_ENV=production&& webpack src/index.js dist/fake-cells.min.js
  lint
    eslint src test examples
  test:watch
    karma start --no-single-run --auto-watch
```

Coverage reports (from test) are generated in `coverage/`.
