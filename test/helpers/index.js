export function createContainer() {
  const container = document.createElement('div');
  container.id = 'cntnr';
  container.style.height = '200px';
  document.body.appendChild(container);

  const table = document.createElement('table');
  table.id = 'tbl';
  container.appendChild(table);
}

export function addSomeRows() {
  const table = document.querySelector('#tbl');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbody.appendChild(tr);
  table.appendChild(tbody);
}

export function wipeContainer() {
  const container = document.querySelector('#cntnr');
  document.body.removeChild(container);
}
