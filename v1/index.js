(function () {
  const btnElem = document.getElementById('add-btn'); // BOM
  const inputElem = document.getElementById('item-input');
  const listElem = document.getElementById('list');

  btnElem.addEventListener('click', (e) => {
    const value = inputElem.value;
    if (value.trim()) {
      const liElem = document.createElement('li');
      liElem.textContent = value;
      const btnElem = document.createElement('button');
      btnElem.textContent = '-';
      liElem.appendChild(btnElem)
      listElem.appendChild(liElem);
      inputElem.value = '';
    }
  });
  listElem.addEventListener('click', (e) => {
    const targetElem = e.target;
    if (targetElem.nodeName === 'BUTTON') {
      targetElem.parentElement.remove();
    }
  });
})();
