console.log('start');

setTimeout(() => {
  console.log('macrotask 1');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('microtask 1');
  })
  .then(() => {
    console.log('microtask 2');
  });

Promise.resolve()
  .then(() => {
    console.log('microtask 3');
  })
  .then(() => {
    console.log('microtask 4');
  });

requestAnimationFrame(() => {
  console.log('requestAnimationFrame callback');
});

console.log('end');
