const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

const productId = 1;
const updateIdx = initialProducts.findIndex((prod) => prod.id === productId);
const newProducts = [...initialProducts];
newProducts[updateIdx].count += 1;

console.log(newProducts);
