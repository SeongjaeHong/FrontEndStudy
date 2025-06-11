function alertFruit(fruit) {
  alert('your choice is ' + fruit);
  //   console.dir(fruit);
}
const fruits = ['apple', 'banana'];
const $ul = document.createElement('ul');

fruits.forEach((fruit) => {
  const $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', () => alertFruit(fruit));
  $ul.appendChild($li);
});

document.body.appendChild($ul);
