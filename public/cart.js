(function() {
  let cartButtonContainer = document.querySelector('.cart__buttons-container');
  if (!cartButtonContainer) {
    alert('hoho');
    return;
  }
  // el = (new DOMParser()).parseFromString(`<a class='btn' href='javascript:void(0)'>New Button</a>`, 'text/xml');
  // el.addEventListener('click', () => {
  //   alert('haha');
  // });
  el = `<a class='btn' href='javascript:void(0)'>New Button</a>`;
  const interval = setInterval(() => {
    try {
      cartButtonContainer.innerHTML = el + cartButtonContainer.innerHTML;
      cartButtonContainer.firstChild.addEventListener('click', () => {
        alert('success!');
      });
      clearInterval(interval)
    } catch (e) {

    }

  }, 100);

}) ();