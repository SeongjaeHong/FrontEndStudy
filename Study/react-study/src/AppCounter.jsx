import React, { useState } from "react";
import Counter from "./components/Counter";
import './App.css';

export default function AppCounter() {
    const [totalCount, settotalCount] = useState(0);
    return (
        <>
        Total Count: {totalCount} {totalCount > 10? '🔥' : '❄️'};
        <div className="countBox">
            <Counter totalCount={totalCount} settotalCount={settotalCount} />
            <Counter totalCount={totalCount} settotalCount={settotalCount} />
        </div>
        </>
    );
}