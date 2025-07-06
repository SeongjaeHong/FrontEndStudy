import { useState, useRef, useLayoutEffect } from 'react';

export default function AutomaticBatchingText() {
  const [test, setTest] = useState(0);
  const testRef = useRef(null);

  const trigger = () =>
    setTest((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });

  const changeState = async () => {
    if (testRef.current) {
      clearTimeout(testRef.current);
      testRef.current = null;
    }

    // 요 안에서 한 개의 update function 은 하나로 batching 됨.
    console.log('Stage #1');
    trigger();
    trigger();

    // 1.5초 후에는 4개의 update function 을 하나로 batching 시킴.
    setTimeout(() => {
      console.log('Stage #2-1');
      trigger();
      trigger();
    }, 1500);
    setTimeout(() => {
      console.log('Stage #2-2');
      trigger();
      trigger();
    }, 1499);

    testRef.current = setTimeout(() => {
      console.log('Stage #3');
      // 1초 후에는 두 개의 update function 을 하나로 batching 시킴
      trigger();
      trigger();
    }, 1000);
    return;
  };

  useLayoutEffect(() => {
    console.log('render');
  });

  return (
    <div>
      <button onClick={changeState}>change it</button>
      <p> {test}</p>
    </div>
  );
}
