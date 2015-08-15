From a table, draw some fake cells at its end.

API
===

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

Example
=======

```shell
cd examples/simple
npm install
npm run start
```

Go to `http://localhost:3000`.
