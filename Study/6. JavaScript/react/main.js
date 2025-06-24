import { useState, render, useEffect } from './react.js';

function Component() {
  const [value, setValue] = useState(10);
  const [text, setText] = useState('apple');

  useEffect(() => {
    console.log('Value has been changed');
  }, [value]);

  useEffect(() => {
    console.log('Text has been changed');
  }, [text]);

  useEffect(() => {
    console.log('I just go everytime');
  });

  return {
    render: () => console.log({ value, text }),
    click: () => setValue(value + 1),
    type: (word) => setText(word),
  };
}

let App = render(Component);
App.click();
App = render(Component);
App.type('pear');
App = render(Component);
