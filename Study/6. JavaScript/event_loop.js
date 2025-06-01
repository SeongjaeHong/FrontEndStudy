function addDiv(str, color) {
  const el = document.createElement('div');
  el.innerText = str;
  el.style.backgroundColor = color;
  el.style.padding = '2px';
  el.style.margin = '2px';
  document.body.appendChild(el);
}

function main() {
  addDiv('Call stack #1', 'red');
  setTimeout(() => {
    addDiv('Task queue #2', 'red');
  });
  f3();
  Promise.resolve()
    .then(() => {
      setTimeout(() => {
        addDiv('Task queue #3', 'red');
      });
      Promise.resolve().then(() => {
        addDiv('Micro task queue #4', 'red');
      });
      addDiv('Call stack #5', 'red');
      throw new Error('Error occurred @1');
    })
    .catch((e) => {
      addDiv(e, 'red');
    })
    .finally(() => {
      addDiv('Micro task queue #6', 'red');
    });
  f1();
  setTimeout(() => {
    addDiv('Task queue #7', 'red');
  });
  f2();
  addDiv('Call stack #8', 'red');
}

function f1() {
  addDiv('Call stack #9', 'green');
  setTimeout(() => {
    addDiv('Task queue #10', 'green');
  });
  Promise.resolve()
    .then(() => {
      addDiv('Micro task queue: #11', 'green');
    })
    .then(() => {
      setTimeout(() => {
        addDiv('Task queue #12', 'green');
      });
      addDiv('Call stack #13', 'green');
      throw new Error('Error occurred @2');
    })
    .catch((e) => {
      addDiv(e, 'green');
    })
    .finally(() => {
      addDiv('Micro task queue: #14', 'green');
    });
}

function f2() {
  addDiv('Call stack #15', 'blue');
  setTimeout(() => {
    addDiv('Task queue #16', 'blue');
  });
  Promise.resolve()
    .then(() => {
      setTimeout(() => {
        addDiv('Task queue #17', 'blue');
      });
      addDiv('Call stack #18', 'blue');
    })
    .then(() => {
      addDiv('Call stack #19', 'blue');
    })
    .finally(() => {
      addDiv('Micro task queue: #20', 'blue');
    });
}

async function f3() {
  await f4();
  addDiv('Call stack #21', 'yellow');
  Promise.resolve().then(() => {
    addDiv('Micro task queue #22', 'yellow');
  });
  addDiv('Call stack #23', 'yellow');
}

async function f4() {
  addDiv('Call stack #24', 'cyan');
  Promise.resolve()
    .then(() => {
      addDiv('Micro task queue #25', 'cyan');
    })
    .then(() => {
      addDiv('Micro task queue #26', 'cyan');
    })
    .finally(() => {
      addDiv('Micro task queue: #27', 'cyan');
    });
  addDiv('Call stack #28', 'cyan');
  Promise.resolve()
    .then(() => {
      addDiv('Micro task queue #29', 'cyan');
    })
    .finally(() => {
      addDiv('Micro task queue: #30', 'cyan');
    });
}

main();
