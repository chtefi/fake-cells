import { expect } from 'chai';
import { createContainer, wipeContainer, addSomeRows } from './helpers';

describe('createContainer', () => {
  it('should add a container to the DOM', () => {
    createContainer();
    const qs = document.querySelector('#cntnr');
    expect(qs).to.be.not.null;
  });

  it('should add a table to the DOM', () => {
    const qs = document.querySelector('#tbl');
    expect(qs).to.be.not.null;
  });
});

describe('addSomeRows', () => {
  it('should do its job', () => {
    addSomeRows();
    const tds = document.querySelectorAll('#tbl td');
    expect(tds).to.have.length.above(0);
  });
});

describe('wipeContainer', () => {
  it('should remove the table from the DOM', () => {
    wipeContainer();
    const qs = document.querySelector('#tbl');
    expect(qs).to.be.null;
  });
  it('should remove the container from the DOM', () => {
    const qs = document.querySelector('#cntnr');
    expect(qs).to.be.null;
  });
});
