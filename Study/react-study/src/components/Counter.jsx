import { useState } from "react";
import "../App.css";

export default function Counter({totalCount, settotalCount}) {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="countBox">
        <span>{number} / {totalCount}</span>
        <button
          onClick={() => {
            setNumber(number + 1);
            settotalCount(totalCount + 1);
          }}>
          Add 1
        </button>
      </div>
    </>
  );
}
