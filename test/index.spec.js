import { expect } from 'chai';
import { createContainer, wipeContainer, addSomeRows } from './helpers';
import fakeCells from '../src';

describe('the library', () => {
	beforeEach(() => createContainer());
	afterEach(() => wipeContainer());

	it('should throws an exception if no id are specified', () => {
		expect(() => fakeCells()).to.throw;
  });

	it('should do nothing if there is no row in the table', () => {
		fakeCells({
			containerId: '#cntnr',
			tableId: '#tbl'
    });

		const canvas = document.querySelector('#cntnr canvas');
		expect(canvas).to.be.null;
  });

  it('should add a canvas to the container if there are some rows', () => {
  	addSomeRows();

      fakeCells({
				containerId: '#cntnr',
				tableId: '#tbl'
      });

      const canvas = document.querySelector('#cntnr canvas');
			expect(canvas).to.be.not.null;
  });
});
