async function f1() {
  await f2();
  console.log('await 밑 코드 실행');
  console.log('await 밑 코드 실행-2');
}

async function f2() {
  Promise.resolve().then(() => {
    console.log('then 실행');
  });
}

function main() {
  setTimeout(() => {
    console.log('setTimeout 실행');
  }, 0);
  f1();
  console.log('log 실행');
}

main();
